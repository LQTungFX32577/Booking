import React, {  useEffect, useRef } from "react";

import NavBar from "../home/HomeComponents/NavBar/NavBar"
import Subscribe from "../home/HomeComponents/Subscribe/Subscribe"
import Footer from "../home/HomeComponents/Footer/Footer"

import styles from "./Detail.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFetch } from "../../Hook/Fetch";
import { useParams } from "react-router-dom";
import { Modal } from "./Modal";

function Detail() { 
  const { HotelId } = useParams();  
  const dialog = useRef();
  window.scrollTo(0, 0);
  const value = useFetch('http://localhost:3100/booking/hotel/'+  HotelId );
  const CheckLogin = JSON.parse(localStorage.getItem('user'));
  
  
  function OpenModal() {
    if(CheckLogin === null){
      return alert('you must login first!');
    }else {
      dialog.current.open();
    } 
  }

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <NavBar/>
      {value && 
      <>
        <Modal ref={dialog}/>
        <div className={styles.content}>
        <div className={styles.topContent}>
          <div className={styles.topLeftContent}>
            <h1 className={styles.name}>{value.name}</h1>
            <p className={styles.address}><FontAwesomeIcon icon={['fa', 'fa-location-dot' ]}/> {value.address}</p>
            <p className={styles.distance}>{value.distance}M to City Center</p>
            <p className={styles.price}>Start From ${value.cheapestPrice}</p>
          </div>
          <button onClick={OpenModal} className={styles.button}>Reserves or Book Now!</button>
        </div>
        <div className={styles.midContent}>
          <img className={styles.img} src={value.photos[0]} alt="pick"></img>
          <img className={styles.img} src={value.photos[1]} alt="pick"></img>
          <img className={styles.img} src={value.photos[2]} alt="pick"></img>
          <img className={styles.img} src={value.photos[1]} alt="pick"></img>
          <img className={styles.img} src={value.photos[2]} alt="pick"></img>
          <img className={styles.img} src={value.photos[0]} alt="pick"></img>
        </div>
        <div className={styles.botContent}>
          <div className={styles.botLeftContent}>
              <h1 className={styles.title}>{value.title}</h1>
              <p className={styles.description}>{value.desc}</p>
          </div>
          <div className={styles.botRightContent}>
            <h2 className={styles.h2}>Perfect for a 9 night stay!</h2>
            <p className={styles.p}>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</p>
            <p className={styles.pri}>$945 (9 nights)</p>
            <button  onClick={OpenModal} className={styles.button2}>Reserves or Book Now!</button>
          </div>
        </div>
    </div>
    </>}
      <Subscribe/>
      <Footer/>
    </div>
    </>
  );
};

export default Detail;
