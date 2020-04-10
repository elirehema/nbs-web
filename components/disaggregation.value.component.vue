 <template>
  <v-container style="background-color: #81C784;">
    <v-row>
      <v-col cols="12" md="11"></v-col>
      <v-col cols="6" md="1">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn class="mx-2" fab dark v-on="on" color="green lighten-2">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-form ref="form">
            <v-card>
              <v-card-title>
                <span class="headline">Create new disaggregations Value</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        label="Disaggregation value*"
                        hint="Disaggregation value (required)"
                        type="text"
                        v-model="disaggregationvalue"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                      <v-select
                        v-model="selectdisagtype"
                        hint="Disaggregation Type id (required)"
                        :items="disaggregationsdata"
                        item-text="disaggregationname"
                        item-value="disaggregationtypeid"
                        label="Select disaggregation type"
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
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="save()">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
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
      ></v-data-table>
    </v-card>
  </v-container>
</template>
<script lang="js">
export default {
  data() {
    return {
      search: '',
      titlex: 'Disaggregations Values',
    headers: [
                 
                  { text: 'Disaggregation ID', value: 'disaggregationid',align: 'start' },
                  { text: 'Disaggregation Type ID', value: 'disaggregationtypeid' },
                  { text: 'Disaggregation Value', value: 'disaggregationvalue' },

                  { text: 'Created At', value: 'createdAt' },
                  { text: 'Updated  At', value: 'updatedAt' },
                ],
                dialog: false,
                disaggregationid: null,
                disaggregationtypeid: null,
                disaggregationvalue: null,
                selectdisagtype: null,
    };
  },
  methods:{
  save(){
    const data = {
      disaggregationtypeid: this.selectdisagtype.disaggregationtypeid,
      disaggregationvalue: this.disaggregationvalue
    }
    console.log(data)
    this.$store.dispatch('postdisaggregationvalue',data);
    this.dialog = false;
    this.$refs.form.reset();

  }

  },
   created: function () {
    let vm = this;


  },
   computed: {
    datalist() {
      return this.$store.getters.disaggregationvaluesdata;
    },
    disaggregationsdata(){
      return this.$store.getters.disaggregationdata;
    }
   }

};
</script>
