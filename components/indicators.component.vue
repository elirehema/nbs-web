 <template>
 <v-container class="greencontainer">
      <v-row>
        <v-col cols="12" md="11"></v-col>
        <v-col cols="6" md="1">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn class="mx-2" fab dark v-on="on" color="green lighten-2">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Add Indicator</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Indicator ID*"
                        type="number"
                        hint="Inicator ID"
                        persistent-hint
                        single-line
                        required
                        v-model="indicatorid"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Category ID *"
                        hint="Category ID *"
                        type="number"
                        persistent-hint
                        required
                        single-line
                        v-model="categoryid"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Period ID *"
                        hint="Period ID"
                        persistent-hint
                        single-line
                        required
                        type="number"
                        v-model="periodid"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Indicator Name *"
                        hint="Indicator Name"
                        persistent-hint
                        single-line
                        required
                        type="text"
                        v-model="indicatorname"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green lighten-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="green lighten-1 pa-1" small @click="save()">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-data-table :headers="headers" :items="datalist" :items-per-page="5" class="elevation-1"></v-data-table>
    </v-container>

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
                  { text: 'Indicator ID', value: 'indicatorid' },
                  { text: 'Category ID', value: 'categoryid' },
                  { text: 'Period ID', value: 'periodid' },
                  {text: 'Indicator Name', value:'indicatorname'},
                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },
                ],
                dialog: false,
                indicatorname: null,
                indicatorid: null,
                periodid: null,
                categoryid: null

    };
  },
   created: function () {
    let vm = this;
    vm.$store.dispatch('getAllIndicators');

  },
  methods:{
    save: function(){
      this.$store.dispatch('postindicatorvalue', {indicatorid: this.indicatorid, indicatorname: this.indicatorname, categoryid: this.categoryid, periodid: this.periodid});
      this.dialog = false;
    }

  },
   computed: {
    datalist() {
      return this.$store.getters.indicatorsdata;
    }
   }

};
</script>
