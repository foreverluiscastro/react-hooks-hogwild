import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ onGreasedClick, showGreasedPigs, onNameSort, onWeightSort, filterByName, filterByWeight }) => {

	function handleGreased() {
		console.log("I have been clicked")
		onGreasedClick()
	}

	function handleSort(e) {
		console.log(e.target.name)
		if (e.target.name === "name") {
			console.log("onNameSort has triggered")
			onNameSort()
		} else if (e.target.name === "weight") {
			console.log("onWeightSort has triggered")
			onWeightSort()
		}
	}

	return (
	<div>
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
		<div className="navWrapper">
			<button onClick={handleGreased}>{showGreasedPigs ? "show all pigs" : "show only greased pigs" }</button>
			<p>Sort by: <label>Name</label><input type="radio" checked={filterByName === true} onClick={handleSort} name="name"/> <label>Weight</label><input type="radio" name="weight" onClick={handleSort} checked={filterByWeight === true}/></p>
		</div>
	</div>
	);
};

export default Nav;
