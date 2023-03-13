import * as mongoose from "mongoose";
import { IUser, User } from "./UserSchema";

const connstr = "mongodb://localhost/myDB";
mongoose.connect(connstr);
const conn = mongoose.connection;


export const addUser = async (review: IUser) => {
  const newUser = new User(review);
  newUser.save();
};

export const getUsers = async () => {
  const users = await User.find();
  return users;
};