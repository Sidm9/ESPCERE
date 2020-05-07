<template>
  <v-card class="mx-auto mt-4 md-4 mr-4 ml-4 " max-width="450">
    <v-img :src="image" :aspect-ratio="16 / 9"> </v-img>
    <v-card-title>
      <div class="display-1 mb-2">{{ name }}</div>
    </v-card-title>
    <v-row class="px-4 black--text" align="center">
      <v-avatar size="25" class=" ml-3">
        <v-img
          src="https://imageog.flaticon.com/icons/png/512/25/25473.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
          contain
        ></v-img>
      </v-avatar>

      <div class="title">{{ price }}</div>
      <v-spacer />

      <div class="title">Item Count</div>
      <div v-if="a > 0" class="title mx-5">
        <v-icon @click="removeFromCart">
          mdi-minus
        </v-icon>
        {{ a }}
        <v-icon @click="addToCart">
          mdi-plus
        </v-icon>
      </div>
      <div v-else class="title mx-5">
        {{ a }}
        <v-icon @click="addToCart">
          mdi-plus
        </v-icon>
      </div>
    </v-row>
    <v-divider class="mt-1 mx-1"></v-divider>
    <v-card-text>
      <!-- <router-link to="/Checkout"> -->
        <v-btn
          class="ma-2"
          rounded
          color="green"
          @click="checkoutdata"
          :disabled="disabled"
          dark
        >
          Checkout
        </v-btn>
      <!-- </router-link> -->
      <router-view></router-view>
      <v-btn rounded color="info" class="mr-2" @click="dialog = !dialog">
        <v-icon left>mdi-information-outline</v-icon>
        Description
      </v-btn>
      <v-dialog v-model="dialog" max-width="500px">
        <Description :image="{ image }" />
        <v-card>
          <v-card-title>
            <v-container>
              <v-img :src="image" :aspect-ratio="16 / 9"></v-img>
              <div class="text-center display-1 mt-4">
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
import { EventBus } from "./event-bus.js";
export default {
  created() {
    this.$emit;
  },
  props: {
    invId: {
      type: String,
    },
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

  data: function() {
    return {
      a: 2,
      disabled: true,
      cart: null,
      dialog: false,
    };
  },
  methods: {
    addToCart: function() {
      this.a += 1;
      console.log(this.a);
      this.check();
    },
    removeFromCart: function() {
      this.a -= 1;
      console.log(this.a);
      this.check();
    },
    check: function() {
      this.a > 0 ? (this.disabled = false) : (this.disabled = true);
      console.log("Disable " + this.disabled);
    },
    checkoutdata: function() {
      EventBus.$emit("i-got-clicked", this.a, this.name);
      this.$store.dispatch("addToCart", this.invId);
    },
  },

  mounted() {
    console.log();
    this.$http
      .get("http://localhost:3000/product")
      .then((response) => (this.info = response));
    console.log(this.a);
    this.check();
  },
};
</script>
