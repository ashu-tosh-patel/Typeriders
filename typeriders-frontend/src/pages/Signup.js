import { useState } from 'react'
// import { useSignup } from '../../hooks/useSignup'
import './Signup.css'
export default function SignUp() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    // const { signup, isPending, error } = useSignup()
    const [status, setStatus] = useState('status...');
    const handleSubmit = async (e) => {
            e.preventDefault();
            setStatus("Sending...");
            let details = {
                username: userName,
                email: email,
                password: password,
            };
            try{
                let response = await fetch("http://localhost:2000/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify(details),
                });
                setStatus("Submit");
                let result = await response.json();
           }
           catch (err) {
            console.log(err);
           }
    }

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <h2>SignUp</h2>
            <label>
                <span>User Name: </span>
                <input
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                />
            </label>
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
            {<button onClick={handleSubmit} className="btn">Signup</button>}
            {<button type='button' className="btn" >{status}</button>}
        </form>
    )
}
