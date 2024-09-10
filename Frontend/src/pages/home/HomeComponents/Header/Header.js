/* eslint-disable no-unused-vars */
import React from "react";


import { useState } from 'react';
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useNavigate } from "react-router-dom";


function Header() {
    
    const navigate = useNavigate();
    
    const [place, setPlace] = useState('');
    const [dateF, setDateF] = useState('');
    const [dateT, setDateT] = useState('');
    const [adult, setAdult] = useState('');
    const [child, setChild] = useState('');
    const [room, setRoom] = useState('');
   
    function placeHandle(event) {
        setPlace(event.target.value);
    }
    function dateFHandle(event) {
        setDateF(event.target.value);
    }
    function dateTHandle(event) {
        setDateT(event.target.value);
    }
    function adultHandle(event) {
        setAdult(event.target.value);
    }
    function childHandle(event) {
        setChild(event.target.value);
    }
    function roomHandle(event) {
        setRoom(event.target.value);
    }
    const SearchData = {
        place: place,
        dateF: dateF,
        dateT: dateT,
        adult: adult,
        child: child,
        room: room,
    }
    function SubmitHandler(event) {
        event.preventDefault();
        alert('vui lòng nhập tên riêng dịa danh! eg: Ho Chi Minh');
        const SearchData = {
             place,
             dateF,
             dateT,
             adult,
             child,
             room,
        };
            fetch('http://localhost:3100/booking/search',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(SearchData) 
        }).then(response => response.json()).then(data =>  navigate(`/search/${data.city}`));
          
        setPlace('');
        setDateF('');
        setDateT('');
        setAdult('');
        setChild('');
        setRoom('');

        
    }
    return (
        <form onSubmit={SubmitHandler} className={styles.background}>
                 <div className={styles.content}>
                    <h1 className={styles.h1}>A Lifetime of discounts? It's Genius.</h1>
                    <p>Get rewarded for your travels- unlock instant saving of 10% or more with a free account</p>
                    <button className={styles.button}>Sign in/Register</button>
                </div>
                <div className={styles.search_form}>
                    <div className={styles.formContent}>
                        <FontAwesomeIcon className={styles.icon_place} icon={["fa", "fa-bed"]}/>
                        <input onChange={placeHandle} type="text"
                               className={styles.input}
                               placeholder="Where are you going ?"
                               value={place}> 
                        </input>
                    </div>
                    <div className={styles.formContent}>
                        <FontAwesomeIcon className={styles.icon_place} icon={["fa", "fa-calendar"]}/>
                        <input onChange={dateFHandle} 
                               type="date" 
                               min="2024-01-01"
                               max="2024-12-31" 
                               className={styles.input}
                               value={dateF}>
                        </input>
                    </div>
                    <p className={styles.icon_place}>To</p>
                    <div className={styles.formContent}>
                        <FontAwesomeIcon className={styles.icon_place} icon={["fa", "fa-calendar"]}/>   
                        <input onChange={dateTHandle}
                               type="date" 
                               min="2024-01-01"
                               max="2024-12-31"
                               className={styles.input}
                               value={dateT}>
                        </input>
                    </div>
                    <div className={styles.formContent}>
                        <FontAwesomeIcon className={styles.icon_place} icon={["fa", "fa-female"]}/>
                        <p className={styles.icon_place}>Adult</p>
                        <input onChange={adultHandle}
                               type="number" 
                               min={1}
                               className={styles.input_num}
                               value={adult}>
                        </input>
                        <p className={styles.icon_place}>Child</p>
                        <input onChange={childHandle}
                               type="number" 
                               min={0} 
                               className={styles.input_num}
                               value={child}>
                        </input>
                        <p className={styles.icon_place}>Room</p>
                        <input onChange={roomHandle} 
                               type="number" 
                               min={1} 
                               className={styles.input_num}
                               value={room}>
                        </input>
                    </div>
                    <button type="submit" className={styles.button_search}>Search</button>
                </div>
        </form>
    )
}

export default Header;