import React, { useEffect, useState } from 'react'
import { QuotesType } from '../../types';
import Quotes from '../Quotes/Quotes';
import SearchBar from '../SearchBar/SearchBar';
import { getQuotes } from '../../Client/client';

type PropType = {
  isLogin : boolean,
  userName:string
}
const SearchPage = (props :PropType) => {
  const {isLogin, userName } = props
  const [quotesArray,setQuotesArray] = useState<QuotesType[]>([])
  const [searchResult,setSearchResult] = useState<QuotesType[]>([])
  const [searchForQuote, setSearchForQuote] =useState <string> ("");

  const setQuotes = async () => setQuotesArray(await getQuotes());

  useEffect(()=> {
    setQuotes() 
   } ,[])
    
  const getSearchQuotes = () => {
    const filteredQuotes = quotesArray.filter(quotes => (quotes.quote).includes(searchForQuote));
    setSearchResult(filteredQuotes);
  }
    
  return (
    <div className="App">
      <header>
        <SearchBar setSearchQuote={setSearchForQuote} searchHandler={getSearchQuotes} />
    </header>
      <body className="App-header" >
          <div id="quote-box" >
          {searchResult.map((quotes : QuotesType) => <Quotes quote={quotes} isLogin={isLogin} isForFav={false} name={userName} />)}
      </div>
      </body>
    </div>
  )
}

export default SearchPage