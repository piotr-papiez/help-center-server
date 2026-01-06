// Runtime
import { model, Schema } from "mongoose";

// Types
import type { Document } from "mongoose";

export interface ArticleSchemaType extends Document {
    title: string;
    creationDate: Date;
    lastModificationDate: Date;
    content: string;
}

const ArticleSchema = new Schema<ArticleSchemaType>({
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

export const Article = model<ArticleSchemaType>("Article", ArticleSchema);