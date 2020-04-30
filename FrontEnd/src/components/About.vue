<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <div class="display-2 text-center mb-12">ADMIN PAGE</div>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Add Product </v-toolbar-title>
                <v-spacer />
                <v-tooltip bottom>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <router-link to="/">
                      <v-btn icon large target="_blank" v-on="on">
                        <v-icon>mdi-home-circle</v-icon>
                      </v-btn>
                    </router-link>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="Product"
                    label="Product Name"
                    name="login"
                    mdi-icon="home-cicle"
                    type="text"
                  />

                  <v-text-field v-model="Price" label="Price" type="text" />

                  <v-text-field
                    v-model="Description"
                    label="Description"
                    type="text"
                  />
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required|max:10"
                  >
                    <v-text-field
                      v-model="Count"
                      label="Count"
                      :error-messages="errors"
                      type="text"
                    />

                    <v-text-field
                      v-model="Image"
                      label="Image"
                      :error-messages="errors"
                      type="text"
                    />
                  </ValidationProvider>
                  <v-spacer />
                  <v-btn color="primary" @click="send" class="mt-5"
                    >Add To Database
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- <h1>{{ Price }}</h1> -->
      </v-container>
    </v-content>
    <v-snackbar
      v-model="alert"
      right="true"
      color="success"
      :left="x === 'left'"
      :timeout="1500"
      top="true"
      :vertical="mode === 'vertical'"
    >
      Added To Database {{ Image }}
    </v-snackbar>
  </v-app>
</template>

<script>
// import { extend } from 'vee-validate';
import { ValidationProvider } from "vee-validate";
export default {
  props: {
    source: String,
  },
  components: {
    ValidationProvider,
  },

  data() {
    return {
      alert: false,
      Product: "",
      Price: null,
      Description: "",
      Count: null,
      Image: "",
    };
  },

  methods: {
    send: function() {
      this.alert = !false;
      this.$http
        .post("http://localhost:3000/create", {
          name: this.Product,
          price: this.Price,
          description: this.Description,
          count: this.Count,
          image: this.Image,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },

  //   extend('positive', value => {
  //   return value >= 0;
  // });
};
</script>
