import * as mongoose from "mongoose";
import { Quotes } from "../types";
import { IUser, User } from "./UserSchema";

const connstr = "mongodb://localhost/myDB";
mongoose.connect(connstr);
const conn = mongoose.connection;


export const addUser = async (user: IUser) => {
  const newUser = new User(user);
  newUser.save();
};

export const getUsers = async () => {
  const users = await User.find();
  return users;
};

export const deleteUser = async (userName:String) => {
 await User.deleteOne({ userName: userName});
};

export const getOneUser = async (name:string) => {
  const user = await User.findOne({userName : name});
  return user;
};

export const updateUser = async (name:string, quote:Quotes) => {
  const user = await User.findOne({userName : name});
  await User.updateOne({userName : name}, {$set: {favQuotes: user.favQuotes.concat(quote)}})
};

export const deleteQuote = async (name:string, quote : Quotes) => {
  const user = await User.findOne({userName : name});
  const indexOfQuote = user.favQuotes.findIndex(q => q.author === quote.author && q.quote === quote.quote );
  user.favQuotes.splice(indexOfQuote, 1);
  await User.updateOne({userName : name}, {$set: {favQuotes: user.favQuotes}});
  return user.favQuotes;
};

process.on('SIGINT', () => {
  conn.close();
  process.exit();
});
