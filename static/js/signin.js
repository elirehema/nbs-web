export default {
  meta: {
    auth: {
      requiresAuth: false
    }
  },
  layout: "home",
  data: () => ({
    valid: false,
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "",
    username: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
  }),
  computed: {

  },
  methods: {

    login() {
      let data = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch('login', data).then(response => {

        if (response != null && response.data.session != null) {

          var user = response.data.user;
          const cookie = response.data.session.cookie;
          this.$cookies.set("quser", user, cookie.exipires, true);
          this.$cookies.set("qAccessToken", response.accessToken, cookie.exipires, true);
          //this.$cookies.set("quuid", user.id, cookie.exipires, true);
          this.$router.push('/dashboard');
        }
      }, error => {
      });

    },
    nativateToHere(id) {
      this.$router.push('/' + id);
    },
  },
  beforeMount() {
    console.log(this.$store.getters.isLoggedIn);
    if (this.$store.getters.isLoggedIn) {
      this.$router.push("/dashboard");
    }
  }
};
