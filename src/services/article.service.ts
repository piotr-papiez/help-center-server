// Models
import { Article } from "../models/article.model.js";

// Runtime
import { Types } from "mongoose";

// Types
type LeanArticleType = {
    title: string;
    creationDate: Date;
    lastModificationDate: Date;
    content: string;
};

type LoadArticleType =
    | { ok: true, article: LeanArticleType }
    | { ok: false, message: "INVALID_ID" | "ARTICLE_NOT_FOUND" | "SERVER_ERROR" };


export async function loadArticle(articleId: string): Promise<LoadArticleType> {
    if (!Types.ObjectId.isValid(articleId)) return { ok: false, message: "INVALID_ID" };

    try {
        const article = await Article.findById(articleId).lean<LeanArticleType>();
        if (!article) return { ok: false, message: "ARTICLE_NOT_FOUND" };

        return { ok: true, article };
    } catch (error) {
        return { ok: false, message: "SERVER_ERROR" };
    }
}