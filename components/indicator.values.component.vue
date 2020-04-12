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
              <span class="headline">Add Indicator Source</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="6">
                    <v-select
                      v-model="indicatorid"
                      hint="Select Indicator "
                      :items="indicators"
                      item-text="indicatorname"
                      item-value="indicatorid"
                      label="Select indicator id"
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-select
                      v-model="disaggregationid"
                      hint="Select Disaggregations "
                      :items="disaggregations"
                      item-text="disaggregationname"
                      item-value="disaggregationtypeid"
                      label="Select disaggregation id"
                      type="number"
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-select
                      v-model="periodid"
                      hint="Select Period ID"
                      :items="periodtypes"
                      item-text="periodname"
                      item-value="periodid"
                      label="Select period id"
                      type="number"
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      label="Second Disaggregations *"
                      hint="Second Disaggregations"
                      persistent-hint
                      single-line
                      required
                      type="number"
                      autocomplete="false"
                      v-model="seconddisaggregation"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      label="Value *"
                      hint="Value *"
                      type="number"
                      persistent-hint
                      required
                      single-line
                      v-model="value"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      label="Reporting period *"
                      hint="Reporting period"
                      persistent-hint
                      single-line
                      required
                      type="number"
                      v-model="reportingperiod"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-select
                      v-model="sourceid"
                      hint="Select Source ID *"
                      :items="sourcegroups"
                      item-text="sourcename"
                      item-value="sourceid"
                      label="Select source id"
                      required
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
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
    <v-card>
      <v-card-title>
        {{titlex}}
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="datalist"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
        dense
      >
        <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)" color="primary">mdi-pencil</v-icon>
                <v-icon small @click="deleteItem(item)" color="warning">mdi-delete</v-icon>
              </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script lang="js">
export default {
  data() {
    return {
      titlex: 'Indicator values',
      search: '',
      editedIndex: -1,
    headers: [

                  { text: 'Value ID', value: 'valueid', align: 'start',
                    sortable: false, },
                  { text: 'Email', value: 'email' },
                  { text: 'IndicatorID', value: 'indicatorid' },
                  {text: 'Disag ID', value:'disaggregationid'},
                   {text: 'Second ID', value:'seconddisaggregation'},
                   {text: 'Period ID', value:'periodid'},
                   {text: 'Source ID', value: 'sourceid'},
                    {text: 'Value', value: 'value'},
                  { text: 'Created At', value: 'updatedAt' },
                  { text: 'Actions', value: 'actions', sortable: false },
                ],
                dialog: false,
                sourcegroup: null,
                sourceid: null,
                value: null,
                shortname: null,
                periodid:null,
                indicatorid: null,
                disaggregationid: null,
                seconddisaggregation: null,
                reportingperiod: null,
    };
  },
  methods:{
    save: function(){
      const data = {
        email : localStorage.getItem("mmail"),
        indicatorid: this.indicatorid.indicatorid,
        disaggregationid: this.disaggregationid.disaggregationtypeid,
        seconddisaggregation:  parseInt(this.seconddisaggregation),
        periodid: this.periodid.periodid,
         reportingperiod: parseInt(this.reportingperiod),
         sourceid: this.sourceid.sourceid,

        value: this.value,


      }
      console.log(data);
      this.$store.dispatch('postindicatorvalues', data)
      this.dialog = false;
    }

  },
   created: function () {
    let vm = this;

  },
   computed: {
    datalist() {
      return this.$store.getters.indicatorvaluesdata;
    },
     periodtypes(){
      return this.$store.getters.periodtypesdata;
    },
     indicators() {
      return this.$store.getters.indicatorsdata;
    },
     disaggregations() {
      return this.$store.getters.disaggregationdata;
    },
     sourcegroups() {
      return this.$store.getters.sourcegroupsdata;
    }
   }

};
</script>
<style >
.greencontainer {
  background-color: #81c784;
}
</style>

