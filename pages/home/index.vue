<template>
  <v-card elevation="0">
    <v-tabs
      background-color="primary"
      class="ma-2"
      v-model="tab"
      horizontal
      center-active
      show-arrows
      dark
    >
      <v-tab v-for="(item, index) in items" :key="index" class="font-weight-medium">{{item.title}}</v-tab>
      <v-tabs-items v-model="tab" class="ma-0" color="primary">
        <v-tab-item>
          <sectors-component></sectors-component>
        </v-tab-item>
        <v-tab-item>
          <periodtype-component></periodtype-component>
        </v-tab-item>
        <v-tab-item>
          <indicatorcategories-component></indicatorcategories-component>
        </v-tab-item>

        <v-tab-item>
          <indicators-component></indicators-component>
        </v-tab-item>

        <v-tab-item>
          <indicatorsource-component></indicatorsource-component>
        </v-tab-item>
        <v-tab-item>
          <indicator-values-component></indicator-values-component>
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
        <!-- <v-tab-item>
        <mainland-component></mainland-component>
        </v-tab-item>-->
        <v-tab-item>
          <source-group-component></source-group-component>
        </v-tab-item>
        <v-tab-item>
          <currentrelease-component></currentrelease-component>
        </v-tab-item>

        <v-tab-item>
          <news-component></news-component>
        </v-tab-item>
        <v-tab-item>
          <publications-component></publications-component>
        </v-tab-item>
        <!-- <v-tab-item>
        <privilage-component></privilage-component>
      </v-tab-item>
      <v-tab-item>
        <rural-component></rural-component>
      </v-tab-item>
      <v-tab-item>
        <totalfemale-component></totalfemale-component>
        </v-tab-item>-->
      </v-tabs-items>
    </v-tabs>
  </v-card>
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
import IndicatorsValuesComponent from "~/components/indicator.values.component.vue";
import DisaggregationsValueComponent from "~/components/disaggregation.value.component.vue";
import LoginsComponent from "~/components/logins.component.vue";
import MainlandComponent from "~/components/mainland.component.vue";
import PeriodTypeComponent from "~/components/period.type.component.vue";
import PrivilageComponent from "~/components/privilage.component.vue";
import PublicationsComponent from "~/components/publications.component.vue";
import RuralComponent from "~/components/rural.component.vue";
import TotalFemaleComponent from "~/components/totalfemale.component.vue";
import SourceGroupComponent from "~/components/sources.groups.component.vue";

export default {
  components: {
    "news-component": NewsComponent,
    "indicators-component": IndicatorsComponent,
    "sectors-component": SectorsComponent,
    "indicatorsource-component": IndicatorSourceComponent,
    "currentrelease-component": CurrentReleasesComponent,
    "indicator-values-component": IndicatorsValuesComponent,
    "disaggregations-component": DisaggregationsComponent,
    "indicatorcategories-component": IndicatorCategoriesComponent,
    "disaggregationsvalue-component": DisaggregationsValueComponent,
    "logins-component": LoginsComponent,
    "mainland-component": MainlandComponent,
    "periodtype-component": PeriodTypeComponent,
    "publications-component": PublicationsComponent,
    "privilage-component": PrivilageComponent,
    "rural-component": RuralComponent,
    "totalfemale-component": TotalFemaleComponent,
    "source-group-component": SourceGroupComponent
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
        { title: "Sectors", icon: "mdi-eye" },
        { title: "Period Types", icon: "mdi-eye" },
        { title: "Indicator Categories", icon: "mdi-eye" },

        { title: "Indicators", icon: "mdi-eye" },

        { title: "Indicator Sources", icon: "mdi-eye" },
        { title: "Indicator Values", icon: "mdi-eye" },

        { title: "Disaggregations", icon: "mdi-eye" },

        { title: "Disaggregations Values", icon: "mdi-eye" },
        { title: "Logins", icon: "mdi-eye" },
        // { title: "Main Land", icon: "mdi-eye" },
        { title: "Source Groups", icon: "mdi-eye" },
        { title: "Current Releases", icon: "mdi-eye" },
        { title: "News", icon: "news-component" },
        { title: "Publications", icon: "mdi-eye" }
        // { title: "Privilages", icon: "mdi-eye" },
        // { title: "Rural", icon: "mdi-eye" },
        // { title: "Total Females", icon: "mdi-eye" }
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
.user-profile {
  font-family: "Lato", sans-serif;
}
</style>
