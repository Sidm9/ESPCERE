<template>
  <carousel v-bind="settings">
    <div class="slide">
      <img src="https://placeimg.com/200/200/any?1" />
    </div>
    <div class="slide">
      <img src="https://placeimg.com/200/200/any?2" />
    </div>
    <div class="slide">
      <img src="https://placeimg.com/200/200/any?3" />
    </div>
    <div class="slide">
      <img src="https://placeimg.com/200/200/any?4" />
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
        center: true,
        autoheight: true,
        loop:true,
        nav: false,
        stagePadding: 1,
      },
    };
  },
};
</script>

<style scoped>
.slide {
  width: 500px;
  height:200px;
  border-radius: 20px;
}
</style>
