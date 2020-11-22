<template>
  <v-container fluid>
    <v-row align="center" justify="start">
      <v-col sm="12" md="6" lg="4" xl="3" v-for="n in 6" :key="n">
        <FilmCard></FilmCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FilmCard from "@/components/FilmCard";

export default {
  name: "Films",
  components: {
    FilmCard,
  },
  data() {
    return {
      films: [],
    };
  },
};
</script>
