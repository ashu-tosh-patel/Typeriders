import { useEffect, useState } from 'react'

//styles
import './Login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        let details = {
            email: email,
            password: password,
        };
        try {
            let response = await fetch("http://localhost:2000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify(details),
                credentials: 'include'
            });
            let result = await response.json();
            setStatus(result.status); 
        } catch (err) {
            console.log(err);
        }
    }

    // Remove useEffect, since it's not needed here

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
            {!status && <button onClick={handleSubmit} className="btn">Login</button>}
            {status && <button className="btn" disabled>{status}</button>}
        </form>
    );
};
