
<template>
  <v-app class="aspire">
    <v-content>
      <nuxt />
    </v-content>
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
