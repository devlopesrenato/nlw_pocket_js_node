import { eq } from "drizzle-orm";
import { db } from "../db";
import { goalCompletions } from "../db/schema";

interface CreateGoalRequest {
  goalCompletionId: string;
}

export async function deleteCompletion({ goalCompletionId }: CreateGoalRequest) {
  const result = await db.delete(goalCompletions).where(eq(goalCompletions.id, goalCompletionId)).returning();

  const goal = result[0];

  return {
    goal,
  };
}
