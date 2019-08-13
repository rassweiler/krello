import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

class KrelloCard extends Component {
	render() {
		return (
			<div className="krello-card">
				<p className="krello-card-text">{this.props.text}</p>
				<div className="krello-card-menu">
					<FontAwesomeIcon icon={faTrash} className="krello-card-menu-item" />
					<FontAwesomeIcon
						icon={faInfoCircle}
						className="krello-card-menu-item"
					/>
				</div>
			</div>
		);
	}
}

export default KrelloCard;
