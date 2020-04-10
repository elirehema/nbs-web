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
              <span class="headline">Add new Sector</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="sectorname"
                      label="Sector Name*"
                      hint="sector name"
                      persistent-hint
                      required
                    ></v-text-field>
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
      dialog: false,
      sectorid: null,
      sectorname: null,
      search: '',
      titlex: 'Sectors',
       headers: [
             
              { text: 'Sector ID', value: 'sectorid', align: 'start',
                sortable: false,},
              { text: 'Sector Name', value: 'sectorname' },
              { text: 'Updated At', value: 'createdAt' },
              { text: 'Created At', value: 'updatedAt' },
            ],

    };
  },
  methods:{
    save(){
      const data  ={
        sectorname: this.sectorname
      }
      this.$store.dispatch('postsector', data)
      this.dialog = false;
    }


  },
   created: function () {
    let vm = this;

  },
   computed: {
    datalist() {
      return this.$store.getters.sectordata;
    }
   }

};
</script>
