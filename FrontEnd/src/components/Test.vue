<template>
  <div>
    <h1>This => {{ count }}</h1>
    <button @click='doIncrement' >Increment</button>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState([
      'product'
    ])
  },
  methods: {
    doIncrement: function() {
      this.$store.commit('increment'),
      this.$store.dispatch('updateProducts')
    },
  },
  mounted() {
    EventBus.$on("i-got-clicked", (a) => {
      console.log(a);
      this.data = a;
    });
  
    this.$store.dispatch('updateProducts')
  },

};
</script>
