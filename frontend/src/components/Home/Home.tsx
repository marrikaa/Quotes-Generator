import { useEffect, useState } from "react";
import { QuotesType } from "../../types";
import Quotes from "../Quotes/Quotes";
import SearchBar from "../SearchBar/SearchBar";


function Home() {
  const [quotesArray,setQuotesArray]=useState<QuotesType[]>([])

  const fetchQuotes = async () =>{
    const response = await fetch("http://localhost:3001/api/quotes")
    const parsed = await response.json()
    setQuotesArray(parsed)
  }
  
    useEffect(()=> {
        fetchQuotes();
    } ,[])

  return (
    <div className="App">
      <header>
        <h1>Quotes of the day</h1>
    </header>
      <body className="App-header" >
         <div id="quote-box" >
          {quotesArray.map((quotes : QuotesType) => <Quotes quote={quotes.quote} author={quotes.author} />)}
      </div>
      </body>
    </div>
  )

}

export default Home;