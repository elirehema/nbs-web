<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" class="justify-center" justify="center">
      <v-col cols="12" sm="4" md="4">
        <v-card class="elevation-12" max-width="400">
          <v-toolbar prominent src="https://apps.tsn.go.tz/public/uploads/cb3b081b518cf4fde87d51ebd070b36c.JPG" flat>
            <v-toolbar-title color="white">Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login" id="check-login-form" class="mt-3" v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      label="Username"
                      v-model="username"
                      prepend-icon="person"
                      :rules=" [rules.required]"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      prepend-icon="lock"
                      :append-icon="show1 ? 'visibility' : 'visibility_off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit" :disabled="!valid" form="check-login-form">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  props: {
    source: String
  }
};
</script>
</template>
<script lang="js" src="~/static/js/signin.js">

</script>
