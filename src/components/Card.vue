<template>
  <v-card class="mx-auto mt-4 md-4 mr-4 ml-4 " max-width="450">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
      :aspect-ratio="16 / 9"
    >
    </v-img>
    <v-card-title>
      <div class="display-1 mb-2">Card Item</div>
      <!-- <div class="title font-weight-regular grey--text">

      </div> -->
    </v-card-title>
    <v-row class="px-4 grey--text" align="center">
      <v-avatar size="20" class="mr-2 ml-3">
        <v-img
          src="https://image.shutterstock.com/image-illustration/bitcoin-logo-png-vector-transparent-260nw-1654430290.jpg"
          contain
        ></v-img>
      </v-avatar>

      <div class="title">4500</div >
    </v-row>

    <v-divider class="mt-6 mx-9"></v-divider>

    <v-card-text>
      <v-chip class="mr-2" @click="lights">
        <v-icon left>mdi-alarm-check</v-icon>
        Buy
      </v-chip>
      <v-chip class="mr-2" @click="alarm">
        <v-icon left>mdi-alarm-check</v-icon>
        Set alarm
      </v-chip>
      <v-chip @click="blinds">
        <v-icon left>mdi-blinds</v-icon>
        Close blinds
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    alarm() {
      alert("Turning on alarm...");
    },
    blinds() {
      alert("Toggling Blinds...");
    },
    lights() {
      alert("Toggling lights...");
    },
  },
  props : ['']
};
</script>
