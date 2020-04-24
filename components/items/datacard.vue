<template>
  <!--<v-card class="mt-4 mx-auto" max-width="400">-->
  <v-sheet
    class="v-sheet--offset mx-auto pa-3"
    :class="{'card green': true == $vuetify.breakpoint.xs } "
    elevation="12"
    max-width="calc(100% - 32px)"
  >
    <v-list-item>
      <v-list-item-avatar tile size="50">
        <v-avatar>
          <v-icon class="iconi" color="black" large>{{d.icon ? d.icon : 'mdi-poll'}}</v-icon>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="overline font-weight-bold">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <span v-on="on">{{d.count ? d.count : '0'}} {{d.title}}</span>
            </template>
            <span>{{d.title}}</span>
          </v-tooltip>
        </v-list-item-title>
        <v-list-item-subtitle class="caption font-weight-regular">
          <span x-small outlined color="white lighten-1" text-color="white">{{d.title}}</span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-sheet>
  <!--
    <v-card-text class="pt-0">
      <!--   <div class="title font-weight-light mb-2">User Registrations</div>
      <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>--
      <v-divider class="my-2"></v-divider>
      <v-icon class="mr-2" small>mdi-clock</v-icon>
      <span class="caption grey--text font-weight-light">last update: {{d.updates}}</span>
    </v-card-text>
  </v-card>-->
  <!-- <v-card xs="12" color="blue" dark>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80">
        <v-card color="green lighten-2" dark max-width="100">
          <v-card-title>
            <v-icon color="blue" large>{{d.icon ? d.icon : 'mdi-poll'}}</v-icon>
          </v-card-title>
        </v-card>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline font-weight-bold">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <span v-on="on">{{d.title}}</span>
            </template>
            <span>{{d.title}}</span>
          </v-tooltip>
        </v-list-item-title>
        <v-list-item-subtitle class="caption font-weight-regular">
          <v-chip
            x-small
            outlined
            color="green lighten-1"
            text-color="white"
          >{{d.count ? d.count : '0'}} {{d.title}}</v-chip>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <hr class="mx-2 my-0" />

    <v-card-text class="caption font-weight-regular">
      <v-icon>mdi-chart-timeline-variant</v-icon>Source: National Bureau of Statistics
    </v-card-text>

    <v-card-actions></v-card-actions>
  </v-card>-->
</template>
<script>
export default {
  props: ["d"]
};
</script>
<style lang="scss" scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.card {
  width: 100%;
  box-sizing: border-box;
  padding: 2em;
  font-family: Ubuntu;
  border-radius: 10px;
  color: white;
  line-height: 25px;
  box-shadow: 5px 5px 10px #ccc;
  margin-right: 1em;
}

.card.purple {
  background: linear-gradient(150deg, #f731db, #961276 100%);
}

.card.green {
  background: linear-gradient(150deg, #39ef74, #961276 100%);
}
</style>