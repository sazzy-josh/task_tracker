<template>
  <Topbar @openDrawer="openDrawer" />
  <MobileNavigationDrawer :drawer="drawer" />
  <v-main class="ma-2">
    <slot />
  </v-main>
</template>

<script>
  export default defineComponent({
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
      openDrawer() {
        this.drawer = !this.drawer;
      },
    },
  })
</script>
