<template>
  <div id="app" class="container my-5">
    <Nav />
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  width: 100%;
}
.row {
  border-style: dashed;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
* {
  padding: 0px;
  overflow: hidden;
  margin: 0px;
  font-family: "Montserrat";
}
</style>
