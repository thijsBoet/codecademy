import React from 'react';
import PlayList from '../Playlist/PlayList';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className='highlight'>mmm</span>ing
				</h1>
				<div className='App'>
					{/* <!-- Add a SearchBar component --> */}
					<div className='App-playlist'>
						{/* <!-- Add a SearchResults component --> */}
						{/* <!-- Add a Playlist component --> */}
					</div>
				</div>
			</div>
		);
	}
}

export default App;