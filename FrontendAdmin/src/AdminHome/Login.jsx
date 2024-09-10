import { useState } from "react";
import {  useNavigate } from "react-router-dom"
import style from "./Home.module.css"
export function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const adminUser = {
        username: user,
        password: password
    }

    function checkValid(e) {
        e.preventDefault();
        fetch('http://localhost:3100/admin', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(adminUser)
        }).then(response => {
            if(response.status === 200) {
                alert('Login success!')
                return response.json()
                
            }else {
                alert('invalid value or password!')
            } 
        }).then(data => {
            localStorage.setItem('user', data.username)
            return navigate('/home')
        })
    }
    return (
        <>
             <div className={style.container}>
           <nav>
               <h3>Booking Website (Admin Page)</h3>
           </nav>
            <form onSubmit={checkValid}>
                <h1>Sign In</h1>
                <input onChange={(e) => setUser(e.target.value)} placeholder="UserName" name="user" required></input>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" name="password" required></input>
                <button type="submit"  className={style.buttonF}>Login</button>
            </form>
        </div>
        </>
    )
}