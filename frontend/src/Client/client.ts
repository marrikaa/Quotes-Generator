import { QuotesType } from "../types"
import { User } from "../types"

const getUsers = async() : Promise<User[]> =>{
    const users= await fetch("http://localhost:3001/api/users").then(response => response.json())
    return users;   
}

const postUser = async(props : User, setIsLogin: (p:boolean)=> void) : Promise<void> =>{
    const users = await getUsers();
    if(props.userName === "" || props.password === ""){
        alert("Please fill the data!");
        setIsLogin(false);
        return;
    }
    if(users.filter(u => u.userName === props.userName).length === 1){
        alert("user name already exist, please use new one!");
        setIsLogin(false);
        return;
    }

    fetch('http://localhost:3001/api/users', {
        method: "POST",
        body : JSON.stringify({
            user: props.userName,  
            password: props.password, 
            favQuotes: []
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    setIsLogin(true);
}

const posQuotesForUser = async(userName : string, quotes : QuotesType,) : Promise<void> =>{
    fetch(`http://localhost:3001/api/users/${userName}/favQuotes`, {
        method: "POST",
        body : JSON.stringify(quotes),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
}

const getUsersQuotes = async (name : String) : Promise<QuotesType[]> =>{
    let usersQuotes :QuotesType[] = []
    if(name !== ""){
        usersQuotes= await fetch(`http://localhost:3001/api/users/${name}/favQuotes`).then(response => response.json())
    }
    return usersQuotes;   
}

const deleteQuotes = async(userName : string, quotes : QuotesType) : Promise<void> => {
    await fetch(`http://localhost:3001/api/users/${userName}/favQuotes`, {
        method: "DELETE",
        body : JSON.stringify({
            quote :quotes.quote,
            author: quotes.author
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
}


const getQuotes = async () : Promise<QuotesType[]> => {
    const quotes= await fetch("http://localhost:3001/api/quotes").then(response => response.json())
    return quotes;   
}

export {
    postUser,
    getQuotes,
    getUsers,
    getUsersQuotes,
    posQuotesForUser,
    deleteQuotes
} 
