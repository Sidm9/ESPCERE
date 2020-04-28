<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense class="pl-2 pr-2 pt-2 pb-2">
        <div class="display-1 pl-2">Filters</div>
        <v-chip-group v-model="amenities" column multiple>
          <v-chip filter outlined>Elevator</v-chip>
          <v-chip filter outlined>Washer / Dryer</v-chip>
          <v-chip filter outlined>Fireplace</v-chip>
          <v-chip filter outlined>Wheelchair</v-chip>
          <v-chip filter outlined>Dogs ok</v-chip>
          <v-chip filter outlined>Cats ok</v-chip>
        </v-chip-group>

        <v-subheader class="pl-2 pr-2 subtitle-1 "
          >Show thumb when using slider</v-subheader
        >
        <v-slider class="pl-2 pr-2" v-model="slider" thumb-label></v-slider>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://i.pinimg.com/564x/fb/23/fe/fb23fe0224f115a3218aa82c790dfbe7.jpg"
          transition="scale-transition"
          width="40"
        />

        <div class="font-weight-regular title">ESPCERE</div>
      </div>

      <v-spacer />

      <v-btn target="_blank" text>
        <span class="mr-2" v-bind="value">DEV {{ value }} </span>
        <router-link to="/about"> <v-icon>mdi-cart </v-icon> </router-link>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
      <Carousel />
      <CardHandler />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Carousel from "./Carousel";
// import FilterComponent from "./components/Filter";
import CardHandler from "./CardHandler";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Carousel,
    // FilterComponent,
    CardHandler,
  },

  data: () => ({
    drawer: null,
    value: 198,
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
html,
body,
span,
div {
  font-family: "Montserrat", sans-serif;
}

#app {
  font-family: "Montserrat", sans-serif;
}
</style>
