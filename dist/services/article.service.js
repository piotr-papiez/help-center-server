// Models
import { Article } from "../models/article.model.js";
// Runtime
import { Types } from "mongoose";
export async function loadArticle(articleId) {
    if (!Types.ObjectId.isValid(articleId))
        return { ok: false, message: "INVALID_ID" };
    try {
        const article = await Article.findById(articleId).lean();
        if (!article)
            return { ok: false, message: "ARTICLE_NOT_FOUND" };
        return { ok: true, article };
    }
    catch (error) {
        return { ok: false, message: "SERVER_ERROR" };
    }
}
//# sourceMappingURL=article.service.js.map