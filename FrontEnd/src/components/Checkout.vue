<template>
  <div>
      {{ message }}
  </div>
</template>

<script>
export default {
  name: "Results",
  props: {
    msg: {
      type: Number
    }
  },
  data: function() {
    return {
      messageList: []
    };
  },
  watch: {
    msg: function() {
      this.messageList.push(this.msg);
    }
  }
};
</script>