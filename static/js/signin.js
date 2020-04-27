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
    if (localStorage.getItem("qAccessToken") != null) {
      this.$router.push("/dashboard");
    }
    const vm = this;
    Promise.all([
      vm.$store.dispatch("getAllIndicatorCategories"),
      vm.$store.dispatch("getAllCurrentReleases"),
      vm.$store.dispatch("getAllDisaggregations"),
      vm.$store.dispatch("getAlldisaggregationvalues"),
      vm.$store.dispatch("getAllIndicatorsSources"),
      vm.$store.dispatch("getAllIndicators"),
      vm.$store.dispatch("getAllLogins"),
      vm.$store.dispatch("getAllmainlands"),
      vm.$store.dispatch("getAllperiodtypes"),
      vm.$store.dispatch("getAllprivileges"),
      vm.$store.dispatch("getAllpublications"),
      vm.$store.dispatch("getAllRurals"),
      vm.$store.dispatch("getAllSectors"),
      vm.$store.dispatch("getAlltotalfemales"),
      vm.$store.dispatch("getnews")
    ]).then(function () {
      console.log("Loading complete...");
    });
  }
};
