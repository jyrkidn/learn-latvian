import Dexie from 'dexie'

const translationsFile = () => import('./translations')

const db = new Dexie('latvian')
db.version(1).stores({
  translations: '++id, lv, en, completed'
})

db.on('populate', async () => {
  const translations = await translationsFile()
  db.translations.bulkAdd(translations.default.items)
})

export default db

export function getUncompletedTranslations () {
  return db.translations
    .where('completed')
    .equals(0)
    .toArray()
}

export function getTranslations () {
  return db.translations
    .toArray()
}

export function deleteTranslation (id) {
  return db.translations
    .delete(id)
}

export async function updateTranslation ({id, lv, en, completed}) {
  if (!completed) {
    completed = 0
  }

  const translation = {
    lv,
    en,
    completed
  }

  if (!id) {
    id = await db.translations
      .add(translation)
  } else {
    await db.translations
      .update(id, translation)
  }

  return {id, ...translation}
}
