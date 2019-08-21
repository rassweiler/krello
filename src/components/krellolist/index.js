import React, { Component, useState } from "react";
import "./styles.scss";
import KrelloCard from "../krellocard";
import KrelloAddButton from "../krelloaddbutton/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { removeList, editList } from "../../actions";

const KrelloList = ({ title, boardId, listId, cards, index, dispatch }) => {
	const [listTitle, setListTitle] = useState(title);
	const [editing, setEditing] = useState(false);

	const onDelete = () => {
		dispatch(removeList(boardId, listId));
	};
	const onBlur = () => {
		setEditing(false);
		dispatch(editList(listTitle, boardId, listId));
	};
	const onChange = event => {
		setListTitle(event.target.value);
	};
	const renderEditForm = () => {
		return (
			<div className="krello-list-title">
				<input
					type="text"
					autoFocus
					value={listTitle}
					onChange={onChange}
					onBlur={onBlur}
				/>
			</div>
		);
	};

	return (
		<Draggable draggableId={String(listId)} index={index}>
			{provided => (
				<section
					className="krello-list"
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{editing ? (
						renderEditForm()
					) : (
						<div className="krello-list-title">
							<div
								className="krello-list-title-text"
								onClick={() => setEditing(true)}
							>
								{title}
							</div>
							<FontAwesomeIcon
								icon={faTrash}
								className="krello-list-title-delete"
								onClick={onDelete}
							/>
						</div>
					)}

					<Droppable droppableId={String(listId)} type="card">
						{provided => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								className="krello-list-cards"
							>
								{cards.map((card, index) => (
									<KrelloCard
										key={card.id}
										cardId={card.id}
										index={index}
										text={card.text}
										boardId={boardId}
										listId={listId}
									/>
								))}
								{provided.placeholder}
								<KrelloAddButton boardId={boardId} listId={listId} />
							</div>
						)}
					</Droppable>
				</section>
			)}
		</Draggable>
	);
};

export default connect()(KrelloList);
