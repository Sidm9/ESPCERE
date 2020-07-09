<template>
  <carousel v-bind="settings">
    <div class="slide">
      <img src="https://placeimg.com/300/300/any?1" />
    </div>
    <div class="slide">
      <img src="https://placeimg.com/300/300/any?2" />
    </div>
    <div class="slide">
      <img src="https://placeimg.com/300/300/any?3" />
    </div>
    <div class="slide">
      <img src="https://placeimg.com/300/300/any?4" />
    </div>
  </carousel>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },

  data: function() {
    return {
      settings: {
        center: false,
        autoheight: true,
        loop: true,
        nav: false,
        stagePadding: 40,
      },
    };
  },
};
</script>

<style scoped>
.slide {
  margin-top: 120px;
  margin-bottom: 20px;
  width: 95%;
  height: 300px;
  border-radius: 20px;
  box-shadow: 1px 2px 15px black;
}
img {
  object-fit: cover;
  height: 300px;
  border-radius: 20px;
}
</style>
