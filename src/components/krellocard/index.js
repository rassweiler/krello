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
		const [textHeight, setTextHeight] = useState("");
		const onDelete = () => {
			dispatch(removeCard(boardId, listId, cardId));
		};
		const onBlur = () => {
			setEditing(false);
			dispatch(editCard(cardText, boardId, listId, cardId));
		};
		const onFocus = event => {
			if (textHeight === "") {
				event.target.style.height = event.target.scrollHeight + "px";
				setTextHeight(event.target.scrollHeight + "px");
			} else {
				event.target.style.height = textHeight;
			}
		};
		const handleChange = event => {
			const height = event.target.scrollHeight + "px";
			event.target.style.height = height;
			setCardText(event.target.value);
			setTextHeight(height);
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
						onFocus={onFocus}
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
							<textarea
								type="text"
								className="krello-card-text"
								test-data="card-text"
								onClick={() => setEditing(true)}
								value={text}
								readOnly
								onFocus={onFocus}
								autoFocus
							/>
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
