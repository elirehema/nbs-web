<template>
  <v-img
    height="100%"
    width="100%"
    fill-height
    fill-width
    src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Simple-White-Gradient-Background-Image.jpg"
  >
    <v-row class="pa-0 mt-7" no-gutters>
      <v-col
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xs="12"
        class="pa-1 mt-1"
        xl="2"
        wrap
        v-for="(d, index) in datas"
        :key="index"
      >
        <data-card :d="d" v-if="d.visible"></data-card>
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
      datas: [],
      timer: ""
    };
  },
  created() {
    this.initialize();
    this.timer = setInterval(this.initialize, 3000);
  },
  watch: {
    ptcount() {
      this.ptcount = this.$store.getters.periodtypescount;
    },
    pvcount() {
      this.pvcount = this.$store.getters.periodtypesdata.length;
    }
  },
  methods: {
    initialize() {
      this.datas = [
        {
          title: "Sectors",
          icon: "mdi-blur",
          visible: true,
          count: this.$store.getters.sectordata.length
        },
        {
          title: "Indicators",
          icon: "mdi-blur",
          visible: true,
          count: this.$store.getters.indicatorsdata.length
        },
        {
          title: "Disaggregations",
          icon: "mdi-blur",
          visible: true,
          count: this.$store.getters.disaggregationdata.length
        },

        {
          title: "News",
          icon: "mdi-newspaper",
          visible: true,
          count: this.$store.getters.newsdata.length
        },
        {
          title: "Period Types",
          icon: "mdi-clock-outline",
          visible: true,
          count: this.$store.getters.periodtypesdata.length
        },
        {
          title: "Indicator Sources",
          icon: "mdi-blur",
          visible: true,
          count: this.$store.getters.indicatorsourcesdata.length
        },
        {
          title: "Disaggregation Values",
          icon: "mdi-bullseye",
          visible: true,
          count: this.$store.getters.disaggregationvaluesdata.length
        },

        {
          title: "Current Releases",
          icon: "mdi-blur",
          visible: true,
          count: this.$store.getters.currentreleasesdata.length
        },
        {
          title: "Source groups",
          icon: "mdi-blur",
          visible: true,
          count: this.$store.getters.sourcegroupsdata.length
        },

        {
          title: "Indicator values",
          icon: "mdi-file-find",
          visible: true,
          count: this.$store.getters.indicatorvaluesdata.length
        },

        {
          title: "Logins",
          icon: "mdi-login-variant",
          visible: localStorage.getItem("mroles").includes("ROLE_ADMIN"),
          count: this.$store.getters.loginsdata.length
        },

        {
          title: "Publications",
          icon: "mdi-earth",
          visible: true,
          count: this.$store.getters.publicationsdata.length
        }
      ];
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  beforeMount() {}
};
</script>