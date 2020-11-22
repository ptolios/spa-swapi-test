<template>
  <v-container fluid>
    <v-row align="center" justify="start">
      <v-col
        sm="12"
        md="6"
        lg="4"
        xl="3"
        v-for="film in films"
        :key="film.episode_id"
      >
        <FilmCard :filmInfo="film"></FilmCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
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
  mounted() {
    let self = this;
    axios.get("http://swapi.dev/api/films/").then(function(response) {
      self.films = response.data.results;
    });
  },
};
</script>
