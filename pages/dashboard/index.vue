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
import DataCard from "~/components/items/datacard.vue";
export default {
  components: {
    "data-card": DataCard
  },
  layout: "dashboard",
  data() {
    return {
      gettet: this.$store.getters,
      datas: [
        {
          title: "Sectors",
          icon: "mdi-poll",
          count: this.$store.getters.periodtypesdata.length
        },
        {
          title: "Time Periods",
          icon: "mdi-poll",
          count: this.$store.getters.periodtypesdata.length
        },
        {
          title: "Privilages",
          icon: "mdi-poll",
          count: this.$store.getters.privilegesdata.length
        }
      ]
    };
  },
  computed: {
    periods: function() {
      return this.$store.getters.periodtypesdata.length;
    }
  }
};
</script>