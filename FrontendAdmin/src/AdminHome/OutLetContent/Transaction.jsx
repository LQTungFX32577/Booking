import {  useEffect, useState } from "react";
import style from "./DashBoard.module.css"


export function Transaction() {
    const [page, setPage] = useState(1);
    const[transaction,setTransaction] = useState();
    
    useEffect(() => {
        fetch(`http://localhost:3100/transaction/${page}`)
        .then(response => response.json())
        .then(data => setTransaction(data))
        .catch(err => console.log(err)
        )
    },[page])
    
    function increase() {
        setPage(page + 1);
        
    }
    function decrease() {
        setPage(page - 1);
    }
    return (
        <>
                <h1 className={style.h1}>All Transactions</h1>
                <span style={{display:"flex", justifyContent:"end", marginBottom:"30px", marginRight:"120px", gap:"1px"}}>
                    {page>1 &&<button onClick={decrease} className={style.button}>Previous</button>}
                    <input style={{width: "20px", textAlign:"center", borderRadius:"5px"}} value={page}/>
                {page<5 &&<button onClick={increase} className={style.button}>Next</button>}
                </span>
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
                {transaction && transaction.map((data,index) => (
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