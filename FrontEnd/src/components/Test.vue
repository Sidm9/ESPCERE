<template>
  <div class=" d-flex justify-lg-center pa-5 flex-wrap ">
    <div v-for="n in 1" :key="n">
      <Card />
      <h1>{{ data }}</h1>
      <br />
      <v-btn large @click="f">Press</v-btn>
      <!-- <v-btn large @click="getProductName">Press</v-btn> -->
      <div>{{ i }}</div>
      <div>{{ name }}</div>
      <div>{{ description }}</div>
      <div>{{ price }}</div>
      <div>{{ count }}</div>
      <div>{{ image }}</div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card,
  },

  data: function() {
    return {
      data: [],
      i: null,
      name: [],
      description: [],
      price: [],
      count: [],
      image: [],
    };
  },

  methods: {
    f: function() {
      this.i = Object.keys(this.data).length;
      this.getProductName();
      this.getProductPrice();
      this.getProductDescription();
      this.getProductCount();
      this.getProductImage();
    },
    getProductName: function() {
      this.data.forEach((element) => {
        this.name.push(element.Name);
        console.log("Name");
      });
    },

    getProductPrice: function() {
      this.data.forEach((element) => {
        this.price.push(element.Price);
        console.log("Price");
      });
    },

    getProductDescription: function() {
      this.data.forEach((element) => {
        this.description.push(element.Description);
        console.log("Desc");
      });
    },

    getProductCount: function() {
      this.data.forEach((element) => {
        this.count.push(element.Count);
        console.log("Count");
      });
    },

    getProductImage: function() {
      this.data.forEach((element) => {
        this.image.push(element.Image);
        console.log("Image");
      });
    },
  },
  mounted() {
    this.$http
      .get("http://localhost:3000/product")
      .then((response) => (this.data = response.data));
  },
};
</script>
