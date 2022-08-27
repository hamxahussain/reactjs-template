/**
 * Layout
 * @module 🔗:src/components/utility/Layout.js
 *
 * @author Hamza Hussain <hamza.xeros@gmail.com>
 * @copyright Hamza Hussain 2022
 * @version 0.2.0
 * @description Main Layout
 *
 */

import React from "react";

import { PublicRoutes } from "../../../routes";
import TabBar from "./TabBar/TabBar";
import TopBar from "./TopBar/TopBar";

const Layout = (props) => {
	return (
		<div>
			<TopBar />
			<div>
				<PublicRoutes />
			</div>
			<TabBar />
		</div>
	);
};

export default Layout;
