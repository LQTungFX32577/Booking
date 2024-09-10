/* eslint-disable no-unused-vars */
import React from "react";


import styles from "./Subscribe.module.css";


function Subscribe() {
    let user;
    function Save(e) {
      user = e.target.value
    }
    function Sub(event) {
      event.preventDefault();
      const userData = {
        userName: user
      }
      console.log(userData);
      user = "";
    }
    return (
       <div className={styles.content}>
            <h1 className={styles.h1}>Save Time, Save Money!</h1>
            <p className={styles.p}>Sign up and we will send the best deals to you</p>
            <form onSubmit={Sub}>
               <input onChange={Save} className={styles.input} type="text" placeholder="Your Email"></input>
               <button className={styles.button} type="submit">Subscribe</button>
            </form>
       </div>
    )
}

export default Subscribe;