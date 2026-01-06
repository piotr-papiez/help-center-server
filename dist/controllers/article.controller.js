// Constants
import { LOAD_ARTICLE_STATUS_CODES } from "../config/article.config.js";
// Services
import { loadArticle } from "../services/article.service.js";
// GET: /api/articles/:articleId
export const getArticle = async (req, res) => {
    const articleId = res.locals.articleId;
    try {
        const result = await loadArticle(articleId);
        if (!result.ok)
            return res.status(LOAD_ARTICLE_STATUS_CODES[result.message]).json({ ...result });
        return res.status(200).json({ ...result });
    }
    catch (error) {
        return res.status(500).json({ ok: false, message: "SERVER_ERROR" });
    }
};
//# sourceMappingURL=article.controller.js.map