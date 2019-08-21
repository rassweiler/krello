import React, { PureComponent } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { addList, addCard } from "../../actions";

class KrelloAddButton extends PureComponent {
	state = {
		formOpen: false,
		text: "",
		height: "30px"
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
			height: "30px"
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
	handleAddList = () => {
		const { dispatch, boardId } = this.props;
		const { text } = this.state;
		if (text) {
			dispatch(addList(text, boardId));
			this.clearForm();
		}
	};
	handleAddCard = () => {
		const { dispatch, listId } = this.props;
		const { text } = this.state;
		if (text) {
			dispatch(addCard(text, listId));
			this.clearForm();
		}
		return;
	};
	renderButton = () => {
		const { list } = this.props;
		const text = list ? "Add List" : "Add Card";
		const className = list ? "krello-board-lists-add" : "krello-list-add";

		return (
			<div className={className} onClick={this.openForm}>
				<FontAwesomeIcon icon={faPlus} />
				<p>{text}</p>
			</div>
		);
	};
	renderForm = () => {
		const { list } = this.props;
		const buttonText = list ? "Add List" : "Add Card";
		const text = list ? "Enter List Title" : "Enter Card Title";
		const className = list
			? "krello-board-lists-add open"
			: "krello-list-add open";
		const func = list ? this.handleAddList : this.handleAddCard;

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
