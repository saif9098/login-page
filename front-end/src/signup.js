import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Signup = ()=>{
    const [name, setName] = useState("")//usestate-used to get the value ,setnam- to print or show the value
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("");

    const navigate=useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('userdetail');
        if(auth)
        {
             navigate('/') //user can't visit signup page when logged in
        }
    })

    const collectdata = async () => {
        console.warn(name, email, password)
        let result = await fetch('http://127.0.0.1:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-type': 'application/json'
            }
            // Fetch is a js tool (js internally call it api) used to integrate api.there are also some other methods(module) to integrate api .

        })
        result = await result.json()
        console.warn(result)
        localStorage.setItem("userdetail",JSON.stringify(result));
       //localstorage is a storage of data which stores data for long time
        navigate('/');
    }
return (
    <div className="style">
        <h1>register here</h1>
        <input className="inputBox" type="text"
            value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />

        <input className="inputBox" type="text"
            value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

        <input className="inputBox" type="password"
            value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />

        <button  onClick={collectdata} className="box" type="button">Sign Up</button>

    </div>
)
}
export default Signup;