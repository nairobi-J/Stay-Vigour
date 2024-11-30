import { useState } from "react";
import { useNavigate } from "react-router";


function Login(){
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("")
   const handleChange = (e) => {
     const {name, value} = e.target;
     if(name === "email"){
         setEmail(value);
     }
     else if(name === "password"){
        setPassword(value);
     }
   }
   const navigate = useNavigate();
   const handleClick = (e) => {
    navigate('/mainpage')
   }
    return(
        <>
        <form>
            <p>
                Email: <input type= "email" name= "email" placeholder="Jerin@gmail.com" onChange={handleChange} required/>
            </p>
            
            <p>
                Password:  <input type= "password" name= "password" placeholder="as^5+@ghifht?" onChange={handleChange} required/>
            </p>
           
        </form>
        <button type="submit" onClick = {handleClick}>Login</button>
        <p>Create An account? 
            <a href="/signup">Signup</a>
        </p>
        </>


    );
}


export default Login