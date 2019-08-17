import React, { Component } from "react";
import "./styles.scss";
import KrelloCard from "../krellocard";
import KrelloAddButton from "../krelloaddbutton/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class KrelloList extends Component {
	state = {};
	render() {
		return (
			<section className="krello-list">
				<div className="krello-list-title">
					{this.props.title}
					<FontAwesomeIcon
						icon={faTrash}
						className="krello-list-title-delete"
					/>
				</div>
				<div className="krello-list-cards">
					{this.props.cards.map(card => (
						<KrelloCard
							key={card.id}
							text={card.text}
							board={this.props.board}
							list={this.props.list}
						/>
					))}
				</div>
				<KrelloAddButton board={this.props.board} list={this.props.list} />
			</section>
		);
	}
}

export default KrelloList;
