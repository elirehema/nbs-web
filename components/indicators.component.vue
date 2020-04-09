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
                    <v-select
                      v-model="select"
                      hint="Select Indicator category ID"
                      :items="indicatorcategories"
                      item-text="name"
                      item-value="id"
                      label="Select"
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      v-model="periodid"
                      hint="Select Period ID"
                      :items="periodtypes"
                      item-text="periodname"
                      item-value="periodid"
                      label="Select period id"
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
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
    <v-data-table
      :headers="headers"
      :items="datalist"
      :items-per-page="5"
      class="elevation-1"
      loading="true"
      loading-text="No data available ...!"
    ></v-data-table>
  </v-container>
</template>
<script lang="js">
export default {
  data() {
    return {
    headers: [

                  { text: 'Indicator ID', value: 'indicatorid' },
                  { text: 'Category ID', value: 'categoryid' },
                  { text: 'Period ID', value: 'periodid' },
                  {text: 'Indicator Name', value:'indicatorname'},
                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },
                ],
                dialog: false,
                select: null,
                indicatorname: null,
                indicatorid: null,
                periodid: null,
                categoryid: null

    };
  },
   created: function () {
    let vm = this;

  },
  methods:{
    save: function(){
const data = { indicatorname: this.indicatorname, categoryid: this.select.categoryid, periodid: this.periodid.periodid};
this.$store.dispatch('postindicatorvalue', data);
      this.dialog = false;
    }

  },
   computed: {
    datalist() {
      return this.$store.getters.indicatorsdata;
    },
    indicatorcategories(){
      return this.$store.getters.indicatorcategoriesdata;
    },
    periodtypes(){
      return this.$store.getters.periodtypesdata;
    }
   }

};
</script>
