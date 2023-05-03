import { useEffect, useState } from "react";
import { QuotesType } from "../../types";
import Quotes from "../Quotes/Quotes";
import { getQuotes } from "../../Client/client";
import './Home.css'

type PropType = {
  userName: string
}

const Home = (props :PropType) => {
  const {userName } = props
  const [quotesArray, setQuotesArray]=useState<QuotesType[]>([]);

  const setQuotes = async () => await getQuotes().then(response => setQuotesArray(response));

  useEffect(() => {
    setQuotes();
  } ,[])

  return (
    <div className="App">
      <header>
        <h1 className="welcome-text">Quotes of the day</h1>
    </header>
      <body className="App-header" >
         <div id="quote-box" >
          {quotesArray.map((quotes : QuotesType) => <Quotes quote={quotes} isForHome={true} isForFav={false} name={userName}/>)}
      </div>
      </body>
    </div>
  )

}

export default Home;