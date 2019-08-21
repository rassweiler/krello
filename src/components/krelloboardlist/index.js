import React, { useState } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import KrelloBoardThumb from "../krelloboardthumb";
import { connect } from "react-redux";
import { addBoard, sortBoardList, removeBoard } from "../../actions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const KrelloBoardList = ({ boards, boardList, dispatch }) => {
	const [newBoardTitle, setNewBoardTitle] = useState("");
	const [showForm, setShowForm] = useState(false);

	const onChange = event => {
		setNewBoardTitle(event.target.value);
	};
	const onBlur = () => {
		setShowForm(false);
	};
	const onSubmit = event => {
		event.preventDefault();
		dispatch(addBoard(newBoardTitle));
		onClearForm();
	};
	const onClearForm = () => {
		setNewBoardTitle("");
		setShowForm(false);
	};
	const onDragEnd = result => {
		const { destination, source, draggableId, type } = result;

		if (!destination) {
			return;
		}

		dispatch(
			sortBoardList(
				source.droppableId,
				destination.droppableId,
				source.index,
				destination.index,
				draggableId,
				type
			)
		);
	};

	const renderForm = () => {
		return showForm ? (
			<form onSubmit={onSubmit} className="krello-boardlist-form">
				<h2>Create Board</h2>
				<input
					onChange={onChange}
					autoFocus
					value={newBoardTitle}
					placeholder="Board title..."
					type="text"
					onBlur={onBlur}
				/>
				<div className="krello-boardlist-form-menu">
					<button type="submit" onMouseDown={onSubmit}>
						Create Board
					</button>
					<div className="close-form" onMouseDown={onClearForm}>
						<FontAwesomeIcon icon={faWindowClose} />
					</div>
				</div>
			</form>
		) : (
			<div
				className="krello-boardlist-form"
				onClick={() => {
					setShowForm(true);
				}}
			>
				<h2>Create Board</h2>
			</div>
		);
	};

	const renderList = () => {
		return boardList.map((boardId, index) => {
			const board = boards[boardId];
			return (
				<Draggable draggableId={String(boardId)} index={index} key={boardId}>
					{provided => (
						<div
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							ref={provided.innerRef}
							index={index}
							key={boardId}
							className="krello-boardlist-boards-link"
						>
							<KrelloBoardThumb {...board} boardId={boardId} />
						</div>
					)}
				</Draggable>
			);
		});
	};
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="krello-boardlist">
				<div className="krello-boardlist-title">List Of Boards</div>
				<Droppable
					droppableId="all-boards"
					direction="vertical"
					type="board"
					isCombineEnabled
				>
					{provided => (
						<div
							className="krello-boardlist-boards"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{renderList()}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
				{renderForm()}
			</div>
		</DragDropContext>
	);
};

const mapStateToProps = state => ({
	boards: state.boards,
	boardList: state.boardList
});

export default connect(mapStateToProps)(KrelloBoardList);
