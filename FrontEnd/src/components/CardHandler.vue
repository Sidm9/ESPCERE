<template>
  <div class=" d-flex justify-lg-center pa-5 flex-wrap  ">
    <div v-for="n in data" :key="n.ID">
      <Card :name="n.Name" :price="n.Price" :description ="n.Description" :count="n.Count" :image="n.Image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card";
export default {
  components: {
    Card,
  },

data: function() {
    return {
      data: [],
      i: null,
      // name: [],
      description: [],
      price: [],
      count: [],
      image: [],
    };
  },
  mounted() {
    console.log()
    axios
      .get("http://localhost:3000/product")
      .then((response) => (this.data = response.data ));
         console.log(this.data);

  },

  methods: {
  //   f: function() {
  //     this.i = Object.keys(this.data).length;
  //     this.getProductName();
  //     this.getProductPrice();
  //     this.getProductDescription();
  //     this.getProductCount();
  //     this.getProductImage();
  //   },
  //   getProductName: function() {
  //     this.data.forEach((element) => {
  //       this.name.push(element.Name);
  //       console.log("Name");
  //     });
  //   },

  //   getProductPrice: function() {
  //     this.data.forEach((element) => {
  //       this.price.push(element.Price);
  //       console.log("Price");
  //     });
  //   },

  //   getProductDescription: function() {
  //     this.data.forEach((element) => {
  //       this.description.push(element.Description);
  //       console.log("Desc");
  //     });
  //   },

  //   getProductCount: function() {
  //     this.data.forEach((element) => {
  //       this.count.push(element.Count);
  //       console.log("Count");
  //     });
  //   },
 
  //   getProductImage: function() {
  //     this.data.forEach((element) => {
  //       this.image.push(element.Image);
  //       console.log("Image");
  //     });
  //   },
  },


};
</script>

