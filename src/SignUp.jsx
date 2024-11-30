import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
function Signup(){
    const [name, setName] = useState("")
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
      else if(name ==="name"){
        setName(value);
      }
    }
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate('/mainPage')
        
    }
     return(
         <>
         <form>
            <p>
 
                Name: <input type= "text" name= "name" placeholder="John Doe" onChange={handleChange} required />    
            </p>
        
            
             <p>
                 Email: <input type= "email" name= "email" placeholder="Jerin@gmail.com" onChange={handleChange}  required/>
             </p>
             
             <p>
                 Password: <input type= "password" name= "password" placeholder="as^5+@ghifht?" onChange={handleChange} required/>
             </p>
             
             
         </form>
         <button type="submit"onClick = {handleClick} >Sign Up</button>
         <p>Already have An account? 
             <a href="/login">Login</a>
         </p>
         </>
 
 
     );
}
export default Signup