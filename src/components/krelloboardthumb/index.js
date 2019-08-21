import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { removeBoard } from "../../actions";

const KrelloBoardThumb = React.memo(({ title, id, index, dispatch }) => {
	const onRemove = () => {
		dispatch(removeBoard(id));
	};
	return (
		<div className="krello-board-tumbnail">
			<Link key={id} to={`/${id}`} className="krello-board-thumbnail-link">
				<div className="krello-board-thumbnail-title">{title}</div>
			</Link>
			<FontAwesomeIcon
				icon={faTrash}
				className="krello-board-thumbnail-delete"
				onClick={onRemove}
			/>
		</div>
	);
});

export default connect()(KrelloBoardThumb);
