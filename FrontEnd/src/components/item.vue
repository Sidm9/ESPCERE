<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="image" :alt="name" class="card-image" />
      <div class="card-body">
        <div class="card-title">
          <b>{{ name }}</b>
        </div>
        <div class="card-text">${{ price / 100 }}</div>
        <div class="row justify-content-end">
          <button class="btn" @click="addToCart(invId)">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "item",
  props: ["invId", "name", "price", "image"],
  methods: {
    addToCart(invId) {
      this.$store.dispatch("addToCart", invId);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
div,
button {
  font-family: "Montserrat", sans-serif;
}
.card {
  display: flex;
  flex-direction: row;
  max-width: 350px;
  min-width: auto;
  height: auto;
  transition: 0.5s;
  transition-timing-function: ease-in-out;
  margin: 10px;
  border-radius: 10px;
  /* box-shadow: 1px 1px 5px black; */
}
.card-image {
  /* border-style: dashed; */
  border-radius: 10px;
}
.card-body {
  /* border-style: double; */
  margin: 1px;
  display: flex;
  width: 100%;
  height: auto;
  text-align: left;
  margin-left: 15px;
  margin-bottom: 0px;
  justify-content: center;
  flex-direction: column;
}
.card-title {
  margin-bottom: 5px;
  font-size: 25px;
}
.card-text {
  margin-bottom: 10px;
}
.btn {
  border-radius: 15px;
  border-style: none;
  padding: 3px;
  padding-left: 9px;
  padding-right: 9px;
  outline: none;
  font-size: 12px;
  transition: transform 0.2s; /* Animation */
}
.btn:hover {
  transform: scale(1.07);
  color: white;
  background: #4e54c8; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #7379f0,
    #4e54c8
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8f94fb,
    #6269ee
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
