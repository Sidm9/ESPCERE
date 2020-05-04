<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  name: "Results",
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
  mounted() {
    EventBus.$on("i-got-clicked", (a) => {
      this.type = a
      console.log(`Oh, that's nice. It's gotten ${a} clicks! :)`);
    });
    EventBus.$off
  },
};
</script>
