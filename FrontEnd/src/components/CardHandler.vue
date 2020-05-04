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

  },


};
</script>

