/* eslint-disable no-console */
import express from "express";
import { getUsers, addUser  } from "./db/db";
import fetch from "node-fetch-commonjs";

type QuotesType ={
  quote : string,
  author:string,
}

type Quotes = {
  quotes: QuotesType[];
} 


const app = express();
const port = 3001;

app.use(express.json());

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))

app.get("/", async (req, res) => {
  try {
    res.status(200).json("heyy").end();
  } catch (e) {
    res.status(500).send(e);
  }
});

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
      fetch(quoteDB).then(response => response.json()).then((data: Quotes) => {
        res.status(200).send(data.quotes);
      })
    } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/users/", async (req, res) => {
  try {
    const newUser = req.body;
    await addUser(newUser);
    res.status(200).json(newUser).end();
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);