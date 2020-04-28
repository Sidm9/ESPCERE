<template>
  <div class=" d-flex justify-lg-center pa-5 flex-wrap  ">
    <div v-for="n in 10" :key="n">
      <Card />
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


  mounted() {
    console.log()
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response ));
  },
};
</script>

<style></style>
