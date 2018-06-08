<template>
  <main>

    <table>
      <thead>
        <tr>
          <th>
            Latvian
          </th>
          <th>
            English
          </th>
          <th>
            Completed
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="translation in translations"
          :key="translation.id">
          <td>
            {{ translation.lv }}
          </td>
          <td>
            {{ translation.en }}
          </td>
          <td>
            <check-icon v-if="translation.completed" />
            <close-icon v-else />
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { CheckIcon, CloseIcon } from '@/components/icons'
import { getTranslations } from '../db'

export default {
  components: {
    CheckIcon,
    CloseIcon
  },
  data () {
    return {
      translations: []
    }
  },
  async mounted () {
    this.translations = await getTranslations()
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
}
</style>
