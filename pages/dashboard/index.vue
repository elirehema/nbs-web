<template>
  <v-img
    height="100%"
    width="100%"
    fill-height
    fill-width
    src="https://media.nbclosangeles.com/2019/09/GettyImages-522872908.jpg"
  >
    <v-row class="pa-3" no-gutters>
      <v-col
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xs="12"
        class="pa-2"
        xl="2"
        wrap
        v-for="(d, index) in datas"
        :key="index"
      >
        <data-card :d="d"></data-card>
      </v-col>
    </v-row>
  </v-img>
</template>
<script>
import { mapGetters } from "vuex";
import DataCard from "~/components/items/datacard.vue";
export default {
  components: {
    "data-card": DataCard
  },
  layout: "dashboard",
  data() {
    return {
      ptcount: "",
      pvcount: this.$store.getters.periodtypesdata.length,
      datas: [
        {
          title: "Sectors",
          icon: "mdi-poll",
          count: this.$store.getters.periodtypesdata.length
        },
        {
          title: "Time Periods",
          icon: "mdi-poll",
          count: this.ptcount
        },
        {
          title: "Privilage's",
          icon: "mdi-poll",
          count: this.pvcount
        }
      ]
    };
  },
  created() {
    this.ptcount = this.$store.getters.periodtypesdata.length;
    this.pvcount = this.$store.getters.periodtypesdata.length;
  },
  watch: {
    ptcount() {
      this.ptcount = this.$store.getters.periodtypescount;
    },
    pvcount() {
      this.pvcount = this.$store.getters.periodtypesdata.length;
    }
  },
  beforeMount() {
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