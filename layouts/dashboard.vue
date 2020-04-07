
<template>
  <v-app dark class="app">
    <v-content>
      <v-img
        height="100%"
        width="100%"
        fill-height
        fill-width
        src="https://media.nbclosangeles.com/2019/09/GettyImages-522872908.jpg"
      >
        <v-container ma-0 pa-3 fluid>
          <nuxt />
        </v-container>
      </v-img>
    </v-content>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      locales: ["English", "Kiswahili"]
    };
  },
  head() {
    return {
      title: "Home Page"
    };
  },
  beforeMount: function() {
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
    ]).then(function() {
      console.log("Loading complete...");
    });
  }
};
</script>
<style scoped>
.container {
  padding: 0%;
}
</style>
