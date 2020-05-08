<template>
  <div>
    <div v-for="n in incart" :key="n">
      <cartItems :count="n" />
    </div>
  </div>
</template>
<script>
import { EventBus } from "./event-bus.js";
import cartItems from "./cartItems";
export default {
  components: {
    cartItems,
  },
  props: {
    msg: {
      type: Number,
    },
  },
  data: function() {
    return {
      message: 0,
    };
  },
  computed: {
    forSale() {
      return this.$store.getters.forSale;
    },
    inCart() {
      return this.$store.getters.inCart;
    },
    cartValue() {
      return this.$store.getters.cartValue;
    },
  },
  mounted() {
    EventBus.$on("i-got-clicked", (a) => {
      this.type = a;
      console.log(`Oh, that's nice. It's gotten ${a} clicks! :)`);
    });
    EventBus.$off;
  },
};
</script>
