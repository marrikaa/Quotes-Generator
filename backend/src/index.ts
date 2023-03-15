/* eslint-disable no-console */
import express from "express";
import { getUsers, addUser, deleteUser, getOneUser, updateUser, deleteQuote  } from "./Mongo/db";
import fetch from "node-fetch-commonjs";
import { User, QuotesType } from "./types";
import { addQuote, deleteOneQuote, getQuotes } from "./Mongo/dbForQuotes";

type Quotes = {
  quotes: QuotesType[];
} 

const app = express();
const port = 3001;

app.use(express.json());

const cors = require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))

app.get("/api/users/", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users).end();
  } catch (e) {
    res.status(500).send(e);
  }
});

let quoteDB="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
app.get("/api/quotes/", async (req, res) => {
  try {
      const quotes = await getQuotes();
      fetch(quoteDB).then(response => response.json()).then((data: Quotes) => {
        res.status(200).send(data.quotes.concat(quotes));
      })
    } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post("/api/users/", async (req, res) => {
  try {
    const newUser : User = {
      userName: req.body.user,
      password: req.body.password,
      favQuotes: [],
    }
    await addUser(newUser);
    res.status(200).json(newUser).end();
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete("/api/users/:userName", async (req, res) => {
  try {
    await deleteUser(req.params.userName);
    res.status(204).end();
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/api/users/:userName", async (req, res) => {
  try {
    const user = await getOneUser(req.params.userName);
    res.status(200).json(user).end();
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/api/users/:userName/favQuotes", async (req, res) => {
  try {
    const user = await getOneUser(req.params.userName);
    res.status(200).json(user.favQuotes).end();
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/api/users/:userName/favQuotes", async (req, res) => {
  try {
    await updateUser(req.params.userName,req.body)
    res.status(200).end();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.delete("/api/users/:userName/favQuotes", async (req, res) => {
  try {
    const result=await deleteQuote(req.params.userName, req.body);
    res.status(204).json(result).end();
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/api/myQuotes", async (req, res) => {
  try {
    const quotes = await getQuotes();
    res.status(200).json(quotes).end();
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/api/myQuotes", async (req, res) => {
  try {
    await addQuote(req.body)
    res.status(200).end();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.delete("/api/myQuotes", async (req, res) => {
  try {
    await deleteOneQuote(req.body);
    res.status(204).json().end();
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

