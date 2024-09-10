import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Hotel.module.css"
import { useFetch } from "../../../../Frontend/src/Hook/Fetch"
export function RestoreHotel() {
    const hotelData = useFetch('http://localhost:3100/admin/hotel-trash');
    return (
        <>  
            <div className={style.list}>
                    <h1 className={style.h1}>Hotel Deleted List</h1>
                    {/* <button onClick={() => navigate('/home/new-hotel')} className={style.add}>Add New</button> */}
                </div>
                <table className={style.table}>
                    <tr>
                    <th><FontAwesomeIcon icon={faSquare}/></th>
                    <th className={style.th2}>ID</th>
                    <th className={style.th2}>Name</th>
                    <th className={style.th2}>Type</th>
                    <th className={style.th2}>Title</th>
                    <th className={style.th2}>City</th>
                    <th className={style.th2}>Action</th>
                    </tr>
                {hotelData && hotelData.map((data) => (
                  <tr key={data._id}>
                    <td><FontAwesomeIcon icon={faSquare}/></td>
                    <td>{data._id}</td>
                    <td>{data.name}</td>
                    <td>{data.type}</td>
                    <td>{data.title}</td>
                    <td>{data.city}</td>
                    <td>
                    <button onClick={() =>  {
                                            if(confirm("are you suer?")){

                                            fetch('http://localhost:3100/admin/delete-hotel-force', {
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
                    <button onClick={() =>  {

                                            fetch('http://localhost:3100/admin/hotel-restore', {
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