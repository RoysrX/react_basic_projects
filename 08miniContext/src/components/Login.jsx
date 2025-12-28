import React,{useState, useContext, use} from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault() 
        setUser({username, password})
    }
    
    return(
        <div>
            <h2>Login</h2> 
            <input type='text' 
            value={username} 
            onChane={(e) => setUsername(e.target.value)}
            placeholder="username"   />
            {" "}
            <input type='text' 
            value={password}
            onChane={(e) => setPassword(e.target.value)}
            placeholder="password"   />
            <button onClick={handleSubmit}></button>
        </div>
    )
}

export default Login