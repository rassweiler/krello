import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import KrelloBoard from "../components/krelloboard";
import KrelloBoardList from "../components/krelloboardlist";

const AppRouter = () => {
	return (
		<Router>
			<>
				<Route path="/" exact component={KrelloBoardList} />
				<Route path="/:boardId" component={KrelloBoard} />
			</>
		</Router>
	);
};

export default AppRouter;
