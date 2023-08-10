import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("");
    const Navigate=useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('userdetail');
        if(auth)
        {
             Navigate('/')
        }
    })
    const handleLogin= async()=>{
        console.warn(email,password);
        let result = await fetch('http://127.0.0.1:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        result= await result.json();
        console.warn(result)
        if(result.name){
            localStorage.setItem("userdetail",JSON.stringify(result));
            Navigate('/');
        }
        else{
            alert("please enter connect details")
        }
    }
    return(
        <div className="style">
        <h1>login here</h1>
        
        <input className="inputBox" type="text"
            value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

        <input className="inputBox" type="password"
            value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />

         <button onClick={handleLogin} className="box" type="button">login</button>

    </div>
    )
}
export default Login;