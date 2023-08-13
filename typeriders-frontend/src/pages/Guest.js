import { useState } from 'react'



//styles
import './Login.css'

export default function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let response = await fetch("http://localhost:2000/guest");
            let result = await response.json();
            alert(result.status);
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Guest</h2>
            <label>
                <span>Username: </span>
                <input
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                />
            </label>
            {<button onClick={handleSubmit} className="btn">Continue</button>}
        </form>
    )
}
