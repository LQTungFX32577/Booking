import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBuilding,  faHouse,  faSignOut, faTable, faTruck, faUser } from '@fortawesome/free-solid-svg-icons'
import style from "./Home.module.css"

export function Layout() {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    function LogOut() {
        localStorage.removeItem('user');
        navigate('/');
    }
   useEffect(() => {
    if(!user) {
        navigate('/')
    }
   },[])
    return (
        <>
           <table className={style.table}>
            <th className={style.left}>Admin Page</th>
            <th></th>
            <tr>
                <td className={style.nav}>
                    <ul>MAIN
                        <li><NavLink to="/home"  className={({isActive}) => isActive ?  style.active : undefined } end><FontAwesomeIcon style={{color: "#643bff"}} icon={faTable}/> DashBoard</NavLink></li>
                    </ul>
                    <ul>LIST
                    <li><NavLink to="user"  className={({isActive}) => isActive ?  style.active : undefined }><FontAwesomeIcon style={{color: "#643bff"}} icon={faUser}/> Users</NavLink></li>
                    <li><NavLink to="hotel"  className={({isActive}) => isActive ?  style.active : undefined }><FontAwesomeIcon style={{color: "#643bff"}} icon={faBuilding}/> Hotels</NavLink></li>
                    <li><NavLink to="room"  className={({isActive}) => isActive ?  style.active : undefined }><FontAwesomeIcon style={{color: "#643bff"}} icon={faHouse}/> Rooms</NavLink></li>
                    <li><NavLink to="transaction"  className={({isActive}) => isActive ?  style.active : undefined }><FontAwesomeIcon style={{color: "#643bff"}} icon={faTruck}/> Transactions</NavLink></li>
                    </ul>
                    <ul>NEW
                    <li><NavLink to="new-hotel"  className={({isActive}) => isActive ?  style.active : undefined }><FontAwesomeIcon style={{color: "#643bff"}} icon={faBuilding}/> New Hotel</NavLink></li>
                    <li><NavLink to="new-room"  className={({isActive}) => isActive ?  style.active : undefined }><FontAwesomeIcon style={{color: "#643bff"}} icon={faHouse}/> New Room</NavLink></li></ul>
                    <ul>USER
                    <li><NavLink onClick={LogOut}><FontAwesomeIcon style={{color: "#643bff"}} icon={faSignOut}/> Log Out</NavLink></li>
                    </ul>
                </td>
                <td className={style.right}>
                    <Outlet/>
                </td>
            </tr>
           </table>
        </>
    )
}