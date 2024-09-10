/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./SearchList.module.css"
import { useFetch } from "../../../Hook/Fetch";
import { useNavigate, useParams } from "react-router-dom";

function SearchList(props) { 
    
    const { SearchId } = useParams();
    const navigate = useNavigate();
    
    
    const value = useFetch('http://localhost:3100/booking/search/'+ SearchId);
    console.log(value);
    
    let renderData;

    if(value) {
        const SearchData = value.filter(data => data.city === SearchId)
    
        
         renderData = SearchData.map(data => (

            <div className={styles.content}>
                <img className={styles.img} src={data.photos[0]} alt="best"/>
                <div className={styles.midContent}>
                    <h1 className={styles.h1}>{data.name}</h1>
                    <p className={styles.p0}>{data.distance}M from center</p>
                    <p  className={styles.p2}>{data.description}</p>
                    <p  className={styles.p}>{data.city}</p>
                    <p  className={styles.p4}>Free Cancellation</p>
                    <p  className={styles.pe}>----------------------Fee for cancel-------------------------</p>
                     
                </div>
                <div className={styles.lastContent}>
                    <div className={styles.underContent}>
                        <p className={styles.rate}>{data.rating}</p>
                    </div>
                    <div className={styles.aboveContent}>
                        <p className={styles.price}>${data.cheapestPrice}</p>
                        <p className={styles.pl}>Includes taxes or fees</p>
                        <button onClick={() => navigate(`/detail/${data._id}`)} className={ styles.button}>See availability</button>
                    </div>
                </div>
            </div>
         )
        )
        
    }

    // let renderData;
    // let User = props.TravelData;
    // let option1;

    // if(User.minPrice !==0) {
    //     option1 = list.filter(data => {
    //         return  data.price <= User.minPrice;
    //       })
    // }
    // if(User.rate !=="") {
    //     option1 = list.filter(data => {
    //      return  data.rate > User.rate;
    //         })
              
    // }  
    // if(User.fee ==="yes") {
    //     option1 = list.filter(data => {
    //     return  data.free_cancel ===true;
    //     })
    // }
    
    
    // const render2 = option1.map(data => (
    //     <div className={styles.content}>
    //         <img className={styles.img} src={data.image_url} alt="best"/>
    //         <div className={styles.midContent}>
    //             <h1 className={styles.h1}>{data.name}</h1>
    //             <p className={styles.p0}>{data.distance} from center</p>
    //             <p  className={styles.p1}>{data.tag}</p>
    //             <p  className={styles.p2}>{data.description}</p>
    //             <p  className={styles.p}>{data.type}</p>
    //             <p  className={data.free_cancel===true ? styles.p3 : styles.pe}>Free Cancellation</p>
    //             <p  className={data.free_cancel===true ? styles.p4 : styles.pe}>
    //              {data.free_cancel===true ? 'You can cancel later, so lock in this great price today!' :
    //               '----------------------Fee for cancel-------------------------'}</p>
    //         </div>
    //         <div className={styles.lastContent}>
    //             <div className={styles.underContent}>
    //                 <p className={styles.p0}>{data.rate_text}</p>
    //                 <p className={styles.rate}>{data.rate}</p>
    //             </div>
    //             <div className={styles.aboveContent}>
    //                 <p className={styles.price}>${data.price}</p>
    //                 <p className={styles.pl}>Includes taxes or fees</p>
    //                 <button onClick={detail} className={ styles.button}>See availability</button>
    //             </div>
    //         </div>
    //     </div>
    // ))
    // if(props.choice === 0) {
    //     renderData = render1;
    // }else {
    //     renderData = render2;
    // }
    return (
        <div style={{width: '70%', marginRight: '200px'}}>
           {renderData}   
        </div>
    )
}

export default SearchList;