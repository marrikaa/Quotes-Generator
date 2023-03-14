export type Quotes = {
    quote : string,
    author : string,
}

export type User = {
  userName: string;
  password: string;
  favQuotes: Quotes[];
}