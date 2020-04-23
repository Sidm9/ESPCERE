<template>
  <div class=" d-flex justify-lg-center pa-5 flex-wrap  ">
    <div v-for="n in 10" :key="n" >
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  components: {
    Card,
  },
};
</script>

<style></style>
