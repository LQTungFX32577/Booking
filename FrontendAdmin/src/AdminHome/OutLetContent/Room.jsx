import { faSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom"
import style from "./Room.module.css"
import { useFetch } from "../../../../Frontend/src/Hook/Fetch"

export function Room() {
    const navigate = useNavigate();
    const roomData = useFetch('http://localhost:3100/admin/room');
    return (
        <>      <div className={style.list}>
                    <h1 className={style.h1}>Room List</h1>
                    <button onClick={() => navigate('/home/new-room')} className={style.add}>Add New</button>
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

                                            fetch('http://localhost:3100/admin/delete-room', {
                                            method: "POST",
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
                    <button onClick={() => navigate(`/home/edit-room/${data._id}`)} className={style.buttonEdit}>Edit</button>
                    </td>
                  </tr>
                ))}
                    <NavLink style={{position:"absolute", right:"50px", fontSize:"25px", height:"100px"}} to='/home/room-restore'><FontAwesomeIcon icon={faTrashCan}/></NavLink>
    
            </table>
        </>
    )
}