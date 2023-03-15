import * as mongoose from "mongoose";
import { QuotesType } from "../types";
import { IQuotes, Quote } from "./QuotesSchema";


const connstr = "mongodb://localhost/myDB";
mongoose.connect(connstr);
const conn = mongoose.connection;

export const addQuote = async (quote: IQuotes) => {
  const newUser = new Quote(quote);
  newUser.save();
};

export const getQuotes= async () => {
  const users = await Quote.find();
  return users;
};

export const deleteOneQuote = async (quote : QuotesType) => {
 await Quote.deleteOne({ quote: quote.quote});
};


process.on('SIGINT', () => {
  conn.close();
  process.exit();
});
