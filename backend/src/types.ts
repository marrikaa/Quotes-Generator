export type QuotesType = {
    quote : string,
    author : string,
}

export type User = {
  userName: string;
  password: string;
  favQuotes: QuotesType[];
}