import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { activeBoard, sortBoard, editBoard } from "../../actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import KrelloList from "../krellolist";
import KrelloAddButton from "../krelloaddbutton";
import {useParams, useNavigate} from 'react-router-dom'

class KrelloBoard extends Component {
	state = {
		formOpen: false,
		boardTitle: ""
	};
	componentDidMount() {
		const { boardId } = this.props.match.params;
		this.props.dispatch(activeBoard(boardId));
	}
	openForm = () => {
		this.setState({
			formOpen: true
		});
	};
	closeForm = () => {
		this.setState({
			formOpen: false
		});
	};
	onDragEnd = result => {
		const { destination, source, draggableId, type } = result;
		const { boardId } = this.props.match.params;
		if (!destination) {
			return;
		}
		this.props.dispatch(
			sortBoard(
				source.droppableId,
				destination.droppableId,
				source.index,
				destination.index,
				draggableId,
				type,
				boardId
			)
		);
	};
	onChange = event => {
		const { boardId } = this.props.match.params;
		this.props.dispatch(editBoard(event.target.value, boardId));
	};
	renderEditForm = title => {
		return (
			<input
				type="text"
				autoFocus
				value={title}
				onChange={this.onChange}
				onBlur={this.closeForm}
			/>
		);
	};
	render() {
		const { boards, lists, cards, match } = this.props;
		const { boardId } = match.params;
		const board = boards[boardId];
		if (!board) {
			return (
				<div className="error-container">
					Error 404: Woah champ, that board ain't around anymore!
				</div>
			);
		}
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div className="krello-board">
					<div className="krello-board-title" onClick={this.openForm}>
						{this.state.formOpen
							? this.renderEditForm(board.title)
							: board.title}
					</div>
					<Droppable droppableId="all-lists" direction="horizontal" type="list">
						{provided => (
							<div className="krello-board-lists" ref={provided.innerRef}>
								{board.lists.map((listId, index) => {
									const list = lists[listId];
									if (list) {
										return (
											<KrelloList
												key={list.id}
												boardId={boardId}
												listId={list.id}
												title={list.title}
												cards={list.cards.map(cardId => cards[cardId])}
												listIndex={index}
											/>
										);
									}
									return null;
								})}
								{provided.placeholder}
								<KrelloAddButton list boardId={boardId} />
							</div>
						)}
					</Droppable>
				</div>
			</DragDropContext>
		);
	}
}

const mapStateToProps = state => ({
	boards: state.boards,
	lists: state.lists,
	cards: state.cards
});

const withRouter = WrappedComponent => props => {
	const params = useParams();
	const navigate = useNavigate();

	return (
		 <WrappedComponent
			  {...props}
			  params={params}
			  navigate={navigate}
		 />
	);
};

export default withRouter(connect(mapStateToProps)(KrelloBoard));
