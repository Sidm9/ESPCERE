<template>
  <div>
    <h1>{{ this.$store.state.inCart }}</h1>
    <h4>{{ this.$store.state.cartValue }}</h4>
    <div class=" d-flex justify-lg-center pa-5 flex-wrap  ">
      <div v-for="n in forSale" :key="n.invId">
        <Card
          :name="n.name"
          :price="n.price"
          :description="n.Description"
          :count="n.Count"
          :image="n.image"
          :invId="n.invId"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  computed: {
    forSale() {
      return this.$store.getters.forSale;
    },
    inCart() {
      return this.$store.getters.inCart;
    },
  },
  components: {
    Card,
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch("addToCart", invId);
    },
  },
};
</script>
