<template>
  <div class="container my-5">
    <h1 class="mb-5">Checkout</h1>

    <table class="table">
      <tr>
        <!-- <th scope="col">#</th> -->
        <th scope="col">Product</th>
        <th scope="col">Price</th>
      </tr>
      <tbody>
        <tr v-for="item in cart" :key="item">
          <td>{{ item.name }}</td>
          <td>${{ item.price / 100 }}</td>
          <td>
            <Button class="btn btn-outline-danger" @click="Remove">
              Remove
            </Button>
          </td>
        </tr>
        <tr>
          <th>Total</th>
          <th>${{ total / 100 }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    Remove(index) {
      {
        this.$store.dispatch("CART_REMOVE", index);
      }
    },
  },
  computed: {
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
    inCart() {
      return this.$store.getters.inCart;
    },
    numInCart() {
      return this.inCart.length;
    },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
  },
};
</script>
