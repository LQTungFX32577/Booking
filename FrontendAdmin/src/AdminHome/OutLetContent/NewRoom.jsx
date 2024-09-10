import style from './NewRoom.module.css'

export function NewRoom() {

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
    fetch('http://localhost:3100/admin/new-room', {
      method: "POST",
      headers: {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(data)
     })
    alert('Room Created!');
  }
    return (
        <>
             <div className={style.container}>
            <h1 className={style.h1}>Add New Room</h1>
            <form onSubmit={submitHandle} className={style.form}>
              <div className={style.topForm}>
                <div className={style.leftForm}>
                    <label htmlFor='title'>Title</label>
                    <input name='title' required></input>
                    <label htmlFor='price'>Price</label>
                    <input name='price' required></input>
                </div>
                <div className={style.rightForm}>
                    <label htmlFor='description'>Description</label>
                    <input name='description' required></input>
                    <label htmlFor='maxPeople'> Max People</label>
                    <input name='maxPeople' required></input>
                </div>
              </div>
              <div className={style.botForm}>
              <span>
                <label htmlFor='room'>Rooms</label>
                <input name='room' required></input>
              </span>
                <button type='submit' className={style.button}>Send</button>
              </div>
            </form>
            </div>
        </>
    )
}