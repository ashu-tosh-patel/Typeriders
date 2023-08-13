import { useState } from 'react'
// import { useLogin } from '../../hooks/useLogin'


//styles
import './Login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState("status...");
    const handleSubmit = async (e) => {
            e.preventDefault();
            setStatus("Sending...");
            let details = {
                email: email,
                password: password,
            };
            try{
                let response = await fetch("http://localhost:2000/login", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json;charset=utf-8"
                    },
                    body: JSON.stringify(details),
                    credentials: 'include'
                });
                setStatus("Submit");
                let result = await response.json();
                alert(result.status);
            }
            catch(err){
                console.log(err);
            }
    }
    // const { login, error, isPending } = useLogin()
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <label>
                <span>Email: </span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>Password: </span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            {<button onClick={handleSubmit} className="btn">Login</button>}
            {<button className="btn" disabled>{status}</button>}
        </form>
    );
};