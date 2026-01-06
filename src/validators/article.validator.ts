import z from "zod";

export const articleParamsValidator = z.object({
    articleId: z.string().regex(/^[a-f0-9]{24}$/)
});

export type ArticleParamsType = z.infer<typeof articleParamsValidator>;