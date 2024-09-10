import { useFetch } from "../../../../Frontend/src/Hook/Fetch"
import style from "./NewHotel.module.css"

export function NewHotel() {
    const Room = useFetch('http://localhost:3100/admin/room');

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
       
       fetch('http://localhost:3100/admin/new-hotel', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
       })
       alert('Hotel Created!')
    }
    return (
        <>
        <div onSubmit={handleSubmit} className={style.container}>
            <h1 className={style.h1}>Add New Hotel</h1>
            <form className={style.form}>
                <div className={style.input}>
                    <div className={style.leftInput}>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" required></input>
                    <label htmlFor="city">City</label>
                    <input name="city" type="text" required></input>
                    <label htmlFor="distance">Distance</label>
                    <input name="distance" type="number" required></input>
                    <label htmlFor="description">Description</label>
                    <input name="description" type="text" required></input>
                    <label htmlFor="image">Images</label>
                    <textarea style={{border: "1px solid black", height:"100px"}} name="image" type="url"  required></textarea>
                    </div>
                    <div className={style.rightInput}>
                    <label htmlFor="type">Type</label>
                    <input name="type" type="text" required></input>
                    <label htmlFor="address">Address</label>
                    <input name="address" type="text" required></input>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" required></input>
                    <label htmlFor="price">Price</label>
                    <input name="price" type="number" required></input>
                    <label htmlFor="rate">Rated</label>
                    <input name="rate" type="number" required></input>
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
                        {Room && Room.map(data => (
                            <option key={data._id} value={data._id}>{data.title}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className={style.button}>Send</button>
            </form>
        </div>
        </>
    )
}