/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";



import styles from "./Content.module.css";
import { BrowserRouter as Router, Route, Link, NavLink, useNavigate } from "react-router-dom";
import { useFetch } from "../../../../Hook/Fetch";



function Content(props) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const value = useFetch('http://localhost:3100/booking/hotel');
    
    let Data; 
    let typeData;
    let Hoteldata;
    
    
    if(value) {
        const HanoiHotel = value.filter(item => {
            return item.city === 'Ha Noi';
        })
        const HCMHotel = value.filter(item => {
            return item.city === "Ho Chi Minh";
        })
        const DanangHotel = value.filter(item => {
            return item.city === "Da Nang";
        })
        const CityHotel = [
            {
                id: HanoiHotel._id,
                image: 'https://www.travelassociates.com/sites/v2.travel-associates.com.au/files/fcl-blog/hanoi-hoankiem.jpg',
                cityName: HanoiHotel[0].city,
                properties: HanoiHotel.length
            },
            {
                id: HCMHotel._id,
                image: 'https://image.baodauthau.vn/w750/Uploaded/2024/qjmfn/2021_04_29/03-3055.jpg',
                cityName: HCMHotel[0].city,
                properties: HCMHotel.length
            },
            {
                id: DanangHotel._id,
                image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/0e/18/92.jpg',
               cityName: DanangHotel[0].city,
               properties: DanangHotel.length
            }
        ]
         Data = CityHotel.map(city => (
            <div key={city._id}>
                <img className={styles.img}  src={city.image} alt="city"/>
                <div className={styles.info}>
                    <h1>{city.cityName}</h1>
                    <h3>{city.properties} Properties</h3>
                </div>
            </div>
        ))
    }
    if(value){
         const hotelType = value.filter(item => {
             return item.type ==='hotel'
            })
         const apartmentType = value.filter(item => {
             return item.type ==='apartment'
         })
         const resortType = value.filter(item => {
             return item.type ==='resort'
            })
            const villaType = value.filter(item => {
                return item.type ==='villa'
            })
            const cabinType = value.filter(item => {
                return item.type ==='cabin'
            })
            const typeHotel = [
                {
                    id: hotelType._id,
                    image: 'https://homepage.momocdn.net/hotel/momo-cdn-api-230413204218-638170153383668194.jpg',
               type: 'Hotel',
               properties: hotelType.length
            },
            {
                id: apartmentType._id,
                image: 'https://images.trvl-media.com/lodging/24000000/23080000/23077000/23076953/c29684de.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
                type: 'Apartment',
                properties: apartmentType.length
            },
            {
                id: resortType._id,
                image: 'https://cdn.alongwalk.info/vn/wp-content/uploads/2022/02/16050019/image-chao-dao-ngay-voi-top-8-resort-nha-trang-chup-anh-cuoi-cuc-xin-164493721978491.jpg',
                type: 'Resorts',
                properties: resortType.length
            },
            {
                id: villaType._id,
                image: 'https://www.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
                type: 'Villas',
                properties: villaType.length
            },
             {
                 id: cabinType._id,
                 image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-an-old-cabin-in-the-middle-of-a-forest-image_2950965.jpg',
                type: 'Cabins',
                properties: cabinType.length
             }
            ]
         typeData = typeHotel.map(type => (
            <div key={type.id}>
                <img className={styles.imgType}  src={type.image} alt="type"></img>
                <div>
                    <h1>{type.type}</h1>
                    <h3>{type.properties} {type.type}</h3>
                </div>
            </div>
        ))
    }
    if(value){
        const topHotel = value.sort((a,b) => b.rating - a.rating);
        const TopRateHotel = [
            {
                id: topHotel[0]._id,
                image: topHotel[0].photos[0],
                name: topHotel[0].title,
                city: topHotel[0].city,
                price: topHotel[0].cheapestPrice,
                rate:  topHotel[0].rating
            },
            {
                id: topHotel[1]._id,
                image: topHotel[1].photos[0],
                name: topHotel[1].title,
                city: topHotel[1].city,
                price: topHotel[1].cheapestPrice,
                rate:  topHotel[1].rating
            },
            {
                id: topHotel[2]._id,
                image: topHotel[2].photos[0],
                name: topHotel[2].title,
                city: topHotel[2].city,
                price: topHotel[2].cheapestPrice,
                rate:  topHotel[2].rating
            }
        ]
         Hoteldata = TopRateHotel.map(hotel => (
            <div className={styles.loveContent} key={hotel.id}>
                    <img className={styles.imgHotel} src={hotel.image} alt="kind hotel"></img>
                    <div className={styles.detail}>
                       <NavLink onClick={() => navigate(`/detail/${hotel.id}`)} className={styles.link}>{hotel.name}</NavLink>
                       <p className={styles.city}>{hotel.city}</p>
                       <p className={styles.cost}>Starting From ${hotel.price}</p>
                       <div style={{display:'flex', flexDirection: 'row', gap: '20px'}}>
                        <div className={styles.star}></div>
                        <p className={styles.rate}>{hotel.rate}</p>
                        <p className={styles.type}>Excellent</p>
                       </div>
                    </div>
                </div>
        ))
    }
    
    return (
    
        <div className={styles.container}>
            <div className={styles.content}>
                {Data}
            </div>
            <p className={styles.p}>Browse By Property Type</p>
            <div className={styles.propertyType}>
                {typeData}
            </div>
            <p className={styles.pa}>Homes Guests Love</p>
            <div className={styles.propertyHotel}>
                {Hoteldata}
            </div>
        </div>
        
    )
}

export default Content;