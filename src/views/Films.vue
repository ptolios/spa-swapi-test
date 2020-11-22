<template>
  <v-container fluid>
    <v-row align="center" justify="start" class="main-container">
      <v-col
        sm="12"
        md="6"
        lg="4"
        xl="3"
        v-for="film in films"
        :key="film.episode_id"
      >
        <FilmCard :filmInfo="film" @film-id="selectedFilmId"></FilmCard>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" offset="3">
        <FilmSubview :filmData="filmData"></FilmSubview>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import FilmCard from "@/components/FilmCard";
import FilmSubview from "@/views/FilmSubview";

export default {
  name: "Films",
  components: {
    FilmCard,
    FilmSubview,
  },
  data() {
    return {
      loading: true,
      films: [],
      filmId: 0,
    };
  },
  computed: {
    filmData() {
      return this.films.find((element) => element.episode_id == this.filmId);
    },
  },
  methods: {
    selectedFilmId(filmId) {
      console.log(`this.filmId = ${this.filmId}`);
      if (this.films.length != 0) {
        this.filmId = filmId;
      }
    },
  },
  mounted() {
    axios.get("http://swapi.dev/api/films/").then((response) => {
      this.films = response.data.results;
      this.loading = false;
    });
  },
};
</script>
<style scoped>
.main-container {
  height: 65vh;
  overflow: auto;
}
</style>
