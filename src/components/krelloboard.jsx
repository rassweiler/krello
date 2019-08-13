import React, { Component } from "react";
import KrelloList from "./krellolist";
import KrelloAddButton from "./krelloAddButton";
import { connect } from "react-redux";
import { viewBoard } from "../actions";

class KrelloBoard extends Component {
	viewCurrentBoard = () => {
		const { dispatch, board } = this.props;
		dispatch(viewBoard(board));
	};
	render() {
		return (
			<div
				className={this.props.lists ? "krello-board" : "krello-board list-item"}
				onMouseDown={this.props.lists ? null : this.viewCurrentBoard}
			>
				{this.props.lists ? (
					<div className="krello-board-title">{this.props.title}</div>
				) : (
					<div className="krello-board-title krello-board-list-item">
						{this.props.title}
					</div>
				)}
				<div className="krello-board-lists">
					{this.props.lists
						? this.props.lists.map(list => (
								<KrelloList
									key={list.id}
									list={list.id}
									title={list.title}
									cards={list.cards}
									board={this.props.board}
								/>
						  ))
						: null}
					<KrelloAddButton lists board={this.props.board} />
				</div>
			</div>
		);
	}
}

export default connect()(KrelloBoard);
