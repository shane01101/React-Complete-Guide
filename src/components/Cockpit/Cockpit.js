import React, { useEffect, useRef } from "react";
// import withClass from "../../hoc/withClass";
// import classes from "./Cockpit.css";

const cockpit = props => {
	const toggleBtnRef = useRef(null);

	useEffect(() => {
		console.log("[Cockpit.js] useEffect");
		// const timer = setTimeout(() => {
		// 	alert("Saved data to cloud");
		// }, 1000);
		toggleBtnRef.current.click();
		return () => {
			// clearTimeout(timer);
			console.log("[Cockpit.js] cleanup work in useEffect");
		};
	}, []);

	useEffect(() => {
		console.log("[Cockpit.js] 2nd useEffect");
		return () => {
			console.log("[Cockpit.js] cleanup work in 2nd useEffect");
		};
	});

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

	if (props.personsLength <= 2) {
		classes.push("red");
	}

	if (props.personsLength <= 1) {
		classes.push("bold");
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={classes.join(" ")}>This is really working!</p>
			<button ref={toggleBtnRef} style={style} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default React.memo(cockpit);
