<template>
  <main>
    <input-field
      v-model="search"
      :required="false"
      class="inverted"
      label="Search"
    />
    <table
      v-show="showFixed"
      class="table table-bordered fixed"
    >
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
          <th />
        </tr>
      </thead>
    </table>

    <table
      id="table"
      ref="table"
      class="table table-bordered"
    >
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
          <th />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(translation, index) in filteredTranslations"
          :key="translation.id">
          <td data-title="Latvian">
            <input-field
              v-if="translation.edit"
              v-model="translationData.lv"
              class="inverted hide-label"
              label="Latvian"
            />
            <span v-else>
              {{ translation.lv }}
            </span>
          </td>
          <td data-title="English">
            <input-field
              v-if="translation.edit"
              v-model="translationData.en"
              class="inverted hide-label"
              label="English"
            />
            <span v-else>
              {{ translation.en }}
            </span>
          </td>
          <td data-title="Completed">
            <input
              v-if="translation.edit"
              v-model="translationData.completed"
              :true-value="1"
              :false-value="0"
              type="checkbox"
            >
            <span v-else>
              <check-icon v-if="translation.completed" />
              <close-icon v-else />
            </span>
          </td>
          <td>
            <button
              v-if="translation.edit"
              aria-label="Submit translation"
              @click="submitTranslation(translation, index)">
              <check-icon />
            </button>
            <button
              v-if="translation.edit"
              aria-label="Cancel translation"
              @click="cancelTranslation(translation)">
              <close-icon />
            </button>
            <button
              v-if="!translation.edit"
              aria-label="Edit translation"
              @click="editTranslation(translation)">
              <pencil-icon />
            </button>
            <button
              v-if="!translation.edit"
              aria-label="Delete translation"
              @click="deleteTranslation(translation, index)">
              <trash-icon />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import IconButton from '@/components/IconButton'
import { CheckIcon, CloseIcon, TrashIcon, PencilIcon } from '@/components/icons'
import { getTranslations, deleteTranslation, updateTranslation } from '../db'
import InputField from '@/components/InputField'

export default {
  components: {
    CheckIcon,
    CloseIcon,
    IconButton,
    TrashIcon,
    PencilIcon,
    InputField
  },
  data () {
    return {
      translations: [],
      translationData: {
        id: null,
        lv: '',
        en: '',
        completed: 0
      },
      showFixed: false,
      search: ''
    }
  },
  computed: {
    filteredTranslations () {
      let translations = this.translations
      const search = this.search.trim().toLowerCase()

      if (search) {
        translations = translations
          .filter(t => t.lv.toLowerCase().includes(search) || t.en.toLowerCase().includes(search))
      }

      return translations
    }
  },
  async mounted () {
    const payload = await getTranslations()
    this.translations = payload.map(t => {
      t.edit = false
      return t
    })
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const offset = document.scrollingElement.scrollTop
      const tableOffset = this.$refs.table.offsetTop

      if (offset < tableOffset) {
        this.showFixed = false
      } else if (offset >= tableOffset) {
        this.showFixed = true
      }
    },
    editTranslation (translation) {
      translation.edit = true
      this.translationData = {...translation}
    },
    async submitTranslation (translation, index) {
      const payload = await updateTranslation(this.translationData)

      payload.edit = false
      translation = Object.assign(translation, payload)

      this.translationData = {
        id: null,
        lv: '',
        en: '',
        completed: 0
      }
    },
    async deleteTranslation (translation, index) {
      await deleteTranslation(translation.id)
      this.translations.splice(index, 1)
    },
    cancelTranslation (translation) {
      translation.edit = false
      this.translationData = {
        id: null,
        lv: '',
        en: '',
        completed: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

main {
  width: 100%;
}

.fixed {
  top: 0;
  position: fixed;
  width: auto;
  border: none;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 2rem;
  background-color: $primary;
  border-spacing: 0;
  table-layout: fixed;
  border-collapse: collapse;

  > thead,
  > tbody,
  > tfoot {
    > tr {
      > th,
      > td {
        text-align: left;
        padding: 0.6rem;
        vertical-align: top;
        border-top: 0;
      }
    }
  }
  > thead > tr > th {
    color: $secondary;
    vertical-align: bottom;
    border-bottom: 1px solid rgba(0,0,0,.12);
  }
  > thead:first-child {
    > tr:first-child {
      > th,
      > td {
        border-top: 0;
      }
    }
  }
  > tbody + tbody {
    border-top: 1px solid rgba(0,0,0,.12);
  }

  // Nesting
  .table {
    background-color: $primary;
  }
}

.table-bordered {
  border: 0;
  > thead,
  > tbody,
  > tfoot {
    > tr {
      > th,
      > td {
        border: 0;
        border-bottom: 1px solid $secondary;
      }
    }
  }
  > thead > tr {
    > th,
    > td {
      border-bottom-width: 2px;
    }
  }
}

button {
  background: none;
  outline: none;
  color: $secondary;
  fill: $secondary;
  border: none;
}
</style>
