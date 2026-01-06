import type { Document } from "mongoose";
export interface ArticleSchemaType extends Document {
    title: string;
    creationDate: Date;
    lastModificationDate: Date;
    content: string;
}
export declare const Article: import("mongoose").Model<ArticleSchemaType, {}, {}, {}, Document<unknown, {}, ArticleSchemaType, {}, import("mongoose").DefaultSchemaOptions> & ArticleSchemaType & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any, ArticleSchemaType>;
//# sourceMappingURL=article.model.d.ts.map