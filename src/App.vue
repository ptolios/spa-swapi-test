<template>
  <v-app dark>
    <!-- logo -->
    <v-app-bar app> <Logo /> </v-app-bar>

    <!-- main-navigation -->
    <v-navigation-drawer app permanent> <MainNavigation /></v-navigation-drawer>

    <!-- main-view -->
    <v-main>
      <v-container class="main-container">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Logo from "@/components/Logo";
import MainNavigation from "@/components/MainNavigation";

export default {
  name: "App",

  components: {
    Logo,
    MainNavigation,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.main-container {
  height: 65vh;
  overflow: scroll;
}
</style>
