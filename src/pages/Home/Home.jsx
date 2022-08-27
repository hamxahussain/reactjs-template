/**
 * Home
 * @module 🔗:src/pages/Home/Home.jsx
 * 
 * @author Hamza Hussain <hamza.xeros@gmail.com>
 * @copyright Hamza Hussain 2022
 * @version 0.0.1
 * @description Home Page
 * 
 */

 import React from "react";
 import { platform } from "../../utils";
 import { HomeIProps } from "./typedefs";
 import DesktopView from "./Home.Desktop";
 import MobileView from "./Home.Mobile";


 /**
 * @function
 * @version 0.0.1
 * @param {HomeIProps} props
 * @returns
 */
const Home = (props) => {
	const {} = props;

	//? Main Return
	return platform.isMobile ? <MobileView /> : <DesktopView />;
};

export default Home;
