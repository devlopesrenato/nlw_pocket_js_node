import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { deleteCompletion } from "../../functions/delete-goal-completion";

export const deleteCompletionRoute: FastifyPluginAsyncZod = async (app) => {
  app.delete(
    "/completions/:goalCompletionId",
    {
      schema: {
        params: z.object({
          goalCompletionId: z.string(),
        }),
      },
    },
    async (request, response) => {
      const { goalCompletionId } = request.params;

      const result = await deleteCompletion({
        goalCompletionId,
      });

      return response.status(200).send(result);
    }
  );
};
