<template>
  <v-card>
    <v-card-title>
      <h1>{{ filmData.title }}</h1>
    </v-card-title>
    <v-simple-table>
      <tbody>
        <tr v-for="(item, i) in Object.entries(arrayData)" :key="i">
          <td>{{ item[0] | capitalize }}</td>
          <td>{{ item[1] }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  props: ["filmData"],
  data() {
    return {
      arrays: ["characters", "planets", "starships", "vehicles", "species"],
    };
  },
  computed: {
    arrayData() {
      let result = {};
      this.arrays.forEach(
        (element) => (result[element] = this.filmData[element].length)
      );
      return result;
    },
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style></style>
