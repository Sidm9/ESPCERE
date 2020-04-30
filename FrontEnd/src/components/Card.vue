<template>
  <v-card class="mx-auto mt-4 md-4 mr-4 ml-4 " max-width="450">
    <v-img :src="image" :aspect-ratio="16 / 9"> </v-img>
    <v-card-title>
      <div class="display-1 mb-2">{{ name }}</div>
    </v-card-title>
    <v-row class="px-4 black--text" align="center">
      <v-avatar size="20" class="mr-2 ml-3">
        <v-img
          src="https://image.shutterstock.com/image-illustration/bitcoin-logo-png-vector-transparent-260nw-1654430290.jpg"
          contain
        ></v-img>
      </v-avatar>

      <div class="title">{{ price }}</div>
      <v-spacer />

      <div class="title">Item Count</div>
      <div v-if="a > 0" class="title mx-5">
        {{ count }}
        <v-icon @click="removeFromCart">
          mdi-minus
        </v-icon>
      </div>
      <div v-else>
        <span class="title mx-5"> 0 </span>
      </div>
    </v-row>
    <v-divider class="mt-1 mx-1"></v-divider>
    <v-card-text>
      <v-btn class="ma-2" rounded color="indigo" dark @click="addToCart">
        Add To Cart</v-btn
      >
      <v-btn rounded color="info" class="mr-2" @click="dialog = !dialog">
        <v-icon left>mdi-information-outline</v-icon>
        Description
      </v-btn>
      <v-dialog v-model="dialog" max-width="500px">
        <Description :image="{ image }" />
        <v-card>
          <v-card-title>
            <v-container>
              <v-img :src="image" :aspect-ratio="16/9"></v-img>
              <div class="text-center display-1  mt-4">
                {{ name }}
              </div>
              <div class="text-justify title mt-10">
                {{ description }}
              </div>
            </v-container>

            <v-spacer></v-spacer>
            <v-menu bottom left> </v-menu>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
    count: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  // components: {
  //   // Description,
  // },
  data: function() {
    return {
      a: this.count,
      minus_display: true,
      dialog: false,
    };
  },
  methods: {
    addToCart: function() {
      // let request = `http://localhost:3000/product/${this.a}`
      this.a -= 1;

      console.log(this.a);
    },
    removeFromCart: function() {
      this.a += 1;
      console.log(this.a);
    },
  },

  mounted() {
    console.log();
    this.$http
      .get("http://localhost:3000/product")
      .then((response) => (this.info = response));
    console.log(this.a);
  },
};
</script>
<style>
body,
div,
span,
a {
  font-family: "Montserrat", sans-serif;
}
</style>
