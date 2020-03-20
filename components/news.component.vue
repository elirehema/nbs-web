<template>
  <v-app class="app">
    <v-container>
      <v-card flat outlined>
        <v-container fluid>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left font-weight-bold">ID</th>
                  <th class="text-left font-weight-bold">Title</th>
                  <th class="text-left font-weight-bold">Source</th>
                  <th class="text-left font-weight-bold">Url</th>
                  <th class="text-left font-weight-bold">CreatedAt</th>
                  <th class="text-left font-weight-bold">UpdatedAt</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in news" :key="item.id" @click="getSchedule(item.id)">
                  <td class="font-weight-light">{{ item.id }}</td>
                  <td class="font-weight-light">{{ item.title }}</td>
                  <td class="font-weight-light">{{ item.source }}</td>
                  <td class="font-weight-light">{{ item.url }}</td>
                  <td class="font-weight-light">{{ item.createdAt }}</td>
                  <td class="font-weight-light">{{ item.updatedAt }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>

<script lang="js" >
export default {
  data() {
    return {
      item: 1,
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
    news() {
      return this.$store.getters.schedulesdata;
    }

  }

};

</script>
