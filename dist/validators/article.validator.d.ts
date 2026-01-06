import z from "zod";
export declare const articleParamsValidator: z.ZodObject<{
    articleId: z.ZodString;
}, z.z.core.$strip>;
export type ArticleParamsType = z.infer<typeof articleParamsValidator>;
//# sourceMappingURL=article.validator.d.ts.map