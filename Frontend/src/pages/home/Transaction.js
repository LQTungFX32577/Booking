import { useFetch } from "../../Hook/Fetch";
import NavBar from "./HomeComponents/NavBar/NavBar";

import styles from './Transaction.module.css';
export function Transaction() {
    const CheckLogin = JSON.parse(localStorage.getItem('user'));
    const transaction = useFetch('http://localhost:3100/transaction');


let userTransaction    
if(transaction) {
     userTransaction = transaction.filter(data => {
        
        return data.userId === CheckLogin.user
    })
}


console.log(userTransaction);


    return (
        <>
            <NavBar/>
            <table className={styles.table}>
                <tr>
                <th>#</th>
                <th className={styles.th2}>Hotel</th>
                <th className={styles.th3}>Room</th>
                <th className={styles.th4}>Date</th>
                <th className={styles.th5}>Price</th>
                <th className={styles.th6}>Payment Method</th>
                <th className={styles.th7}>Status</th>
                </tr>
                {userTransaction && userTransaction.map((data,index) => (
                  <tr>
                    <td>{index+1}</td>
                    <td>{data.hotel}</td>
                    <td>{data.rooms.map(room => room + " ")}</td>
                    <td>{data.dateStart.slice(0,10)}-{data.dateEnd.slice(0,10)}</td>
                    <td>${data.price}</td>
                    <td>{data.payment}</td>
                    <td className={data.status === 'Booked' ? styles.booked : data.status === "Check In" ? styles.checkIn : styles.checkOut}>{data.status}</td>
                  </tr>
                ))}
    
            </table>
        </>
    )
}