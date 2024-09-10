import { useParams } from "react-router-dom";
import { useFetch } from "../../../../Frontend/src/Hook/Fetch"
import style from "./NewHotel.module.css"
import { useState } from "react";

export function EditHotel() {
    const { hotelId } = useParams();
    const Room = useFetch('http://localhost:3100/admin/room');
    const hotel = useFetch('http://localhost:3100/admin/editHotel/'+ hotelId );
    const [state, setState] = useState();

    function handleSubmit(e) {
       e.preventDefault();
       const FromData = new FormData(e.target);
       const data = {
        name: FromData.get('name'),
        city: FromData.get('city'),
        distance: FromData.get('distance'),
        description: FromData.get('description'),
        image: FromData.get('image'),
        type: FromData.get('type'),
        address: FromData.get('address'),
        title: FromData.get('title'),
        price: FromData.get('price'),
        rate: FromData.get('rate'),
        featured: FromData.get('featured'),
        room: FromData.getAll('room')
       }
       
       fetch('http://localhost:3100/admin//editHotel/'+ hotelId, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
       })
       alert('Hotel Updated!')
    }
    return (
        <>
        <div onSubmit={handleSubmit} className={style.container}>
            <h1 className={style.h1}>Add New Hotel</h1>
            {hotel && <form className={style.form}>
                <div className={style.input}>
                    <div className={style.leftInput}>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text"
                                       onClick={() => setState(hotel)} 
                                       onChange={(e)=> setState(state.name = e.target.value)} 
                                       value={state?.name}  placeholder={hotel.name} required></input>
                    <label htmlFor="city">City</label>
                    <input name="city" type="text"
                                       onClick={() => setState(hotel)} 
                                       onChange={(e)=> setState(state.city = e.target.value)} 
                                       value={state?.city} placeholder={hotel.city} required></input>
                    <label htmlFor="distance">Distance</label>
                    <input name="distance" type="number"
                                       onClick={() => setState(hotel)} 
                                       onChange={(e)=> setState(state.distance = e.target.value)} 
                                       value={state?.distance} placeholder={hotel.distance} required></input>
                    <label htmlFor="description">Description</label>
                    <input name="description" type="text"
                                       onClick={() => setState(hotel)} 
                                       onChange={(e)=> setState(state.desc = e.target.value)} 
                                       value={state?.desc} placeholder={hotel.desc} required></input>
                    <label htmlFor="image">Images</label>
                    <textarea style={{border: "1px solid black", height:"100px"}} name="image" type="url"
                    //  onClick={() => setState(hotel)} 
                    //                    onChange={(e)=> setState(state.photos = hotel.photos.map(data => [...data,e.target.value]))} 
                    //                    value={String(state?.photos.map(data => data))}
                     value={String(hotel.photos.map(data => data))}  required></textarea>
                    </div>
                    <div className={style.rightInput}>
                    <label htmlFor="type">Type</label>
                    <input name="type" type="text"
                                       onClick={() => setState(hotel)} 
                                       onChange={(e)=> setState(state.type = e.target.value)} 
                                       value={state?.type} placeholder={hotel.type} required></input>
                    <label htmlFor="address">Address</label>
                    <input name="address" type="text"
                                       onClick={() => setState(hotel)} 
                                       onChange={(e)=> setState(state.address = e.target.value)} 
                                       value={state?.address} placeholder={hotel.address} required></input>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text"
                                       onClick={() => setState(hotel)} 
                                       onChange={(e)=> setState(state.title = e.target.value)} 
                                       value={state?.title} placeholder={hotel.title} required></input>
                    <label htmlFor="price">Price</label>
                    <input name="price" type="number"
                                       onClick={() => setState(hotel)} 
                                       onChange={(e)=> setState(state.cheapestPrice = e.target.value)} 
                                       value={state?.cheapestPrice} placeholder={hotel.cheapestPrice} required></input>
                    <label htmlFor="rate">Rated</label>
                    <input name="rate" type="number"
                                       onClick={() => setState(hotel)} 
                                       onChange={(e)=> setState(state.rating = e.target.value)} 
                                       value={state?.rating} placeholder={hotel.rating} required></input>
                    <label  style={{marginTop:"40px"}} htmlFor="featured">Featured</label>
                    <select style={{marginTop:"10px", width:"50px"}} name="featured">
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                    </select>
                    </div>
                </div>
                <div className={style.room}>
                    <label htmlFor="room">Rooms</label>
                    <select name="room" required multiple>
                        {Room.map(data => (
                            <option key={data._id} value={data._id}>{data.title}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className={style.button}>Send</button>
            </form>}
        </div>
        </>
    )
}