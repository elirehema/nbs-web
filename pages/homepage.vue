<template>
  <v-app class="app">
    <v-container fluid>
      <v-card>
        <v-tabs show-arrows grow v-model="tab" background-color="primary" dark>
          <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>

          <v-tab-item>
            <v-card flat>
              <item class="content"></item>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import NewsComponent from "../pages/schedule/index";
export default {
  components: {
    NewsComponent
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
        { tab: "One", content: "Tab 1 Content" },
        { tab: "Dissaggregations", content: NewsComponent },
        { tab: "Dissaggregations values", content: "Tab 3 Content" },
        { tab: "Indicators", content: "Tab 4 Content" },
        { tab: "Indicator Category", content: "Tab 5 Content" },
        { tab: "Indicators Source", content: "Tab 6 Content" },
        { tab: "Indicators Values", content: "Tab 7 Content" },
        { tab: "Mainland", content: "Tab 8 Content" },
        { tab: "News ", content: "Tab 9 Content" },
        { tab: "Period Types", content: "Tab 10 Content" }
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
