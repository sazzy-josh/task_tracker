import { defineComponent } from 'vue'; import type { PropType from 'vue';
<template>
  <v-navigation-drawer
    absolute
    left
    v-model="openDrawer"
    temporary
    class="hidden-md-and-up"
  >
    <v-list dense nav>
      <v-list-item
        v-for="item in Navitems"
        :key="item.title"
        :to="item.to"
        link
      >
        <v-icon class="mr-4">{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import type {NavItems} from "@/type";

  type DataShape = {
    Navitems: Array<NavItems>;
  };

  export default defineComponent({
    name: "MobileNavigationDrawer",
    props: {
      drawer: Boolean,
    },
    data: (): DataShape => ({
      Navitems: [
        {title: "Home", icon: "mdi-view-dashboard", to: "/"},
        {title: "All Task", icon: "mdi-account-box", to: "allTask"},
      ],
    }),
    computed: {
      openDrawer() {
        const val = this.drawer;
        return val;
      },
    },
  });
</script>
