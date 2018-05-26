<template>
  <v-app id="app" class="primary">
    <vue-progress-bar></vue-progress-bar>
    <v-toolbar flat extended class="primary">
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/overview">Overview</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'progressPercentage'
    ])
  },
  created () {
    this.$Progress.set(this.progressPercentage)
  },
  watch: {
    progressPercentage (value) {
      this.$Progress.set(value)
    }
  }
}
</script>

<style lang="scss">
.application.theme--light {
  background: #9E1B34;
}
</style>
