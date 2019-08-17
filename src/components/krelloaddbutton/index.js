import React, { Component } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { addBoard, addList, addCard } from "../../actions";

class KrelloAddButton extends Component {
	state = {
		formOpen: false,
		text: "",
		height: "50px"
	};
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
	clearForm = () => {
		this.setState({
			formOpen: false,
			text: "",
			height: "50px"
		});
	};
	handleInput = e => {
		const height = e.target.scrollHeight + "px";
		e.target.style.height = height;
		this.setState({
			text: e.target.value,
			height: height
		});
	};
	handleAddBoard = () => {
		console.log("Add Board");
		const { dispatch } = this.props;
		const { text } = this.state;
		if (text) {
			dispatch(addBoard(text));
			this.clearForm();
		}
	};
	handleAddList = () => {
		console.log("Add List");
		const { dispatch, board } = this.props;
		const { text } = this.state;
		if (text) {
			dispatch(addList(text, board));
			this.clearForm();
		}
	};
	handleAddCard = () => {
		console.log("Add Card");
		const { dispatch, board, list } = this.props;
		const { text } = this.state;
		if (text) {
			dispatch(addCard(text, board, list));
			this.clearForm();
		}
		return;
	};
	renderButton = () => {
		const { boards, lists } = this.props;
		const text = boards ? "Add Board" : lists ? "Add List" : "Add Card";
		const className = boards
			? "krello-board-add"
			: lists
			? "krello-board-lists-add"
			: "krello-list-add";

		return (
			<div className={className} onClick={this.openForm}>
				<FontAwesomeIcon icon={faPlus} />
				<p>{text}</p>
			</div>
		);
	};
	renderForm = () => {
		const { boards, lists } = this.props;
		const buttonText = boards ? "Add Board" : lists ? "Add List" : "Add Card";
		const text = boards
			? "Enter Board Title"
			: lists
			? "Enter List Title"
			: "Enter Card Title";
		const className = boards
			? "krello-board-add open"
			: lists
			? "krello-board-lists-add open"
			: "krello-list-add open";
		const func = boards
			? this.handleAddBoard
			: lists
			? this.handleAddList
			: this.handleAddCard;

		return (
			<div className={className}>
				<textarea
					placeholder={text}
					autoFocus
					value={this.state.text}
					onChange={this.handleInput}
					style={{ height: this.state.height }}
					onBlur={this.closeForm}
				/>
				<div className="menu">
					<button onMouseDown={func}>{buttonText}</button>
					<div className="close-form" onMouseDown={this.clearForm}>
						<FontAwesomeIcon icon={faWindowClose} />
					</div>
				</div>
			</div>
		);
	};
	render() {
		return this.state.formOpen ? this.renderForm() : this.renderButton();
	}
}

export default connect()(KrelloAddButton);
