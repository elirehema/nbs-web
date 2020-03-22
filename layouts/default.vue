<template>
  <v-app class="app">
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-card class="mx-auto" flat>
        <v-list-item>
          <v-router-link to="/profile">
            <v-list-item-avatar>
              <v-img src="https://answersafrica.com/wp-content/uploads/2015/01/somalia.jpg" dark></v-img>
            </v-list-item-avatar>
          </v-router-link>
          <v-list-item-content>
            <v-list-item-title class="headline">@{{userdata.username}}</v-list-item-title>
            <v-list-item-subtitle>{{userdata.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions class="info lighten-1">
          <v-btn dark icon @click="drawer = !drawer">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn dark icon @click="changemode">
            <v-icon v-if="!dark">mdi-brightness-6</v-icon>
            <v-icon v-if="dark">mdi-brightness-5</v-icon>
          </v-btn>

          <v-menu bottom left>
            <template v-slot:activator="{ on }">
              <v-btn dark icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list dense>
              <v-list-item v-for="(item, i) in actions" :key="i" @click="selectedItemAction(i)">
                <v-list-item-avatar width="36" height="35">
                  <v-icon class="success white--text" v-text="item.icon"></v-icon>
                </v-list-item-avatar>
                <v-list-item-title class="font-weight-light">{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-actions>
      </v-card>
      <v-list subheader tile>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-avatar width="36" height="35">
            <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-light">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      elevation="0"
      :clipped-left="clipped"
      color="indigo lighten-2"
      fixed
      app
      dark
      src="https://www.tanzaniatourism.go.tz/images/featured/mount-kilimanjaro.jpg"
      fade-img-on-scroll
      shrink-on-scroll
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>Tanzania National Bureau of Statistics</v-toolbar-title>

      <v-spacer></v-spacer>
      <!--<template v-slot:extension>
        <v-tabs horizontal hide-slider center-active>
          <v-tab color="indigo" centered:true v-for="(item, index) in tabs" :key="index">
            <p class="overline font-weight-medium">{{item.title}}</p>
          </v-tab>
          <v-tab-item>
            <v-card text>
              <news-component></news-component>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <indicators-component></indicators-component>
          </v-tab-item>
          <v-tab-item>
            <sectors-component></sectors-component>
          </v-tab-item>
          <v-tab-item>
            <indicatorsource-component></indicatorsource-component>
          </v-tab-item>
          <v-tab-item>
            <currentrelease-component></currentrelease-component>
          </v-tab-item>
          <v-tab-item>
            <disaggregations-component></disaggregations-component>
          </v-tab-item>
        </v-tabs>
      </template>-->
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
        { title: "View profile", icon: "mdi-account-circle" },
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
          this.$router.push("/profile");
          break;
        case 1:
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
  beforeMount: function() {},
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
