import React from "react";

import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Subscribe from "./Subscribe/Subscribe"
import Footer from "./Footer/Footer";
import { Provider } from "react-redux"
import { store } from "../../../redux/store";

const Home = (props) => {
	return (
		<Provider store={store}>
		<div >
			<div>
				<NavBar/>
			</div>
			<div>
				<Header/>
			</div>
			<div>
				<Content/>
			</div>
			<div>
				<Subscribe/>
			</div>
			<div>
                <Footer/>
			</div>
		</div>
		</Provider>
	);
};

export default Home;
