<template>
<div>
  <h1> This ->{{ data }} </h1>
  <p>eroihoerghoer</p>
</div>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  data: function() {
    return {
      data: this.$store.state.count,
    };
  },
  mounted() {
    EventBus.$on("i-got-clicked", (a) => {
      console.log(a);
      this.data = a;
       
    });

  },
};
</script>

<style></style>
