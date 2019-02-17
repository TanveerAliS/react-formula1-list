import React from 'react';
import WorldChampions from './container/WorldChampions';

const App = () =>{
	return (
		<div className="App">
				<div className="header">
					<h1>F1 World Champions</h1>
					<h2>2005-2015</h2>
				</div>
        <WorldChampions />
		</div>
	);
}

export default App
