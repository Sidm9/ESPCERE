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
        items: 4,
        center: false,
        autoheight: true,
        loop: true,
        nav: false,
        centre: true,
        responsive: {
          200: { items: 1 },
          800: { items: 3 },
        },
        stagePadding: 50,
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
@media only screen and (max-width: 1200px) {
  .slide {
    width: 90%;
  }
}
</style>
