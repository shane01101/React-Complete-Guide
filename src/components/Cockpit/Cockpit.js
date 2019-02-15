import React from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
	const style = {
		backgroundColor: "green",
		color: "white",
		font: "inherit",
		border: "1px solid blue",
		padding: "8px",
		cursor: "pointer"
	};
	const classes = [];
	let btnClass = "";
	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.persons.length <= 2) {
		classes.push("red");
	}

	if (props.persons.length <= 1) {
		classes.push("bold");
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={classes.join(" ")}>This is really working!</p>
			<button style={style} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default Cockpit;
