<template>
  <div>
    <Nav />
    <div id="app" class="container my-5">
      <Carousel />
      <h1>My online store</h1>
      <div class="col-md-4">
        <ShoppingCart />
      </div>
      <div class="row">
        <Item
          v-for="item in forSale"
          :key="item.invId"
          :invId="item.invId"
          :name="item.name"
          :image="item.image"
          :price="item.price"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Item from "./item";
import Nav from "./navbar";
import Carousel from "./Carousel";
import ShoppingCart from "./ShoppingCart";
export default {
  name: "app",
  computed: {
    forSale() {
      return this.$store.getters.forSale;
    },
  },
  components: {
    Item,
    ShoppingCart,
    Nav,
    Carousel,
  },
};
</script>
<style scoped>
* {
  overflow: hidden;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  width: 100%;
}
.seperator {
  display: flex;
  justify-content: center;
  align-items: center;
}
.row {
  margin: 0 auto;
  flex-grow: 2;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
/* @media only screen and (max-width: 1500px) {
  .row {
    justify-content: center ;
  }
} */
</style>
