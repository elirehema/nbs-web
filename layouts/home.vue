
<template>
  <v-app dark class="app">
    <v-container fluid>
      <v-row>
        <v-col cols="4" sm="4" class="d-flex child-flex"></v-col>
        <v-col cols="4" sm="4" class="d-flex child-flex">
          <v-img align-center aspect-ratio="1" class="white" max-height="100" alt="NBS"></v-img>
        </v-col>
        <v-col cols="4" sm="4" class="d-flex child-flex"></v-col>
      </v-row>

      <v-content>
        <v-container ma-0 pa-0 fluid>
          <nuxt />
        </v-container>
      </v-content>
    </v-container>
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
  }
};
</script>
<style scoped>
.container {
  padding: 0%;
}
</style>
