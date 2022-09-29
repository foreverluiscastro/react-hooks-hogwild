import React, { useState } from "react";
import Nav from "./Nav";

import rawHogs from "../porkers_data";
import HogContainer from "./HogContainer";

function App() {
	console.log("the app has mounted")
	const [hogs, setHogs] = useState(rawHogs)
	const [showGreasedPigs, setShowGreasedPigs] = useState(false)
	const [filterByName, setfilterByName] = useState(false)
	const [filterByWeight, setfilterByWeight] = useState(false)
	// console.log('this is the hogs state:', hogs)
	console.log('This is the filter name stae:', filterByName)

	// useEffect(() => {
		
	// 	if (filterByName === true) {

	// 		const sortedList = hogs.sort((a,b) => {
	// 			return a.name.localeCompare(b.name)
	// 		});
	// 		console.log("this is the sorted list:", sortedList)
	// 		setHogs(sortedList)
	// 	} else if (filterByWeight === true) {
	// 		const sortedList = hogs.sort((a,b) => {
	// 			return a.weight - b.weight
	// 		})
	// 		console.log("this is the sorted list:", sortedList)
	// 		setHogs(sortedList)
	// 	} else {
	// 		setHogs(rawHogs)
	// 	}

	// }, [filterByName])

	const visiableHogs = hogs
	// filters by greased
	.filter((hog) => {
		if (showGreasedPigs === false) return true

		return hog.greased === true
	})
	// name sort
	.sort((a,b) => {
		if (filterByName === false) return true

		return a.name.localeCompare(b.name)
	})
	// weight sort
	.sort((a,b) => {
		if (filterByWeight === false) return true

		return a.weight - b.weight
	})
	

	function filterGreased() {
		setShowGreasedPigs(!showGreasedPigs)
	}

	function handleFilterName() {
		setfilterByName(!filterByName)
	}

	function handleFilterWeight() {
		setfilterByWeight(!filterByWeight)
	}

	return (
		<div className="App">
			<Nav onGreasedClick={filterGreased} onNameSort={handleFilterName} onWeightSort={handleFilterWeight} showGreasedPigs={showGreasedPigs} filterByName={filterByName} filterByWeight={filterByWeight}/>
			<HogContainer hogs={visiableHogs}/>
		</div>
	);
}

export default App;
