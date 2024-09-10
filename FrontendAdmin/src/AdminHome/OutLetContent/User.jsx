import { useFetch } from "../../../../Frontend/src/Hook/Fetch"
import style from "./DashBoard.module.css"
export function User() {
    const userData = useFetch('http://localhost:3100');
    return (
        <>
                <h1 className={style.h1}>All User</h1>
                <table className={style.table}>
                <tr>
                <th>#</th>
                <th className={style.th2}>ID</th>
                <th className={style.th2}>UserName</th>
                <th className={style.th2}>FullName</th>
                <th className={style.th3}>Email</th>
                <th className={style.th4}>Phone</th>
                <th className={style.th5}>isAdmin</th>
                <th className={style.th5}>Action</th>
                </tr>
                {userData && userData.map((data,index) => (
                  <tr key={data._id}>
                    <td>{index+1}</td>
                    <td>{data._id}</td>
                    <td>{data.username}</td>
                    <td>{data.fullName}</td>
                    <td>{data.email}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{String(data.isAdmin)}</td>
                    <td>{!data.isAdmin && <button  onClick={() =>  {
                                            if(confirm("are you suer?")){

                                            fetch('http://localhost:3100/admin/delete-user', {
                                              method: "POST",
                                              headers: {
                                                  "Content-Type" : "application/json"
                                              },
                                              body: JSON.stringify({id: data._id})
                                            }) 
                                              window.location.reload();
                                            }
                                           }} className={style.th9}>Delete</button>}</td>
                  </tr>
                ))}
    
            </table>
        </>
    )
}