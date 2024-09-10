import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import styles from "./Detail.module.css"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { createPortal } from "react-dom";
import { useFetch } from "../../Hook/Fetch";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RoomPriceAction } from "../../redux/RoomPrice";



export const Modal = forwardRef(function Modal({},ref) {
      const dialog = useRef();
      const { HotelId } = useParams();  
      const [number, setNumber] = useState([]);
      const RoomCost = useSelector(state => state.price.price);
      const dispatch = useDispatch();
      
      const user = JSON.parse(localStorage.getItem('user'));
      const value = useFetch('http://localhost:3100/booking/hotel/' + HotelId);
  
      const [state, setState] = useState([
        {
          endDate: new Date(),
          startDate: new Date(),
          key: 'selection'
        }
      ]);
      const DataBooking = useFetch('http://localhost:3100/booking/checkdate', state);
      
      let dayCount = (Number(state[0].endDate.getDate()) -  Number(state[0].startDate.getDate()));

      let RoomUnAvailable;

      const DateCheck = (item) => {
        setState([item.selection]);   

        if(DataBooking) {   
          const AvailableStatus = DataBooking.filter(data => {
            return data.status !== "Check Out"
          }) 
          console.log(AvailableStatus);
          
          RoomUnAvailable = AvailableStatus.filter(date => {
            return new Date(date.dateStart).getTime() > new Date(state[0].endDate).getTime() || new Date(date.dateStart).getTime() < new Date(state[0].startDate).getTime()
            
          })
        }
          const numberArr = RoomUnAvailable.map(data => data.rooms);
          const numberData = numberArr.map(data => data.concat(data));
          setNumber(numberData[0]);
          

      }
   
      const Reserve = (e) => {
        e.preventDefault();
        alert('Booked!');
        const FromData = new FormData(e.target);
        const data = Object.fromEntries(FromData.entries());
        const acquisitionChoice = FromData.getAll('room');
        let RoomBooked
        if(value) {
           RoomBooked = {
            hotel: value.title,
            name: data.name,
            email: data.email,
            phone: data.phoneNumber,
            id: data.ID,
            room: acquisitionChoice,
            price: dayCount * RoomCost,
            payment: data.payment,
            startDay: state[0].startDate,
            endDay: state[0].endDate,
            userId: user.user
          }
        }
        fetch('http://localhost:3100/booking/hotel/' + HotelId, {
          method: "POST",
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(RoomBooked)
        })

      }
      
     

      
      

      useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
      })
      return (
        createPortal( 
        <dialog className={styles.modal} ref={dialog} method="dialog">
              { value && 
              <>
               <button className={styles.close} onClick={()=>dialog.current.close()}>X</button>
               <h1>{value.title}</h1> 
               <p>{value.desc}</p> 
               <form onSubmit={Reserve}>
               <body>
                    <div>
                        <h3>Dates</h3>
                        <DateRange
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            minDate={new Date()}
                            onChange={DateCheck}
                            ranges={state}
                        />
                    </div>
                    <div>
                        <h3>Reserve Info</h3>
                        <div className={styles.info}>
                            <label htmlFor="name">Your Name:</label>
                            <input  type="text" name="name" required placeholder="Full Name" ></input> 
                            <label htmlFor="email">Your Email:</label>
                            <input  type="text" name="email" required placeholder="Email" ></input> 
                            <label htmlFor="phoneNumber">Your Phone Number:</label>
                            <input  type="text" name="phoneNumber" required placeholder="Phone Number" ></input> 
                            <label htmlFor="ID">Your ID Cart Number:</label>
                            <input  type="text" name="ID" required placeholder="ID Cart Number" ></input> 
                        </div>
                    </div>
               </body> 
               <body>
                    <div>
                        <h3>Select Rooms</h3>
                        {value.rooms.map(room => (
                            <div className={styles.room} id={room._id}>
                            <h4>{room.title}</h4>
                            <div className={styles.roomNumber}>
                                <p>Pay nothing until Check In!</p>
                                {room.roomNumbers.map(data => (
                                <div>     
                                    <label htmlFor="room">{data.Number}</label>
                                    <input onClick={() => {dispatch(RoomPriceAction.setPrice({room: data.Number, price: data.price}))}}  
                                           type="checkbox" 
                                           name="room" 
                                           value={data.Number} 
                                           disabled={number?.includes(data.Number) ? true : false}></input>
                                </div>
                                ))}
                            </div>
                            <p>Max People: {room.maxPeople}</p>
                            <p>${room.price} 1 night</p>
                            </div>
                        ))}
                    </div>
                    <div>

                    </div>
               </body> 
               <h2>Total Bill: ${dayCount * RoomCost}</h2> 
               <select name="payment" className={styles.select}>
                 <option value="unChoose">Select Payment Method</option>
                 <option value="Cash">Cash</option>
                 <option value="Credit Cart">Credit Cart</option>
               </select>
               <body>
                    <div>

                    </div>
                    <button type="submit" className={styles.bookbuton}>Reserve Now</button>
               </body> 
               </form>   
              </> 
              }
        </dialog>,document.getElementById("modal")
      )
    )
})
