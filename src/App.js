import "./app.scss";
import React, { Component } from "react";
import Routes from "./routes";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import Navbar from "./components/navbar/";
import KrelloAddButton from "./components/krelloaddbutton/";
import KrelloBoard from "./components/krelloboard/";
import { sortList } from "./actions";

class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Routes />
			</>
		);
	}
}

export default App;

/*
class App extends Component {
	onDragEnd = result => {
		const { destination, source, draggableId } = result;
		if (!destination) {
			return;
		}
		this.props.dispatch(sortList(
			source.droppableId,
			destination.droppableId,
			source.index,
			destination.index,
			draggableId
		))
	};
	render() {
		console.log("Props:", this.props);
		const { boards } = this.props;
		return (
			<>
				<Navbar />
				<DragDropContext onDragEnd={this.onDragEnd}>
					{boards.display === -1 ? (
						<div className="krello-title">
							Board List (No Backend On Portfolio Hosted Version)
						</div>
					) : null}
					<div className="krello-boards">
						{boards.display > -1
							? boards.boards.map(board =>
									board.id === boards.display ? (
										<KrelloBoard
											key={board.id}
											board={board.id}
											title={board.title}
											lists={board.lists}
										/>
									) : null
							  )
							: boards.boards.map(board => (
									<KrelloBoard
										key={board.id}
										board={board.id}
										title={board.title}
									/>
							  ))}
						{boards.display === -1 ? <KrelloAddButton boards /> : null}
					</div>
				</DragDropContext>
			</>
		);
	}
}

const mapStateToProps = state => ({
	boards: state.boards
});

export default connect(mapStateToProps)(App);
*/
