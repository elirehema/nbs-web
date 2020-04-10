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
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Source Name *"
                      hint="Source Name *"
                      type="text"
                      persistent-hint
                      required
                      single-line
                      v-model="sourcename"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Short Name *"
                      hint="Short Name"
                      persistent-hint
                      single-line
                      required
                      type="text"
                      autocomplete="false"
                      v-model="shortname"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Source Group *"
                      hint="Source Group"
                      persistent-hint
                      single-line
                      required
                      type="text"
                      v-model="sourcegroup"
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
      titlex: 'Indicator Sources',
      search: '',
    headers: [
                
                  { text: 'Source ID', value: 'sourceid', align: 'start',
                    sortable: false, },
                  { text: 'Source Name', value: 'sourcename' },
                  { text: 'Short Name', value: 'shortname' },
                  {text: 'Source Group', value:'sourcegroup'},
                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },
                ],
                dialog: false,
                sourcegroup: null,
                sourceid: null,
                sourcename: null,
                shortname: null,
    };
  },
  methods:{
    save: function(){
      const data = {
        sourcegroup: this.sourcegroup,
       
        sourcename: this.sourcename,
        shortname: this.shortname
      }
      this.$store.dispatch('postindicatorources', data)
      this.dialog = false;
    }

  },
   created: function () {
    let vm = this;

  },
   computed: {
    datalist() {
      return this.$store.getters.indicatorsourcesdata;
    }
   }

};
</script>
<style >
.greencontainer {
  background-color: #81c784;
}
</style>

