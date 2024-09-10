/* eslint-disable no-unused-vars */
import React, { useEffect }  from 'react';
import { useState } from 'react';
import NavData from './navBar.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './NavBar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../../../../redux/AuthSlice';
import { useNavigate } from 'react-router-dom';



function NavBar(props) {
    const[status1, setStatus1] = useState(false);
    const[status2, setStatus2] = useState(false);
    const[status3, setStatus3] = useState(false);
    const[status4, setStatus4] = useState(false);
    const[status5, setStatus5] = useState(false);
    const isLogin = useSelector(state => state.authentication.isLogin);
    const user = useSelector(state => state.authentication.user);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const CheckLogin = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if(CheckLogin){
             dispatch(authAction.login(CheckLogin.email));
        }
   },[]);

function login() {
    navigate('/auth?status=login');
    window.location.reload();
}    
function register() {
    navigate('/auth?status=register');
}    


function optinal1() {
    if(NavData[0].active){
        setStatus1(false);   
        NavData[0].active = false;
    }else {
        setStatus1(true);   
        NavData[0].active = true;
    }
}
function optinal2() {
    if(NavData[1].active){
        setStatus2(false);   
        NavData[1].active = false;
    }else {
        setStatus2(true);   
        NavData[1].active = true;
    }
}
function optinal3() {
    if(NavData[2].active){
        setStatus3(false);   
        NavData[2].active = false;
    }else {
        setStatus3(true);   
        NavData[2].active = true;
    }
}
function optinal4() {
    if(NavData[3].active){
        setStatus4(false);   
        NavData[3].active = false;
    }else {
        setStatus4(true);   
        NavData[3].active = true;
    }
}
function optinal5() {
    if(NavData[4].active){
        setStatus5(false);   
        NavData[4].active = false;
    }else {
        setStatus5(true);   
        NavData[4].active = true;
    }
}
 return (
 <div className={styles.background}>
 <div>
   <h1 onClick={() => navigate('/')} className={styles.h1}> Booking Website </h1>
   
   <div className={styles.listContent}>
  
            <div onClick={optinal1} key={NavData[0].id} className={NavData[0].active && styles.optional}>
                <FontAwesomeIcon style={{display: 'inline-block', marginRight: '10px'}} icon={['fas', `${NavData[0].icon}` ]}/>
                <p style={{display: 'inline-block', cursor: 'pointer'}}>{NavData[0].type}</p>
            </div>

            <div onClick={optinal2} key={NavData[1].id} className={NavData[1].active && styles.optional}>
                <FontAwesomeIcon style={{display: 'inline-block', marginRight: '10px'}} icon={['fas', `${NavData[1].icon}` ]}/>
                <p style={{display: 'inline-block', cursor: 'pointer'}}>{NavData[1].type}</p>
            </div>

            <div onClick={optinal3} key={NavData[2].id} className={NavData[2].active && styles.optional}>
                <FontAwesomeIcon style={{display: 'inline-block', marginRight: '10px'}} icon={['fas', `${NavData[2].icon}` ]}/>
                <p style={{display: 'inline-block', cursor: 'pointer'}}>{NavData[2].type}</p>
            </div>

            <div onClick={optinal4} key={NavData[3].id} className={NavData[3].active && styles.optional}>
                <FontAwesomeIcon style={{display: 'inline-block', marginRight: '10px'}} icon={['fas', `${NavData[3].icon}` ]}/>
                <p style={{display: 'inline-block', cursor: 'pointer'}}>{NavData[3].type}</p>
            </div>

            <div onClick={optinal5} key={NavData[4].id} className={NavData[4].active && styles.optional}>
                <FontAwesomeIcon style={{display: 'inline-block', marginRight: '10px'}} icon={['fas', `${NavData[4].icon}` ]}/>
                <p style={{display: 'inline-block', cursor: 'pointer'}}>{NavData[4].type}</p>
            </div>
              
   </div>
   </div>
        <div className={styles.Form}>
                {!isLogin ?
                 <div className={styles.button_container}>
                        <button onClick={login}  className={styles.button}>Login</button>
                        <button onClick={register}  className={styles.button}>Register</button>
                </div> 
                : <div className={styles.button_container}>
                        <h3>hello {user}</h3>
                        <button onClick={() => navigate('/transaction')}  className={styles.button}>Transaction</button>
                        <button onClick={() => {dispatch(authAction.logout()); localStorage.removeItem('user')}} className={styles.button}>LogOut</button>
                </div> }
        </div>
    </div>
 )
}

export default NavBar;
