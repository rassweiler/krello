import React, { Component, useState } from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";
import { removeCard, editCard } from "../../actions";

const KrelloCard = React.memo(
	({ text, boardId, listId, cardId, index, dispatch }) => {
		const [editing, setEditing] = useState(false);
		const [cardText, setCardText] = useState(text);
		const [height, setHeight] = useState("50px");
		const onEdit = () => {};
		const onDelete = () => {
			dispatch(removeCard(boardId, listId, cardId));
		};
		const onBlur = () => {
			setEditing(false);
			dispatch(editCard(cardText, boardId, listId, cardId));
		};
		const handleChange = event => {
			const height = event.target.scrollHeight + "px";
			event.target.style.height = height;
			setCardText(event.target.value);
			setHeight(height);
		};
		const renderEditForm = () => {
			return (
				<div className="krello-card" test-data="card-edit-container">
					<textarea
						type="text"
						autoFocus
						value={cardText}
						onChange={handleChange}
						onBlur={onBlur}
					/>
				</div>
			);
		};
		const renderCard = () => {
			return (
				<Draggable draggableId={String(cardId)} index={index}>
					{provided => (
						<div
							ref={provided.innerRef}
							{...provided.draggleProps}
							{...provided.dragHandleProps}
							className="krello-card"
							test-data="card-container"
						>
							<p className="krello-card-text" test-data="card-text">
								{text}
							</p>
							<div className="krello-card-menu" test-data="card-menu">
								<FontAwesomeIcon
									icon={faTrash}
									className="krello-card-menu-item"
									onClick={onDelete}
								/>
								<FontAwesomeIcon
									icon={faEdit}
									className="krello-card-menu-item"
									onClick={() => setEditing(true)}
								/>
							</div>
						</div>
					)}
				</Draggable>
			);
		};
		return editing ? renderEditForm() : renderCard();
	}
);

export default connect()(KrelloCard);
