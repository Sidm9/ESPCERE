<template>
  <v-card class="mx-auto" max-width="auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-3"> {this} </v-list-item-title>
        <v-list-item-subtitle
          >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn text>oo{{ count }}aa</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    count: {
      type: Number,
    },
  },
};
</script>
