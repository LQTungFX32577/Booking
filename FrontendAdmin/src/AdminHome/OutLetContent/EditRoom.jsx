import { useParams } from 'react-router-dom';
import { useFetch } from "../../../../Frontend/src/Hook/Fetch"
import style from './NewRoom.module.css'
import {  useState } from 'react';

export function EditRoom() {
    const { roomId } = useParams();
    const Room = useFetch('http://localhost:3100/admin/editRoom/'+ roomId);

    const [state, setState] = useState();

    
    
    
    function submitHandle(e){
        e.preventDefault();
        const FromData = new FormData(e.target);
        const roomlist = FromData.get('room').split(",");
        
        const data = {
          title: FromData.get('title'),
          description: FromData.get('description'),
          price: FromData.get('price'),
          maxPeople: FromData.get('maxPeople'),
          roomNumbers: roomlist.map(data => ({
                        Number: data,
                        price: FromData.get('price'),
                        available: true
          }))
        }
        console.log(data);
        fetch('http://localhost:3100/admin/editRoom/'+roomId, {
          method: "POST",
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify(data)
         })
        alert('Room Updated!');
      }
        return (
            <>
                 <div className={style.container}>
                 <h1 className={style.h1}>Add New Room</h1>
                
                    <>
                        {Room && <form onSubmit={submitHandle} key={Room._id} className={style.form}>
                        <div className={style.topForm}>
                            <div className={style.leftForm}>
                                <label htmlFor='title'>Title</label>
                                <input onClick={() => setState(Room)} 
                                       onChange={(e)=> setState(state.title = e.target.value)} 
                                       value={state?.title} 
                                       name='title'
                                       placeholder={Room.title}
                                       required ></input>
                                <label htmlFor='price'>Price</label>
                                <input onClick={() => setState(Room)} 
                                       onChange={(e)=> setState(state.price = e.target.value)} 
                                       name='price'
                                       type='number'
                                       value={state?.price} 
                                       placeholder={Room.price}
                                       required ></input>
                            </div>
                            <div className={style.rightForm}>
                                <label htmlFor='description'>Description</label>
                                <input name='description'
                                       onClick={() => setState(Room)} 
                                       onChange={(e)=> setState(state.desc = e.target.value)} 
                                       value={state?.desc}  placeholder={Room.desc} required></input>
                                <label htmlFor='maxPeople'> Max People</label>
                                <input name='maxPeople'
                                       type='number'
                                       onClick={() => setState(Room)} 
                                       onChange={(e)=> setState(state.maxPeople = e.target.value)} 
                                       value={state?.maxPeople}  placeholder={Room.maxPeople} required></input>
                            </div>
                        </div>
                        <div className={style.botForm}>
                        <span>
                            <label htmlFor='room'>Rooms</label>
                            <input name='room' required placeholder={String(Room.roomNumbers.map(data => data.Number))}></input>
                        </span>
                            <button type='submit' className={style.button}>Send</button>
                        </div>
                        </form>}
                    </>  
                 
                </div>
            </>
        )
    }