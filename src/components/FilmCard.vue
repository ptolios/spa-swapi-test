<template>
  <v-card>
    <v-card-title>
      {{ filmInfo.title }}
    </v-card-title>
    <v-card-text>
      <div>Director: {{ filmInfo.director }}</div>
      <div>Producer: {{ filmInfo.producer }}</div>
      <div>
        Release date:
        {{ filmInfo.release_date }}
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>
      {{ filmInfo.opening_crawl }}
      <div>
        <a :href="filmInfo.url">(link)</a>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="text-caption">
      <div>created on: {{ filmInfo.created }}</div>
      <div>last edited on: {{ filmInfo.edited }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn block color="success">More Info</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["filmInfo"],
};
</script>

<style></style>
