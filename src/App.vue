<template>
  <v-app dark>
    <!-- logo -->
    <v-app-bar app> </v-app-bar>

    <!-- main-navigation -->
    <v-navigation-drawer app permanent> </v-navigation-drawer>

    <!-- main-view -->
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
