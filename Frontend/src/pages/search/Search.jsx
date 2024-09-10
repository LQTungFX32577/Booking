import React from "react";

import SearchPopup from "./SearchPopup/SearchPopup";
import NavBar from "../home/HomeComponents/NavBar/NavBar"
import Subscribe from "../home/HomeComponents/Subscribe/Subscribe"
import Footer from "../home/HomeComponents/Footer/Footer"


const Search = (props) => { 
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <NavBar/>
      <div style={{display: 'flex', flexDirection: 'row'}}>
         <SearchPopup/>
      </div>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default Search;
