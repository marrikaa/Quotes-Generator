import React, { useEffect, useState } from 'react'
import { QuotesType } from '../../types';
import Quotes from '../Quotes/Quotes';
import SearchBar from '../SearchBar/SearchBar';

const SearchPage = () => {

    const [quotesArray,setQuotesArray]=useState<QuotesType[]>([])
    const [searchResult,setSearchResult]=useState<QuotesType[]>([])
    const [searchForQuote, setSearchForQuote] =useState <string> ("");

  
  
    const fetchQuotes = async () =>{
      const response = await fetch("http://localhost:3001/api/quotes")
      const parsed = await response.json()
      setQuotesArray(parsed)
    }
    
  useEffect(()=> {
      fetchQuotes();
  } ,[])
    
    const getQuotes = () => {
      const filteredQuotes = quotesArray.filter(quotes => (quotes.quote).includes(searchForQuote));
      setSearchResult(filteredQuotes);
    }
    
    return (
      <div className="App">
        <header>
          <SearchBar setSearchQuote={setSearchForQuote} searchHandler={getQuotes} />
      </header>
        <body className="App-header" >
           <div id="quote-box" >
            {searchResult.map((quotes : QuotesType) => <Quotes quote={quotes.quote} author={quotes.author} />)}
        </div>
        </body>
      </div>
    )
  }

export default SearchPage