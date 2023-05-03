import { QuotesType } from "../types"


const postQuotes = async(props : QuotesType) : Promise<void> =>{
    fetch('http://localhost:3001/api/myQuotes', {
        method: "POST",
        body : JSON.stringify({
            quote: props.quote,  
            author: props.author, 
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
}

export {
    postQuotes,
}