<template>
  <section class="user-profile">
    <v-toolbar flat class="green lighten-2" dark>
      <v-toolbar-title>DATA LIST</v-toolbar-title>
    </v-toolbar>
    <v-tabs horizontal hide-slider center-active>
      <v-tab color="indigo" centered:true v-for="(item, index) in items" :key="index">
        <p class="overline font-weight-medium">{{item.title}}</p>
      </v-tab>
      <v-tab-item>
        <news-component></news-component>
      </v-tab-item>
      <v-tab-item>
        <indicators-component></indicators-component>
      </v-tab-item>
      <v-tab-item>
        <indicatorcategories-component></indicatorcategories-component>
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
      <v-tab-item>
        <disaggregationsvalue-component></disaggregationsvalue-component>
      </v-tab-item>
      <v-tab-item>
        <logins-component></logins-component>
      </v-tab-item>
      <v-tab-item>
        <mainland-component></mainland-component>
      </v-tab-item>
      <v-tab-item>
        <periodtype-component></periodtype-component>
      </v-tab-item>
      <v-tab-item>
        <publications-component></publications-component>
      </v-tab-item>
      <v-tab-item>
        <privilage-component></privilage-component>
      </v-tab-item>
      <v-tab-item>
        <rural-component></rural-component>
      </v-tab-item>
      <v-tab-item>
        <totalfemale-component></totalfemale-component>
      </v-tab-item>
    </v-tabs>
  </section>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
import FooterData from "@/assets/data/footer.json";
import FooterComponent from "~/components/footer/FooterComponent.vue";
import IndicatorsComponent from "~/components/indicators.component.vue";
import NewsComponent from "~/components/news.component.vue";
import SectorsComponent from "~/components/sectors.component.vue";
import IndicatorSourceComponent from "~/components/indicator.sources.component.vue";
import IndicatorCategoriesComponent from "~/components/indicator.categories.component.vue";
import CurrentReleasesComponent from "~/components/current.releases.component.vue";
import DisaggregationsComponent from "~/components/disaggregation.component.vue";

import DisaggregationsValueComponent from "~/components/disaggregation.value.component.vue";
import LoginsComponent from "~/components/logins.component.vue";
import MainlandComponent from "~/components/mainland.component.vue";
import PeriodTypeComponent from "~/components/period.type.component.vue";
import PrivilageComponent from "~/components/privilage.component.vue";
import PublicationsComponent from "~/components/publications.component.vue";
import RuralComponent from "~/components/rural.component.vue";
import TotalFemaleComponent from "~/components/totalfemale.component.vue";

export default {
  components: {
    "news-component": NewsComponent,
    "indicators-component": IndicatorsComponent,
    "sectors-component": SectorsComponent,
    "indicatorsource-component": IndicatorSourceComponent,
    "currentrelease-component": CurrentReleasesComponent,
    "disaggregations-component": DisaggregationsComponent,
    "indicatorcategories-component": IndicatorCategoriesComponent,
    "disaggregationsvalue-component": DisaggregationsValueComponent,
    "logins-component": LoginsComponent,
    "mainland-component": MainlandComponent,
    "periodtype-component": PeriodTypeComponent,
    "publications-component": PublicationsComponent,
    "privilage-component": PrivilageComponent,
    "rural-component": RuralComponent,
    "totalfemale-component": TotalFemaleComponent
  },

  data() {
    return {
      labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
      time: 0,
      tab: null,
      forecast: [
        {
          day: "Tuesday",
          icon: "mdi-white-balance-sunny",
          temp: "24\xB0/12\xB0"
        },
        {
          day: "Wednesday",
          icon: "mdi-white-balance-sunny",
          temp: "22\xB0/14\xB0"
        },
        { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" }
      ],
      items: [
        { title: "News", icon: "news-component" },
        { title: "Indicators", icon: "mdi-eye" },
        { title: "Indicator Categories", icon: "mdi-eye" },
        { title: "Sectors", icon: "mdi-eye" },
        { title: "Indicator Sources", icon: "mdi-eye" },
        { title: "Current Releases", icon: "mdi-eye" },
        { title: "Disaggregations", icon: "mdi-eye" },

        { title: "Disaggregations Values", icon: "mdi-eye" },
        { title: "Logins", icon: "mdi-eye" },
        { title: "Main Land", icon: "mdi-eye" },
        { title: "Period Types", icon: "mdi-eye" },
        { title: "Publications", icon: "mdi-eye" },
        { title: "Privilages", icon: "mdi-eye" },
        { title: "Rural", icon: "mdi-eye" },
        { title: "Total Females", icon: "mdi-eye" }
      ]
    };
  },
  head() {
    return {
      title: "Home Page"
    };
  },
  created: function() {
    let vm = this;
    //vm.$store.dispatch("getProfile");
  }
};
</script>
<style scoped>
</style>
