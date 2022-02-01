import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";

const App = () => {
	return (
		<div>
			<h1>UwU <a href="https://reactjs.org/">React.js</a> app</h1>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));