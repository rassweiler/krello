import React, { Component } from "react";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faPortrait } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { viewBoard } from "../actions";

class Navbar extends Component {
	viewBoard = () => {
		const { dispatch } = this.props;
		dispatch(viewBoard(-1));
	};
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="/">
					<img src={logo} alt="" />
					KRello
				</a>
				<div className="navbar-menu">
					<ul className="navbar-menu-list">
						<li className="navbar-menu-list-item">
							<a onClick={this.viewBoard}>
								<FontAwesomeIcon
									icon={faClipboardList}
									className="krello-card-menu-item"
								/>
								Boards
							</a>
						</li>
						<li className="navbar-menu-list-item">
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

export default connect()(Navbar);
