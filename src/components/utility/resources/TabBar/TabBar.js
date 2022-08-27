/**
 * TabBar
 * @module 🔗:src/components/utility/resources/TabBar/TabBar.js
 *
 * @author Hamza Hussain <hamza.xeros@gmail.com>
 * @copyright Hamza Hussain 2022
 * @version 0.0.1
 * @description Tab bar
 *
 */

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * @type {Array<{
 * path: string,
 * title: string,
 * icon: React.ReactNode,
 * inactiveIcon: React.ReactNode
 * }>}
 */
const routing = [];

const TabBar = (props) => {
	//? States
	const [locationState, setLocationState] = useState("/");
	//? Refs

	//? Auto Runner

	//? Variables
	const location = useLocation();

	//? Functions
	const _isEqualToPath = (name) => {
		return locationState.includes(name);
	};

	//? Life Cycle

	//? Main Return
	return (
		<React.Fragment>
			<div className="tabbar-container">
				{routing.map((item, index) => (
					<Link
						to={item.path}
						onClick={() => setLocationState(item.path)}
						className={
							_isEqualToPath(item.path) ? "tabbar-active" : ""
						}
					>
						{_isEqualToPath(item.path)
							? item.icon
							: item.inactiveIcon}
						<p>{item.title}</p>
					</Link>
				))}
			</div>
		</React.Fragment>
	);
};

export default TabBar;
