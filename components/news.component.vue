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
              <span class="headline">Add News</span>
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
        </v-dialog>
      </v-col>
    </v-row>

    <v-data-table :headers="headers" :items="datalist" :items-per-page="5" class="elevation-1"></v-data-table>
  </v-container>
</template>
<script lang="js">
export default {
  data() {
    return {
    dialog: false,
    headers: [
                  {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                  },
                  { text: 'Title', value: 'title' },
                  { text: 'Source ', value: 'source' },
                  { text: 'URL', value: 'url' },
                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },
                ],
                title: null,
                source: null,
                url: null
    };
  },
  created: function () {
    let vm = this;
    vm.$store.dispatch('getnews');

  },
  methods: {
    save(){
      const data = {title: this.title, source: this.source, url: this.url}
      this.$store.dispatch('savenews', data)
      this.dialog = false;
      
       this.reload();
    },
    reload(){
      this.$store.dispatch('getnews');
    }

  },
  beforeMount: function () {

  },
  computed: {
    datalist: {
      get:function (){
      return this.$store.getters.newsdata;
      },
      set: function(value){
        this.$store.dispatch('savenews', value)
      }
    }

  }

};

</script>
