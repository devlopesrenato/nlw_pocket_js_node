import { client, db } from '.'
import { goalCompletions, goals } from './schema'
import dayjs from 'dayjs'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Caminhar', desiredWeeklyFrequency: 5 },
      { title: 'Ler', desiredWeeklyFrequency: 3 },
      { title: 'Estudar', desiredWeeklyFrequency: 4 },
    ])
    .returning()

  const startOfweek = dayjs().startOf('week')

  await db.insert(goalCompletions).values([
    { goalId: result[0].id, createdAt: startOfweek.toDate() },
    { goalId: result[0].id, createdAt: startOfweek.add(1, 'day').toDate() },
  ])
}

seed().finally(() => {
  client.end()
})
