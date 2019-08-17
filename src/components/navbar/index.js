import React, { Component } from "react";
import "./styles.scss";
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faPortrait } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
	viewBoard = () => {
		//Routing logic
	};
	render() {
		return (
			<nav className="component-navbar" test-data="navbar-container">
				<a className="navbar-brand" href="/">
					<img
						test-data="navbar-image"
						src={logo}
						alt="Navbar branding image"
					/>
					KRello
				</a>
				<div className="navbar-menu">
					<ul className="navbar-menu-list" test-data="navbar-menu-list">
						<li className="navbar-menu-list-item" test-data="navbar-menu-item">
							<a onClick={this.viewBoard}>
								<FontAwesomeIcon
									icon={faClipboardList}
									className="krello-card-menu-item"
								/>
								Boards
							</a>
						</li>
						<li className="navbar-menu-list-item" test-data="navbar-menu-item">
							<a href="https://www.kylerassweiler.com">
								<FontAwesomeIcon
									icon={faPortrait}
									className="krello-card-menu-item"
								/>
								Portfolio
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
