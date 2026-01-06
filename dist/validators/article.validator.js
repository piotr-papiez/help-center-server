import z from "zod";
export const articleParamsValidator = z.object({
    articleId: z.string().regex(/^[a-f0-9]{24}$/)
});
//# sourceMappingURL=article.validator.js.map