<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Star Wars Encyclopedia
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item-group>
      <v-list-item to="/"
        ><v-list-item-icon>
          <v-icon>mdi-video-vintage</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Films
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/people"
        ><v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon> </v-list-item-icon
        ><v-list-item-content>
          People
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </div>
</template>
