import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./DashBoard.module.css";

import { faCartShopping, faCoins, faDollar, faUser } from "@fortawesome/free-solid-svg-icons"
;

import { useFetch } from "../../../../Frontend/src/Hook/Fetch"

export function DashBoard() {
    const transaction = useFetch('http://localhost:3100/transaction');
    const userData = useFetch('http://localhost:3100');
    
    let totalArr = [];
    let totalPrice;
    let transactionData;
    if(transaction) {
          transactionData = transaction.filter((data,index) => ( index > transaction.length - 8 && index < transaction.length))
          totalArr.push(transaction.map(data => data.price))
          totalPrice = totalArr[0].reduce((x,y) => x+y);
    }

    
    return (
        <>   
            <div className={style.container}>
                    <div className={style.box}>
                        <h3>USERS</h3>
                        <p>{userData && userData.length}</p>
                        <FontAwesomeIcon style={{color: "#e33c5b" , backgroundColor:"#ffcccc", height:"20px", width:"20px", padding:"3px", marginLeft:"250px"}} icon={faUser}/>
                    </div>
                    <div className={style.box}>
                        <h3>ORDER</h3>
                        <p>{transaction && transaction.length}</p>
                        <FontAwesomeIcon style={{color: "#dcaa2d" , backgroundColor:"#f8edd2", height:"20px", width:"20px", padding:"3px", marginLeft:"250px"}} icon={faCartShopping}/>
                    </div>
                    <div className={style.box}>
                        <h3>EARNINGS</h3>
                        <p>{totalPrice}$</p>
                        <FontAwesomeIcon style={{color: "#2c962c" , backgroundColor:"#cce6cc", height:"20px", width:"20px", padding:"3px", marginLeft:"250px"}} icon={faDollar}/>
                    </div>
                    <div className={style.box}>
                        <h3>BALANCE</h3>
                        <p>{(totalPrice / 12).toFixed()}$</p>
                        <FontAwesomeIcon style={{color: "#993399" , backgroundColor:"#e6cce6", height:"20px", width:"20px", padding:"3px", marginLeft:"250px"}} icon={faCoins}/>
                    </div>
                </div>
                <h1 className={style.h1}>Latest Transactions</h1>
                <table className={style.table}>
                <tr>
                <th>#</th>
                <th className={style.th2}>ID</th>
                <th className={style.th2}>User</th>
                <th className={style.th2}>Hotel</th>
                <th className={style.th3}>Room</th>
                <th className={style.th4}>Date</th>
                <th className={style.th5}>Price</th>
                <th className={style.th6}>Payment Method</th>
                <th className={style.th7}>Status</th>
                <th>Check In</th>
                <th>Check Out</th>
                </tr>
                {transaction && transactionData.map((data,index) => (
                  <tr key={data._id}>
                    <td>{index+1}</td>
                    <td>{data._id}</td>
                    <td>{data.username}</td>
                    <td>{data.hotel}</td>
                    <td>{data.rooms.map(room => room + " ")}</td>
                    <td>{data.dateStart.slice(0,10)}-{data.dateEnd.slice(0,10)}</td>
                    <td>${data.price}</td>
                    <td>{data.payment}</td>
                    <td className={data.status === 'Booked' ? style.booked : data.status === "Check In" ? style.checkIn : style.checkOut}>{data.status}</td>
                    <td><button onClick={() =>  {   window.location.reload();
                                                    fetch('http://localhost:3100/admin/status', {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type":"application/json"
                                                    },
                                                    body: JSON.stringify({data: data._id, status: "Check In"})
                                                    })} }
        className={style.th8}>CheckIn</button></td>
                    <td><button onClick={() =>  {   window.location.reload();
                                                    fetch('http://localhost:3100/admin/status', {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type":"application/json"
                                                    },
                                                    body: JSON.stringify({data: data._id, status: "Check Out"})
                                                    })} }
        className={style.th9}>CheckOut</button></td>
                  </tr>
                ))}
    
            </table>
        </>
    )
}