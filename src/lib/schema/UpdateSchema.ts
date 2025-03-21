import { z } from "zod";

export const updateScoreSchema = z.object({
  rank: z.coerce.number().min(1, "Required, should be a number"),
  percentile: z.coerce
    .number()
    .min(1, "Percentile must be at least 1")
    .max(100, "Percentile must not exceed 100"),
  currentScore: z.coerce
    .number()
    .min(1, "Score must be at least 1")
    .max(15, "Score must not exceed 15"),
});

export type UpdateScoreSchema = z.infer<typeof updateScoreSchema>;
