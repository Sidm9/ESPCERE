<template>
  <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings" class="a">
    <div class="green"><p>23</p></div>
    <div class="red">
      <p>2</p>
    </div>
    <div class="blue">
      <p>3</p>
    </div>
    <div class="yellow"><p>4</p></div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data: function() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: true,
        centerMode: true,
        slidesToScroll: 3,
        touchThreshold: 5,
      },
    };
  },
};
</script>

<style scope>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}
div {
  padding: 10px;
  border-radius: 15px;
  height: auto;
  outline: none;
}
.a {
  border-style: dashed;
  outline: none;
  color: white;
  font-size: 40px;
  width: 100%;
}
p {
  margin-top: 20px;
}

.green {
  text-align: center;
  justify-content: center;
  display: flex;
  height: 400px;
  align-items: center;
  background-color: #fa8bff;
  background-image: url("https://www.narcity.com/u/2017/12/14/b45a8a2752fc6a307038fc251f87c44b78c29423.png_1200x630.png");
}
.yellow {
  height: 400px;
  text-align: center;
  background-image: url("https://timebusinessnews.com/wp-content/uploads/2019/10/Best-Tech-Products-You-Should-Have-In-2019-800x445.jpg");
}
.red {
  height: 400px;
  text-align: center;
  background-color: #fee140;
  background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2018%2F12%2Fapple-products-2018-100782368-large.jpg&f=1&nofb=1");
}
.blue {
  height: 400px;
  text-align: center;
  background-color: #21d4fd;
  background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fu-kcdKurrjo%2Fmaxresdefault.jpg&f=1&nofb=1");
}
</style>
