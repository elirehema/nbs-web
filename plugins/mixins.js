import swal from 'sweetalert';

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    delete_selected_item: async function (dipatch, item) {
      await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this data?",
        icon: "warning",
        type: "warning",
        buttons: true,
        dangerMode: true,
        timer: 3000
      }).then((willDelete) => {
        if (willDelete) {
          this.$store.dispatch(dipatch, item);
          swal("Deleted!", "Your data has been deleted!", { icon: "success" });
          window.location.href = href;
        } else {
          swal("Your data is safe!");
        }
      })

    }
  }
};
