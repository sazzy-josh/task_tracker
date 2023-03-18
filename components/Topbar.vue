<template>
  <v-app-bar app flat color="blue-grey-lighten-4" class="px-2">
    <v-img
      class="ml-2"
      src="https://img.icons8.com/cotton/1x/note--v2.png"
      max-height="40px"
      max-width="40px"
      contain
    ></v-img>
    <v-toolbar-title class="d-flex font-weight-bold"
      ><p>Nothy</p>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down">
      <!-- NAV ITEMS FOR LARGE SCREEN-->
      <v-btn v-for="(link, i) in Navitems" :to="link.to" :key="i">{{
        link.title
      }}</v-btn>
    </div>

    <v-app-bar-nav-icon
      class="d-block d-md-none"
      @click.stop="$emit('openDrawer')"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <!-- MOBILE NAVGATION DRAWER -->
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import type {NavItems} from "../type";

  type DataShape = {
    Navitems: NavItems[];
  };

  export default defineComponent({
    name: "TopBar",
    data: (): DataShape => ({
      Navitems: [
        {title: "Home", icon: "mdi-view-dashboard", to: "/"},
        {title: "All Task", icon: "mdi-account-box", to: "allTask"},
      ],
    }),
    emits: ["openDrawer"],
  });
</script>

<style>
  a.nuxt-link-active {
    font-weight: bold;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    display: flex;
    color: black;
  }
</style>
