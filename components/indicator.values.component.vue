 <template>
  <v-container fluid>
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
              <span class="headline">Add New Indicator Value</span>
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
                      v-model="disaggregationtypeid"
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
                      @change="onChange($event)"
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-select
                      v-model="disaggregationid"
                      hint="Second Disaggregations"
                      :items="seconddisaggregationvalues"
                      item-text="disaggregationvalue"
                      item-value="disaggregationid"
                      label="Select Second Disaggregations *"
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
                  </v-col>

                  <v-col v-if="mf" cols="12" sm="12" md="6">
                    <v-text-field
                      label="Male "
                      hint="Male"
                      type="number"
                      persistent-hint
                      single-line
                      v-model="malevalue"
                    ></v-text-field>
                  </v-col>

                  <v-col v-if="mf" cols="12" sm="12" md="6">
                    <v-text-field
                      label="Female"
                      hint="Female"
                      type="number"
                      persistent-hint
                      single-line
                      v-model="femalevalue"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      label="Total/Value *"
                      hint="Value/Total *"
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
    <!--<v-card>
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
        dense
        class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)" color="info">mdi-lead-pencil</v-icon>
          <v-icon small @click="deleteItem(item)" color="warning">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>-->
    <v-card>
      <v-tabs background-color="white" color="deep-purple accent-4" right>
        <v-tab>Indicators</v-tab>
        <v-tab>Regular</v-tab>

        <v-tab-item>
          <v-container fluid>
            <v-card flat color="white">
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
                :headers="indicators_datatable"
                :items="datalist"
                :items-per-page="5"
                :search="search"
                dense
                class="elevation-1"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)" color="info">mdi-lead-pencil</v-icon>
                  <v-icon small @click="deleteItem(item)" color="warning">mdi-delete</v-icon>
                </template>
              </v-data-table>
            </v-card>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container fluid>
            <v-card flat color="white">
              <v-card-title>
                {{titlef}}
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
                :headers="regular_datatable"
                :items="regularindicatorvalues"
                :items-per-page="5"
                :search="search"
                dense
                class="elevation-1"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)" color="info">mdi-lead-pencil</v-icon>
                  <v-icon small @click="deleteItem(item)" color="warning">mdi-delete</v-icon>
                </template>
              </v-data-table>
            </v-card>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>
<script lang="js">
export default {
  data() {
    return {
      titlex: 'Regular Indicator values',
      titlef: 'Frequent Indicator values',
      search: '',
      editedIndex: -1,
    indicators_datatable: [
            { text: ' ID', value: 'valueid', align: 'start', sortable: false, },
                  /*{ text: 'Email', value: 'email' },*/
           { text: 'Indicator', value: 'nbs_indicator.indicatorname' },
           {text: 'Disag:', value:'nbs_disaggregation_value.disaggregationvalue'},
           {text: 'Second:', value:'seconddisaggregation'},
            {text: 'Period Types', value:'nbs_period_type.periodname'},
            { text: 'Source:', value: 'nbs_indicator_source.sourcegroup'},
            { text: 'Value', value: 'value'},
            { text: 'Created At', value: 'updatedAt' },
            { text: 'Actions', value: 'actions', sortable: false },
                ],
  regular_datatable: [
                 { text: ' ID', value: 'valueid', align: 'start', sortable: false, },
                  /*{ text: 'Email', value: 'email' },*/
                  { text: 'Indicator', value: 'nbs_indicator.indicatorname' },
                  {text: 'Disag:', value:'nbs_disaggregation_value.disaggregationvalue'},
                   {text: 'Second ID', value:'seconddisaggregation'},
                   {text: 'Period Types', value:'nbs_period_type.periodname'},
                   { text: 'Source Id:', value: 'sourceid'},
                   {text: 'Male', value: 'male'},
                   {text: 'Female', value: 'female'},
                   {text: 'Total', value: 'total'},
                   { text: 'Created At', value: 'updatedAt' },
                   { text: 'Actions', value: 'actions', sortable: false },
                ],
                dialog: false,
                sourcegroup: null,
                sourceid: null,
                value: null,
                total: null,
                male: null,
                female: null,
                shortname: null,
                periodid:null,
                indicatorid: null,
                disaggregationtypeid: null,
                disaggregationid: null,
                reportingperiod: null,
                malevalue: null,
                femalevalue:null,
                mf: false,
    };
  },
  methods:{
     onChange(event) {
       if(event.periodcode != 'YYYY'){
         this.malevalue = null;
         this.femalevalue = null;
         this.mf = true;
       }else{
         this.mf = false;
       }
            
        },
          editItem: function (item) {
            this.email = item.email;
            this.malevalue = item.male;
            this.femalevalue = item.female;
            this.total = item.total ? item.total : item.value;
            this.value = item.value ? item.value: item.total;
            this.sourceid = item.sourceid;
            this.periodid = item.periodid;
            this.indicatorid = item.indicatorid;
            this.seconddisaggregation = item.seconddisaggregation;
            this.disaggregationid = item.disaggregationid;
            this.reportingperiod = item.reportingperiod;
            this.dialog = true
          },
    save: function(){
      const data = {
        email : localStorage.getItem("mmail"),
        indicatorid: this.indicatorid.indicatorid,
        disaggregationid: this.disaggregationtypeid.disaggregationtypeid,
        seconddisaggregation:  this.disaggregationid.disaggregationid,
        periodid: this.periodid.periodid,
        male: this.malevalue ? this.malevalue : 0,
        female: this.femalevalue ? this.femalevalue : 0,
        reportingperiod: parseInt(this.reportingperiod),
        sourceid: this.sourceid.sourceid,
        value: this.value  ? this.value:this.total,
        total: this.total ? this.total: this.value,
      }
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
    },
     seconddisaggregationvalues() {
      return this.$store.getters.disaggregationvaluesdata;
    },
    regularindicatorvalues(){
      return this.$store.getters.regularindicatorvaluesdata;
    }

   }

};
</script>
<style >
.greencontainer {
  background-color: #81c784;
}
</style>

