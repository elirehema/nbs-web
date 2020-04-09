<template>
  <v-card xs="12" color="blue" dark>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80">
        <v-card color="green lighten-2" dark max-width="100">
          <v-card-title>
            <v-icon large>{{d.icon ? d.icon : 'mdi-poll'}}</v-icon>
          </v-card-title>
        </v-card>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline font-weight-bold">{{d.title}}</v-list-item-title>
        <v-list-item-subtitle
          class="caption font-weight-regular"
        >{{d.count ? d.count : '0'}} {{d.title}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <hr class="mx-2 my-0" />

    <v-card-text class="caption font-weight-regular">
      <v-icon>mdi-chart-timeline-variant</v-icon>Source: National Bureau of Statistics
    </v-card-text>

    <v-card-actions></v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["d"]
};
</script>