import fastify from 'fastify'
import { createGoal } from '../functions/create-goal'
import z from 'zod'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../functions/get-week-pending-goals'
import { createGoalCompletion } from '../functions/create-goal-completion'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.post(
  '/goals',
  {
    schema: {
      body: z.object({
        title: z.string(),
        desiredWeeklyFrequency: z.number().int().min(1).max(7),
      }),
    },
  },
  async (request, response) => {
    const { title, desiredWeeklyFrequency } = request.body
    const result = await createGoal({
      title,
      desiredWeeklyFrequency,
    })
    return response.status(201).send(result)
  }
)

app.post(
  '/completions',
  {
    schema: {
      body: z.object({
        goalId: z.string(),
      }),
    },
  },
  async request => {
    const { goalId } = request.body

    await createGoalCompletion({
      goalId,
    })
  }
)

app.get('/pending-goals', async (request, response) => {
  const result = await getWeekPendingGoals()
  return response.status(200).send(result)
})

app
  .listen({
    port: 3333,
    host: '127.0.0.1',
  })
  .then(address => {
    console.log('http server running in', address)
  })
