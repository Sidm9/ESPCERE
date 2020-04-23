<template>
  <v-carousel hide-delimiters interval="300">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-container fill-height fluid pa-0 ma-0 pb-3>
        <v-layout fill-height align-center text-center pb-4 mb-4>
          <v-flex xs12>
            <span
              class="display-4 white--text"
              style="text-shadow:8px -3px 6px #000000;"
              v-text="item.text" 
            >
            </span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://images.hdqwalls.com/download/grid-waves-lu-1360x768.jpg",
          text: "ESPCERE",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          text: "BEST 2",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          text: "BEST 3",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          text: "BEST 4",
        },
      ],
    };
  },
};
</script>
<style >
span {
  font-family: "Montserrat", sans-serif;
}
</style>
