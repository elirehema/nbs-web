 <template>
  <v-container class="greencontainer">
    <v-data-table
      :headers="headers"
      :items="datalist"
      :items-per-page="5"
      class="elevation-1"
      loading="true"
      loading-text="No data available ...!"
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
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="News Title*"
                          type="text"
                          hint="News Title"
                          persistent-hint
                          required
                          v-model="title"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Source *"
                          hint="News source *"
                          type="text"
                          persistent-hint
                          required
                          v-model="source"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="URL *"
                          hint="Link to the News article"
                          persistent-hint
                          required
                          v-model="url"
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
            </v-form>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)" color="primary">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)" color="warning">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>
<script lang="js">
export default {
  data() {
    return {
    dialog: false,
    editedIndex: -1,
    valid: true,
    headers: [
                  {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'newsid',
                  },
                  { text: 'Title', value: 'title' },
                  { text: 'Source ', value: 'source' },
                  { text: 'URL', value: 'url' },
                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },
                  { text: 'Actions', value: 'actions', sortable: false },
                ],
                title: null,
                source: null,
                url: null,
                newsid: null
    };
  },
 
  methods: {
    save: function(){
      const data = {newsid: this.newsid, title: this.title, source: this.source, url: this.url}
     
       if (this.editedIndex > -1) {
          Object.assign(this.datalist[this.editedIndex], this.editedItem)
          console.log(data);
          this.$store.dispatch('editnews', data)
      }else {
     this.$store.dispatch('savenews', data)
      }
      this.close();
    },

    editItem: function (item) {
        this.editedIndex = this.datalist.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.title = item.title;
        this.newsid = item.newsid;
        this.source = item.source;
        this.url = item.url;
        this.dialog = true
     },
    deleteItem: function (item) {
        const index = this.datalist.indexOf(item)
        if (window.confirm("Are you sure you want to delete this " + item.title + "?")) {
          this.$store.dispatch('deletenews', item)}
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
      get:function (){
      return this.$store.getters.newsdata;
      },
      set: function(value){
        this.$store.dispatch('savenews', value)
      }
    },
     formTitle () {
        return this.editedIndex === -1 ? 'New news item' : 'Edit news item'
      },
  }
};

</script>
