<template>
  <div>
    <Card @inputData="updateMessage" />
     <Checkout :msg = "childData"/>
  </div>
</template>

<script>
import Card from "./Card";
import Checkout from "./Checkout";

export default {
  name: "Parent",
  components: {
    Card,
    Checkout
  },
  data: function() {
    return {
      childData: ""
    };
  },
  methods: {
    updateMessage(variable) {
      this.childData= variable;
    }
  }
};

</script>