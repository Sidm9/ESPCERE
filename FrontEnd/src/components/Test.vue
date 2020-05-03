<template>
  <h1>wefho</h1>
</template>

<script>
import { EventBus } from './event-bus.js';
export default {
mounted() {
EventBus.$on('i-got-clicked', a => {
  console.log(`Oh, that's nice. It's gotten ${a} clicks! :)`)
});}
}

</script>

<style></style>
