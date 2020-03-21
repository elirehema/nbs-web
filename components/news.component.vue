 <template>
  <v-app class="app">
    <v-container>
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
                <span class="headline">Add News (To be implemented)</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="Legal first name*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Legal middle name"
                        hint="example of helper text only on focus"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Legal last name*"
                        hint="example of persistent helper text"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Email*" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Password*" type="password" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-autocomplete
                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                        label="Interests"
                        multiple
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>

      <v-data-table :headers="headers" :items="datalist" :items-per-page="5" class="elevation-1"></v-data-table>
    </v-container>
  </v-app>
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
    };
  },
  created: function () {
    let vm = this;
    vm.$store.dispatch('getSchedules');

  },
  methods: {
    getSchedule: function (id) {
      var data = this.$store.getters.getterschedule(id);

      this.$router.push('/schedule/' + id);
      return data;
    }

  },
  beforeMount: function () {

  },
  computed: {
    datalist() {
      return this.$store.getters.schedulesdata;
    }

  }

};

</script>
