import React, { useEffect, useState } from 'react'
import { deleteQuotes, getUsersQuotes } from '../../Client/client';
import { QuotesType } from '../../types';
import Quotes from '../Quotes/Quotes';
import './FavQuotesList.css'

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
        <p className="fav-quotes">My favourite qoutes list</p>
        <body className="App-header fav-body" >
            {quotesArray && quotesArray.map((quotes : QuotesType) => 
            <Quotes 
                quote={quotes} 
                isLogin={true} 
                isForFav={true} 
                removeCklickHandler={removeCklickHandler} />)}
        </body>
      </div>
    )
}

export default FavQuotesList