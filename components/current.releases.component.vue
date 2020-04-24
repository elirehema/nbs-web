 <template>
  <v-container class="greencontainer">
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
        dense
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <div class="my-2">
                  <v-btn color="green" fab x-small dark v-on="on">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
              </template>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{formTitle}}</span>
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
              </v-form>
            </v-dialog>
          </v-toolbar>
        </template>
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
      valid: true,
    headers: [

                  { text: 'Title', value: 'title', align: 'start',
                    sortable: false },
                  { text: 'Source ', value: 'source' },
                 
                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },

              { text: 'Actions', value: 'actions', sortable: false },
                ],
                source: null,
                url: null,
                title: null,
                sourceid: null,
                releaseid: null,
                description: null,
                release_date: null,
    };
  },
  methods:{
    save: function(){
      console.log("save")
      this.dialog = false
      const data = {
        releaseid: this.releaseid,
        title: this.title,
        source: this.source,
        url: this.url,
        description: this.description,
        release_date: this.release_date
      }
       if (this.editedIndex > -1) {
          Object.assign(this.datalist[this.editedIndex], this.editedItem)
          this.$store.dispatch('editdicurrentrelease', data)
      }else {
      this.$store.dispatch('postcurrentrelease', data);
      }
      this.close();
    },
       editItem: function (item) {
        this.editedIndex = this.datalist.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.title = item.title;
        this.source = item.source;
        this.description = item.description;
        this.url = item.url;
        this.releaseid = item.releaseid;
        this.dialog = true
     },
     deleteItem: function (item) {
        const index = this.datalist.indexOf(item)
        if (window.confirm("Are you sure you want to delete this " + item.title + "?")) {
          this.$store.dispatch('deletecurrentrelease', item)}
     },
    close: function () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
          this.$refs.form.reset()
        }, 300)
      },
  },
 
  watch: {
      dialog (val) {
        val || this.close()
      },
    },
   computed: {
    datalist: {
      get(){
      return this.$store.getters.currentreleasesdata;
      }
    },
    formTitle () {
        return this.editedIndex === -1 ? 'New release' : 'Edit release'
      },
   }

};
</script>
