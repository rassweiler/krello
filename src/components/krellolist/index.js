import React, { Component } from "react";
import "./styles.scss";
import KrelloCard from "../krellocard";
import KrelloAddButton from "../krelloaddbutton/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Droppable } from "react-beautiful-dnd";

class KrelloList extends Component {
	state = {};
	render() {
		return (
			<Droppable droppableId={String(this.props.list)}>
				{provided => (
					<section
						{...provided.droppableProps}
						ref={provided.innerRef}
						className="krello-list"
					>
						<div className="krello-list-title">
							{this.props.title}
							<FontAwesomeIcon
								icon={faTrash}
								className="krello-list-title-delete"
							/>
						</div>
						<div className="krello-list-cards">
							{this.props.cards.map((card, index) => (
								<KrelloCard
									key={card.id}
									id={card.id}
									index={index}
									text={card.text}
									board={this.props.board}
									list={this.props.list}
								/>
							))}
						</div>
						<KrelloAddButton board={this.props.board} list={this.props.list} />
						{provided.placeholder}
					</section>
				)}
			</Droppable>
		);
	}
}

export default KrelloList;
