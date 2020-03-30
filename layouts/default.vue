<template>
  <v-app class="app">
    <v-app-bar
      elevation="0"
      :clipped-left="clipped"
      color="indigo lighten-2"
      fixed
      app
      dark
      src="https://ak1.picdn.net/shutterstock/videos/986371/thumb/1.jpg"
      fade-img-on-scroll
      shrink-on-scroll
      prominent
    >
      <v-toolbar-title>Tanzania National Bureau of Statistics</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu bottom transition="slide-y-transition">
        <template v-slot:activator="{ on }">
          <div class="text-center">
            <v-btn v-on="on" class="mx-2" fab dark small color="green lighten-2">
              <v-icon dark>mdi-filter-variant</v-icon>
            </v-btn>
          </div>

          <!-- <v-btn dark icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>-->
        </template>

        <v-list dense>
          <v-list-item v-for="(item, i) in actions" :key="i" @click="selectedItemAction(i)">
            <v-list-item-avatar width="24" height="24">
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title class="font-weight-light">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <div class="green lighten-1">
        <v-container>
          <nuxt />
        </v-container>
      </div>
    </v-content>

    <footer-component
      class="hidden-sm-and-down"
      v-bind:ChapterDetails="ChapterDetails"
      v-bind:FooterData="FooterData"
    ></footer-component>
  </v-app>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
import FooterData from "@/assets/data/footer.json";
import FooterComponent from "~/components/footer/FooterComponent.vue";
import IndicatorsComponent from "~/components/indicators.component.vue";
import NewsComponent from "~/components/news.component.vue";
import SectorsComponent from "~/components/sectors.component.vue";
import IndicatorSourceComponent from "~/components/indicator.sources.component.vue";
import CurrentReleasesComponent from "~/components/current.releases.component.vue";
import DisaggregationsComponent from "~/components/disaggregation.component.vue";

export default {
  async fetch({ store, params }) {
    // await this.$store.dispatch("getProfile");
  },
  components: {
    FooterComponent,
    "news-component": NewsComponent,
    "indicators-component": IndicatorsComponent,
    "sectors-component": SectorsComponent,
    "indicatorsource-component": IndicatorSourceComponent,
    "currentrelease-component": CurrentReleasesComponent,
    "disaggregations-component": DisaggregationsComponent
  },
  data() {
    return {
      ChapterDetails: ChapterDetails,
      FooterData: FooterData,
      clipped: false,
      drawer: false,
      fixed: false,
      picture: true,
      dark: false,
      tabs: [
        { title: "News", icon: "news-component" },
        { title: "Indicators", icon: "mdi-eye" },
        { title: "Sectors", icon: "mdi-eye" },
        { title: "Indicator Source", icon: "mdi-eye" },
        { title: "Current Release", icon: "mdi-eye" },
        { title: "Disaggregations", icon: "mdi-eye" }
      ],

      items: [
        {
          icon: "mdi-home-circle-outline",
          title: "Home",
          subtitle: "Go to Home Page",
          to: "/home",
          iconClass: "info lighten-1 white--text"
        },
        {
          icon: "mdi-help-circle-outline",
          title: "Help",
          subtitle: "Are you in need of help ?",
          to: "/help",
          iconClass: "info lighten-1 white--text"
        },
        {
          icon: "mdi-information-outline",
          title: "About Us",
          subtitle: "Read more about us",
          to: "/about",
          iconClass: "info lighten-1 white--text"
        },
        {
          icon: "mdi-alpha-c-circle-outline",
          title: "Contact Us",
          subtitle: "Contact kopasmart team/community",
          to: "/contacts",
          iconClass: "info lighten-1 white--text"
        },
        {
          icon: "mdi-format-list-text",
          title: "Repayment Schedules",
          subtitle: "Repayment Schedule list",
          to: "/schedule",
          iconClass: "info lighten-1 white--text"
        }
      ],
      actions: [
        // { title: "View profile", icon: "mdi-account-circle" },
        { title: "Settings", icon: "mdi-cog" },
        { title: "Help", icon: "mdi-help" },
        { title: "Logout", icon: "mdi-logout-variant" }
      ],
      miniVariant: false,
      right: true,
      shaped: true,
      collapseOnScroll: true,
      rightDrawer: false,
      year: new Date().getFullYear()
    };
  },

  methods: {
    selectedItemAction: function(item) {
      switch (item) {
        case 0:
          //this.$router.push("/profile");
          break;
        case 2:
          localStorage.removeItem("qAccessToken");
          localStorage.removeItem("uuId");
          this.$router.push("/");
          break;
      }
    },
    changemode: function() {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = this.dark;
    }
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
  },
  computed: {
    userdata() {
      return this.$store.getters.userInfo;
    }
  }
};
</script>
<style>
.app {
  font-family: "Montserrat", sans-serif;
  background-color: indianred;
}
</style>
