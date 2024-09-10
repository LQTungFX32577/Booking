import { Form, redirect, useNavigate, useSearchParams } from "react-router-dom";
import style from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/AuthSlice";
import { useEffect, useState } from "react";
export function Auth() {
    const [ status ] = useSearchParams();
    const login = status.get('status') === 'login';
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState([]);
 

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const API = async() => {
            const data = await fetch('http://localhost:3100/')
            const result = await data.json();
            return setUserData(result)
        }
        API();
    },[]);
    
    
    function Login() {
        navigate('/auth?status=login');
        window.location.reload();
    }
    function register() {
        navigate('/auth?status=register')
    }
    const validUser = userData.find(item => {
        return item.username === user && item.password === password;
        
    })
    
    
    function checkValid() {

        if(validUser){
            localStorage.setItem('user', JSON.stringify({user: validUser._id, email: validUser.email}));
            
            dispatch(authAction.login(validUser.email));
            navigate('/');
            
            
        }else {
            alert('incorrect name or password!')
        }
    }
    return (
        <div className={style.container}>
           <nav>
               <h3 style={{cursor:"pointer"}} onClick={()=>navigate('/')}>Booking Website</h3>
               <div>
                <button onClick={register}  className={style.button}>Register</button>
                <button onClick={Login}  className={style.button}>Login</button>
               </div>
           </nav>
            <Form  method="POST">
                <h1>{login ? 'Sign In' : 'Sign Up' }</h1>
                <input onChange={(e) => setUser(e.target.value)} placeholder="UserName" name="user" required></input>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" name="password" required></input>
                {!login && <>
                    <input placeholder="fullName" name="fullName" required></input>
                    <input placeholder="phoneNumber" name="phone" required></input> 
                    <input placeholder="email" name="email" required></input> 
                    <input placeholder="Admin token" name="admin"></input>
                    </>}
            {!login&&<button type="submit" className={style.buttonF}>Create Account</button>}
            {login && <button onClick={checkValid}  className={style.buttonF}>Login</button>}
            </Form>
        </div>
    )
}

export const action =async({request}) => {
    
    const data = await request.formData();
        
    const user = {
                    user: data.get('user'), 
                    password: data.get('password'),
                    fullName: data.get('fullName'),
                    phoneNumber: data.get('phone'),
                    email: data.get('email'),
                    adminToken: data.get('admin'),
                };
    
    const response = await fetch('http://localhost:3100', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    });
    if(response.status === 200) {
        alert('Register Success!')
        return response;    
    }else {
        alert('User is Already Created')
    }
    return redirect('/auth?status=login');
}

