 <template>
  <v-container class="greencontainer">
    <v-row>
      <v-col cols="12" md="11"></v-col>
      <v-col cols="6" md="1">
        <v-btn class="mx-2" fab dark color="green lighten-2">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
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
      search:'',
      titlex: 'Login Histories',
      editedIndex: -1,
    headers: [
                  {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'loginid',
                  },
                  { text: 'Username', value: 'username' },
                  { text: 'Email ', value: 'email' },
                  { text: 'Last Login', value: 'lastlogin' },
                  { text: 'Last Logout', value: 'lastlogout' },

                  { text: 'Updated At', value: 'createdAt' },
                  { text: 'Created At', value: 'updatedAt' },

                ],
    };
  },
   created: function () {
    let vm = this;

  },
   computed: {
    datalist() {
      return this.$store.getters.loginsdata;
    }
   }

};
</script>
