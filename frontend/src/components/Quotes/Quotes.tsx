import React from 'react'
import { QuotesType } from '../../types'; 
import './Quotes.css'

const Quotes = (props : QuotesType) => {
    const { quote, author } = props;
    return (
        <div className='Quotes'>
           <h4>{quote}</h4>
           <p>-{author}</p>
        </div>
    )
}

export default Quotes