import axios from "axios";

export default function App5(){
    const onClickUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{console.log(err)})
    }
    const onClickUser1=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users?id=1")
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{console.log(err)})
    }

    return(
        <>
        <button onClick={onClickUsers} >users</button>
        <button onClick={onClickUser1} >users for id=1</button>
        </>
    )
}