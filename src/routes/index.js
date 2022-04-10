import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import KrelloBoard from "../components/krelloboard";
import KrelloBoardList from "../components/krelloboardlist";

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<KrelloBoardList />} />
				<Route path="/:boardId" element={<KrelloBoard />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
