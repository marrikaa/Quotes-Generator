import React, { useEffect, useState } from 'react'
import { deleteQuotes, getUsersQuotes } from '../../Client/client';
import { QuotesType } from '../../types';
import Quotes from '../Quotes/Quotes';

type PropType = {
    userName:string
  }

const FavQuotesList = (props :PropType) => {
    const {userName} =props;
    const [quotesArray,setQuotesArray]=useState<QuotesType[]>([]);

    const setQuotes = async () => {
        setQuotesArray(await getUsersQuotes(userName));
    }
    useEffect(()=> {
      setQuotes();
    } ,[quotesArray])
    
    const removeCklickHandler = async(event : any) => {
        setQuotesArray(await deleteQuotes(userName, JSON.parse(event.currentTarget.value)));
    }

    return (
      <div className="App">
        <header>
          <h1>My favourite qoutes list</h1>
      </header>
        <body className="App-header" >
           <div id="quote-box" >
            {quotesArray && quotesArray.map((quotes : QuotesType) => 
            <Quotes 
                quote={quotes} 
                isLogin={true} 
                isForFav={true} 
                removeCklickHandler={removeCklickHandler} />)}
        </div>
        </body>
      </div>
    )
}

export default FavQuotesList