import "./app.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./components/navbar/";
import KrelloAddButton from "./components/krelloaddbutton/";
import KrelloBoard from "./components/krelloboard/";
import boardReducer from "./reducers/boardReducer";

class App extends Component {
	render() {
		console.log("Props:", this.props);
		const { boards } = this.props;
		return (
			<>
				<Navbar />
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
			</>
		);
	}
}

const mapStateToProps = state => ({
	boards: state.boards
});

export default connect(mapStateToProps)(App);
