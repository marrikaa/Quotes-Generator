import { useEffect, useState } from "react";
import { QuotesType } from "../../types";
import Quotes from "../Quotes/Quotes";
import { getQuotes } from "../../Client/client";
import './Home.css'

type PropType = {
  isLogin : boolean,
  userName:string
}

const Home = (props :PropType) => {
  const {isLogin, userName } = props
  const [quotesArray, setQuotesArray]=useState<QuotesType[]>([])
  const randomQuotesArray : QuotesType[] = [];

  const setQuotes = async () => await setQuotesArray(await getQuotes());

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
          {quotesArray.map((quotes : QuotesType) => <Quotes quote={quotes} isLogin={isLogin} isForFav={false} name={userName}/>)}
      </div>
      </body>
    </div>
  )

}

export default Home;