import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Room.module.css"
import { useFetch } from "../../../../Frontend/src/Hook/Fetch"

export function RestoreRoom() {

    const roomData = useFetch('http://localhost:3100/admin/room-trash');
    return (
        <>      <div className={style.list}>
                    <h1 className={style.h1}>Room Deleted List</h1>
                    {/* <button onClick={() => navigate('/home/new-room')} className={style.add}>Add New</button> */}
                </div>
                <table className={style.table}>
                    <tr>
                    <th><FontAwesomeIcon icon={faSquare}/></th>
                    <th className={style.th1}>ID</th>
                    <th className={style.th1}>Title</th>
                    <th className={style.th2}>Description</th>
                    <th className={style.th3}>Price</th>
                    <th className={style.th4}>Max People</th>
                    <th>Action</th>
                    </tr>
                {roomData && roomData.map((data) => (
                  <tr key={data._id}>
                    <td><FontAwesomeIcon icon={faSquare}/></td>
                    <td>{data._id}</td>
                    <td>{data.title}</td>
                    <td>{data.desc}</td>
                    <td>{data.price}$</td>
                    <td>{data.maxPeople} People</td>
                    <td>
                    <button onClick={() =>  {
                                            if(confirm("are you suer?")){

                                            fetch('http://localhost:3100/admin/delete-room-force', {
                                            method: "DELETE",
                                            headers: {
                                                "Content-Type" : "application/json"
                                            },
                                            body: JSON.stringify({id: data._id})
                                        }) 
                                            window.location.reload();
                                            }
                                    }}
                    className={style.buttonDelete}>Delete
                        
                    </button>
                    <button  onClick={() =>  {
                                            

                                            fetch('http://localhost:3100/admin/room-restore', {
                                            method: "PATCH",
                                            headers: {
                                                "Content-Type" : "application/json"
                                            },
                                            body: JSON.stringify({id: data._id})
                                        }) 
                                            window.location.reload();
                                            
                                    }} className={style.buttonEdit}>Restore</button>
                    </td>
                  </tr>
                ))}
    
            </table>
        </>
    )
}