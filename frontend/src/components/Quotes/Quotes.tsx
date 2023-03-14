import React from 'react'
import { posQuotesForUser } from '../../Client/client';
import { QuotesType } from '../../types'; 
import './Quotes.css'

type PropType = {
    quote: QuotesType,
    isLogin :boolean;
    isForFav :boolean;
    isForHome :boolean;
    name?:string;
    removeCklickHandler?:(event :any) => void
}

const Quotes = (props : PropType) => {
    const { quote, isLogin , isForFav, isForHome, name, removeCklickHandler} = props;
    const addcklickHandler = async (event :any) => {
        await posQuotesForUser(name!, JSON.parse(event.currentTarget.value))
    }
    return (
        <>
        <div className='quotes'>
           <h4>{quote.quote}</h4>
           <p>-{quote.author}</p>
        </div>
        {isLogin && !isForFav && !isForHome &&<button className='quote-button' value={JSON.stringify(quote)} onClick={addcklickHandler}>Add in my list</button>}
        {isForFav && <button className='quote-button' onClick={removeCklickHandler} value={JSON.stringify(quote)}>Remove from my list</button>}
        </>
    )
}

export default Quotes