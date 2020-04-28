<template>
  <div>gr</div>
</template>

<script>
export default {
  data: function() {
    return {
      info: null,
    };
  },

  mounted() {
    const a = "http://localhost:3000/product";
    this.$http.get(a).then((response) => (this.info = response));

    console.log(JSON.stringify("Data -> " + this.info));
  },
};
</script>

<style></style>
