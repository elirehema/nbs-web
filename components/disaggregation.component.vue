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
                  { text: 'Published ?', value: 'published' },
                  { text: 'Disaggregation Type ID', value: 'disaggregationtypeid' },
                  { text: 'Disaggregation Name', value: 'disaggregationname' },

                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },
                ],
    };
  },
   created: function () {
    let vm = this;
    vm.$store.dispatch('getAllDisaggregations');

  },
   computed: {
    datalist() {
      return this.$store.getters.disaggregationdata;
    }
   }

};
</script>
