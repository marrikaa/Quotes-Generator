export type Quotes = {
    quote : string,
    author : string,
}

export type User = {
  id: string;
  userName: string;
  password: string;
  favQuotes: Quotes[];
}