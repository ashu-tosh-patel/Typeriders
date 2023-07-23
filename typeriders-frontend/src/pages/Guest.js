import { useState } from 'react'



//styles
import './Login.css'

export default function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
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
            {<button className="btn">Continue</button>}
        </form>
    )
}
