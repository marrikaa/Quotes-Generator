import React, { ReactElement } from 'react'
import './SearchBar.css'

type PropType = {
    setSearchQuote: (str: string) => void;
    searchHandler : () => void;
};

const SearchBar = (props : PropType) => {
    const { setSearchQuote, searchHandler } = props;
    const quoteSearchHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchQuote(event!.currentTarget.value);
    };

    return (
    <div className='search-bar'>
        <input className='search-input' onChange={quoteSearchHandler} type='text' placeholder= " " />
        <button className='search-button' onClick ={searchHandler}> Search 🔍</button>
    </div> 
)}

export default SearchBar