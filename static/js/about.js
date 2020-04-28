export default {
  meta: {
    auth: {
      requiresAuth: true
    }
  },
  data() {
    return {
      title: 'About Us',
      app_name: 'Admin Dashboard Application',

    };
  },
  head() {
    return {
      title: 'About Us'
    };
  },
};
