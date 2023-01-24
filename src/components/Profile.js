import { useEffect, useState } from "react";
const Profile=(props)=>{
        console.log (" useEffect ")
    useEffect(()=>{
        const timer= setInterval(()=>{
            console.log("Girik Garg OP!!!")
        },1000)

        return ()=>{
            clearInterval(timer)
            console.log (" useEffect return ")
        }
    },[])
    const [count,setCount]=useState(0)
    { console.log("Render") }
    return (        
            <div>
            <h1> This is Profile component </h1>
            <h2> Name : {props.name} </h2>
            <h3> Count: {count} </h3>
            <button onClick={ ()=>setCount(1)}> Change count </button>
        </div>
    )
}
export default Profile;