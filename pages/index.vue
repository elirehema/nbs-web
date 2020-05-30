<template>
  <v-container class="pa-3" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-2">
          <v-toolbar prominent src="https://pbs.twimg.com/media/D-I3_JJXkAAK8Ga.jpg" flat>
            <v-toolbar-title color="white">Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login" id="check-login-form" class="mt-3" v-model="valid">
              <v-text-field
                label="Username"
                v-model="username"
                prepend-inner-icon="person"
                :rules=" [rules.required]"
                outlined
                rounded
                solo
                flat
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                prepend-inner-icon="lock"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
                outlined
                rounded
                solo
                flat
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <!--<v-btn v-on:click="nativateToHere('signup')">Register</v-btn>-->
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit" :disabled="!valid" form="check-login-form">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="js" src="~/static/js/signin.js">

</script>