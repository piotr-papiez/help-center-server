type LeanArticleType = {
    title: string;
    creationDate: Date;
    lastModificationDate: Date;
    content: string;
};
type LoadArticleType = {
    ok: true;
    article: LeanArticleType;
} | {
    ok: false;
    message: "INVALID_ID" | "ARTICLE_NOT_FOUND" | "SERVER_ERROR";
};
export declare function loadArticle(articleId: string): Promise<LoadArticleType>;
export {};
//# sourceMappingURL=article.service.d.ts.map