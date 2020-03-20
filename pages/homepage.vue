<template>
  <section class="user-profile">
    <v-card>
      <v-toolbar flat class="green lighten-2" dark>
        <v-toolbar-title>DATA LIST</v-toolbar-title>
      </v-toolbar>
      <v-tabs horizontal hide-slider center-active>
        <v-tab color="indigo" centered:true v-for="(item, index) in items" :key="index">
          <p class="overline font-weight-medium">{{item.title}}</p>
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <news-component></news-component>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <indicators-component></indicators-component>
        </v-tab-item>
        <v-tab-item>
          <sectors-component></sectors-component>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </section>
</template>

<script>
import IndicatorsComponent from "~/components/indicators.component.vue";
import NewsComponent from "~/components/news.component.vue";
import SectorsComponent from "~/components/sectors.component.vue";
export default {
  components: {
    "news-component": NewsComponent,
    "indicators-component": IndicatorsComponent,
    "sectors-component": SectorsComponent
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
        { title: "Sectors", icon: "mdi-eye" }
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
    vm.$store.dispatch("getProfile");
  }
};
</script>
