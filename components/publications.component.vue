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
                <span class="headline">Add Publication</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Publication Title*"
                        type="text"
                        hint="Publication"
                        persistent-hint
                        required
                        v-model="title"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Description *"
                        hint="Description *"
                        type="text"
                        persistent-hint
                        required
                        v-model="description"
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
    headers: [
                  {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                  },

                  { text: 'Title', value: 'title' },
                  { text: 'Publication Type', value: 'publicationtype' },
                  { text: 'Description', value: 'description' },
                  { text: 'Release Date', value: 'releasedate'},
                  { text: 'Publication Contents', value: '"publicationcontent'},
                  
                  {text:'Publication Address', value:'publicationaddress'},
                 
                  
                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },
                ],
                dialog: false,
                title:null,
                publicationid:null,
                publicationtype: null,
                description:null,
                releasedate:null,
                publicationcontent:null,
                contenttype: null,
                publicationaddress:null,
                publicationsize:null,
                recorder:null


    };
  },
  methods:{
    save: function(){
      const data = {
          title:this.title,
                publicationid: this.publicationid,
                publicationtype: this.publicationtype,
                description:this.description,
                releasedate: new Date(Date.now()),
                publicationcontent: this.publicationcontent,
                contenttype: this.contenttype,
                publicationaddress: this.publicationaddress,
                publicationsize: this.publicationsize,
                recorder:this.recorder
      }
      this.$store.dispatch('postpublications', data);
      this.dialog = false;

    }
  },
   created: function () {
    let vm = this;

  },
   computed: {
    datalist() {
      return this.$store.getters.publicationsdata;
    }
   }

};
</script>
