 <template>
  <v-app class="app">
    <v-container>
      <v-data-table :headers="headers" :items="datalist" :items-per-page="5" class="elevation-1"></v-data-table>
    </v-container>
  </v-app>
</template>
<script lang="js">
export default {
  data() {
    return {
    headers: [
                  {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                  },
                  { text: 'Title', value: 'title' },
                  { text: 'Source ', value: 'source' },
                  { text: 'URL', value: 'url' },
                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },
                ],
    };
  },
   created: function () {
    let vm = this;
    vm.$store.dispatch('getAllCurrentReleases');

  },
   computed: {
    datalist() {
      return this.$store.getters.currentreleasesdata;
    }
   }

};
</script>
