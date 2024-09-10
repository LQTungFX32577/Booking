/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import styles from "./SearchPopup.module.css"
import SearchList from "../SearchList/SearchList";

function SearchPopup() {
    const [price,setPrice] = useState('');
    const [rate, setRate] = useState('');
    const [fee, setFee] = useState('')
    const [choice, setChoice] = useState(0);
  
    
 
    function UserPrice(e) {
      setPrice(e.target.value);
      setChoice(0);
    }
    function UserRate(e) {
      setRate(e.target.value);
      setChoice(0);
    }
    function UserFee(e) {
      setFee(e.target.value);
      setChoice(0);
    }
    const Data = {
      minPrice: price,
      rate: rate,
      fee: fee
    }
    function clickHandler() {
         setChoice(1);
    }
    

    return (
      <div className={styles.container}>
        <div className={styles.content}>
            <h1 style={{fontWeight: '600', color: 'gray'}}>Search</h1>
            <babel>Destination</babel>
            <input className={styles.datainput} type="text"></input>
            <babel>Check-in Date</babel>
            <input className={styles.datainput} type="text"></input>
            <babel>Options</babel>
            <div className={styles.choiceContent}>
              <div className={styles.options}>
                <babel>Min price per night</babel>
                <babel>Rate</babel>
                <babel>Fee Cancel</babel>
                <babel>Adult</babel>
                <babel>Child</babel>
                <babel>Room</babel>
              </div>
              <div className={styles.choice}>
                <input onChange={UserPrice} className={styles.choiceinput} type="text"></input>
                <input onChange={UserRate} className={styles.choiceinput} type="text"></input>
                <input onChange={UserFee} className={styles.choiceinput} type="text"></input>
                <input className={styles.choiceinput} type="text" ></input>
                <input className={styles.choiceinput} type="text" ></input>
                <input className={styles.choiceinput} type="text" ></input>
              </div>
            </div>
            <button onClick={clickHandler} className={styles.button}>Search</button>
        </div>
        <SearchList choice={choice} TravelData={Data}/>
        </div>
    )
}

export default SearchPopup;