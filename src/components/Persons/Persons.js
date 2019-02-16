import React, { PureComponent } from "react";

import Person from "./Person/Person";

class Persons extends PureComponent {
	// static getDertivedStateFromProps() {
	// 	console.log("[Persons.js] getDertivedStateFromProps");
	// 	return this.state;
	// }

	// componentWillReceiveProps(props) {

	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log("[Persons.js] shouldComponentUpdate");
	// 	//shallow comparison, possibly fix if needed
	// 	if (nextProps.persons !== this.props.persons) return true;
	// 	else return false;
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("[Persons.js] getSnapshotBeforeUpdate");
		return { message: "Snapshot" };
	}

	componentDidUpdate(prevPropse, prevState, snapshot) {
		console.log("[Persons.js] componentDid Update");
		console.log(snapshot);
	}

	componentWillUnmount() {
		console.log("[Persons.js] componentWillUnmount");
	}

	render() {
		console.log("[Persons.js] rendering...");
		return this.props.persons.map((person, index) => {
			return (
				<Person
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					key={person.id}
					changed={event => this.props.changed(event, person.id)}
				/>
			);
		});
	}
}

export default Persons;
