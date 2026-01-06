// Runtime
import { model, Schema } from "mongoose";
const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    lastModificationDate: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});
export const Article = model("Article", ArticleSchema);
//# sourceMappingURL=article.model.js.map