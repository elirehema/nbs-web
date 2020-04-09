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
              <span class="headline">Add Period Type</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Period ID*"
                      type="number"
                      hint="Period ID"
                      persistent-hint
                      single-line
                      required
                      v-model="periodid"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Period Code *"
                      hint="Period Code *"
                      type="text"
                      persistent-hint
                      required
                      single-line
                      v-model="periodcode"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Period Name *"
                      hint="Period Name"
                      persistent-hint
                      single-line
                      required
                      type="text"
                      autocomplete="false"
                      v-model="periodname"
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
        {{title}}
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
        loading="true"
      ></v-data-table>
    </v-card>
  </v-container>
</template>
<script lang="js">
export default {
  data() {
    return {
      title: 'Period types',
      search: '',
    headers: [
                  {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                  },
                  { text: 'Period ID', value: 'periodid' },
                  { text: 'Period Name', value: 'periodname' },
                  { text: 'PeriodCode', value: 'periodcode' },
                  { text: 'Created At', value: 'createdAt' },
                  { text: 'Updated At', value: 'updatedAt' },
                ],
                dialog: false,
                periodcode: null,
                periodid: null,
                periodname: null,
    };
  },
  methods:{
    save: function(){
      const data ={periodid:this.periodid, periodcode:this.periodcode,periodname:this.periodname};
      this.$store.dispatch('postperiodtypevalue', data);
      this.dialog = false;
    }

  },
   created: function () {
    let vm = this;

  },
   computed: {
    datalist() {
      return this.$store.getters.periodtypesdata;
    }
   }

};
</script>
