// Validators
import { articleParamsValidator } from "../validators/article.validator.js";
export const validateParamsBody = async (req, res, next) => {
    const validatedArticleParams = articleParamsValidator.safeParse(req.params);
    if (!validatedArticleParams.success)
        return res.status(400).json({ ok: false, message: "INVALID_PARAMS" });
    res.locals.articleId = validatedArticleParams.data.articleId;
    return next();
};
//# sourceMappingURL=article.middleware.js.map