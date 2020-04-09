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
              <span class="headline">Add Indicator Category</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="4">
                    <v-text-field
                      label="Category ID*"
                      type="number"
                      hint="Indicator category ID"
                      persistent-hint
                      single-line
                      required
                      v-model="categoryid"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="4">
                    <v-text-field
                      label="Name *"
                      hint="Indicator Category Name  *"
                      type="text"
                      persistent-hint
                      required
                      single-line
                      v-model="name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="12" md="4">
                    <!--<v-text-field
                      label="Sector ID*"
                      hint="Select indicator category Sector ID"
                      persistent-hint
                      single-line
                      required
                      type="number"
                      v-model="sectorid"
                    ></v-text-field>-->

                    <v-select
                      v-model="sectorid"
                      hint="Select indicator category Sector ID"
                      :items="sectors"
                      item-text="sectorname"
                      item-value="sectorid"
                      label="Select sector"
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
        :sort-by="['categoryid','sectorid']"
        :sort-desc="[false, true]"
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
      title:'Indicator Categories',
    headers: [
                  {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                  },
                  { text: 'Category ID', value: 'categoryid' },
                  { text: 'Category Name', value: 'name' },
                  { text: 'Sector ID', value: 'sectorid' },
                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },
                ],
                dialog: false,
                categoryid: null,
                name:null,
                sectorid: null,
    };
  },
  methods:{
    save: function(){
      const data = {
        categoryid: this.categoryid,
        name: this.name,
        sectorid: this.sectorid.sectorid
      }
      this.$store.dispatch('postindicatorcategory', data)
      this.dialog = false;
    }

  },
   created: function () {
    let vm = this;
    

  },
   computed: {
    datalist() {
      return this.$store.getters.indicatorcategoriesdata;
    },
    sectors(){
      return this.$store.getters.sectordata;
    }
   }

};
</script>
<style >
.greencontainer {
  background-color: #81c784;
}
</style>

