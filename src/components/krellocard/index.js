import React, { Component } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";

class KrelloCard extends Component {
	render() {
		return (
			<Draggable draggableId={String(this.props.id)} index={this.props.index}>
				{provided => (
					<div
						ref={provided.innerRef}
						{...provided.draggleProps}
						{...provided.dragHandleProps}
						className="krello-card"
						test-data="card-container"
					>
						<p className="krello-card-text" test-data="card-text">
							{this.props.text}
						</p>
						<div className="krello-card-menu" test-data="card-menu">
							<FontAwesomeIcon
								icon={faTrash}
								className="krello-card-menu-item"
							/>
							<FontAwesomeIcon
								icon={faInfoCircle}
								className="krello-card-menu-item"
							/>
						</div>
					</div>
				)}
			</Draggable>
		);
	}
}

export default KrelloCard;
