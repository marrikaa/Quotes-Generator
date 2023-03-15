import { model, Schema } from "mongoose";
import { QuotesType } from "../types";


export interface IUser {
  userName: string;
  password: string;
  favQuotes: QuotesType[];
}

export const userSchema = new Schema<IUser>({
  userName: { type: String, require: true },
  password: { type: String, require: true },
  favQuotes: { type: [] , require: true },
});

export const User = model<IUser>("users", userSchema);
