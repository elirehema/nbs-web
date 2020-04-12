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
              <span class="headline">Add Source Group</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
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
        class="caption font-weight-light"
        dense
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
      titlex: 'Source Groups',
      search: '',
      editedIndex: -1,
    headers: [

                  { text: 'Source ID', value: 'sourceid', align: 'start',
                    sortable: false, },
                  { text: 'Source Name', value: 'sourcename' },
                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },
                  { text: 'Actions', value: 'actions', sortable: false },
                ],
                dialog: false,
                sourcename: null
    };
  },
  methods:{
    save: function(){
      const data =
      this.$store.dispatch('postsourcegroupvalue', {sourcename: this.sourcename})
      this.dialog = false;
    }

  },
   created: function () {
    let vm = this;

  },
   computed: {
    datalist() {
      return this.$store.getters.sourcegroupsdata;
    }
   }

};
</script>
<style >
.greencontainer {
  background-color: #81c784;
}
</style>

