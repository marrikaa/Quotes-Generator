import React, { useEffect, useState } from 'react'
import { deleteQuotes, getUsersQuotes, posQuotesForUser } from '../../Client/client';
import { postQuotes } from '../../Client/clientQuote';
import { QuotesType } from '../../types';
import Quotes from '../Quotes/Quotes';
import './FavQuotesList.css'

type PropType = {
    userName:string
}

const FavQuotesList = (props :PropType) => {
    const {userName} = props;
    const [quotesArray, setQuotesArray] = useState<QuotesType[]>([]);
    const [myquote, setMyQuotes] = useState<string>("")
    const [myAuthor, setMyAuthor] = useState<string>("")

    const setQuotesForUser= async () => await setQuotesArray(await getUsersQuotes(userName));

    useEffect( () => {
        setQuotesForUser();
    } ,[])
    
    const removeCklickHandler = async(event : any) => {
        const deletedQuote : QuotesType= JSON.parse(event.currentTarget.value);
        await deleteQuotes(userName, JSON.parse(event.currentTarget.value));
        const array = [...quotesArray];
        const indexOfQuote = array.findIndex(q => q.author === deletedQuote.author && q.quote === deletedQuote.quote );
        array.splice(indexOfQuote, 1);
        setQuotesArray(array)
    }

    const quoteHandler = (event:any) => {
        setMyQuotes(event!.currentTarget.value);
    };

    const authorHandler = (event: any) => {
        setMyAuthor(event!.currentTarget.value);
    };

    const postQuoteHandler = async() => {
      await postQuotes({
        quote : myquote,
        author: myAuthor
      });
      await posQuotesForUser(userName,{
        quote : myquote,
        author: myAuthor
      })
      const array = [...quotesArray];
      array.unshift({ quote : myquote,  author: myAuthor}) 
      setQuotesArray(array);
    }

    return (
      <div className="App">
        <p className="fav-quotes">My favourite qoutes list</p>
        <div className='post-Quotes'>
            <p className="post-quotes">Add your favorite quote</p>
            <textarea onChange={quoteHandler} className='quote-input'placeholder='Quote'></textarea>
            <textarea onChange={authorHandler} className='author-input' placeholder='Author' ></textarea>
            <button onClick={postQuoteHandler}>Create</button>
        </div>
        
        <body className="App-header fav-body" >
            {quotesArray && quotesArray.map((quotes : QuotesType) => 
            <Quotes 
                quote={quotes} 
                isLogin={true} 
                isForFav={true} 
                isForHome={false}
                removeCklickHandler={removeCklickHandler} />)}
        </body>
      </div>
    )
}

export default FavQuotesList