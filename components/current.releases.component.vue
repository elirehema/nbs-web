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
              <span class="headline">Create new current release</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12 " md="6">
                    <v-text-field
                      label="Title*"
                      hint="Release Title"
                      type="text"
                      v-model="title"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      label="Source*"
                      type="text"
                      hint="Current Release source"
                      v-model="source"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Desriptions*"
                      type="text"
                      hint="Descriptions"
                      v-model="description"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      label="Url/Link*"
                      type="text"
                      hint="Link to specific source"
                      v-model="url"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      label="Release Date*"
                      type="text"
                      hint="Release date e.g 12/09/1998"
                      v-model="release_date"
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
        {{titles}}
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
      dialog: false,
      search: '',
      titles: "Current Releases",
      editedIndex: -1,
    headers: [

                  { text: 'Title', value: 'title', align: 'start',
                    sortable: false },
                  { text: 'Source ', value: 'source' },
                  { text: 'URL', value: 'url' },
                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },

              { text: 'Actions', value: 'actions', sortable: false },
                ],
                source: null,
                url: null,
                title: null,
                description: null,
                release_date: null,
    };
  },
  methods:{
    save(){
      console.log("save")
      this.dialog = false
      const data = {
        title: this.title,
        source: this.source,
        url: this.url,
        description: this.description,
        release_date: this.release_date
      }
      this.$store.dispatch('postcurrentrelease', data);
    }
  },
   created: function () {
    let vm = this;


  },
   computed: {
    datalist: {
      get(){
      return this.$store.getters.currentreleasesdata;
      }
    }
   }

};
</script>
