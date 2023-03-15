import { model, Schema } from "mongoose";

export interface IQuotes {
    quote : string,
    author : string,
}

export const quotesSchema = new Schema<IQuotes>({
    quote: { type: String, require: true },
    author: { type: String, require: true },
});

export const Quote = model<IQuotes>("quotes", quotesSchema);