import "./app.scss";
import React, { Component } from "react";
import Routes from "./routes";
import Navbar from "./components/navbar/";

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
