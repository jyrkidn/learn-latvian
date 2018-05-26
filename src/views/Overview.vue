<template>
  <v-data-table
    :headers="headers"
    :items="translations"
    hide-actions
  >
    <template
      slot="items"
      slot-scope="props">
      <td>{{ props.item.lv }}</td>
      <td>{{ props.item.en }}</td>
      <td>
        <v-icon
          v-if="props.item.completed"
          color="primary">check</v-icon>
        <v-icon v-else>close</v-icon>
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'Latvian', value: 'lv' },
        { text: 'English', value: 'en' },
        { text: 'Completed', value: 'completed' }
      ]
    }
  },
  computed: {
    translations () {
      return Object.values(this.$store.state.translations)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
