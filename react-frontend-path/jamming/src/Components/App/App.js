import React from 'react';
import PlayList from '../Playlist/PlayList';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [
				{
					id: 1,
					name: 'Guns N Roses - Appetite for Destruction',
					artist: 'Guns N Roses',
					album: 'Use Your Illusion I',
				},
				{
					id: 2,
					name: 'Queen - Bohemian Rhapsody',
					artist: 'Queen',
					album: 'A Night at the Opera',
				},
				{
					id: 3,
					name: 'Metallica - Nothing Else Matters',
					artist: 'Metallica',
					album: 'Metallica',
				},
			],
			playlistName: 'My Playlist',
			playlistTracks: [
				{
					id: 4,
					name: 'PlaylistName1',
					artist: 'PlaylistArtist1',
					album: 'PlaylistAlbum1',
				},
				{
					id: 5,
					name: 'PlaylistName2',
					artist: 'PlaylistArtist2',
					album: 'PlaylistAlbum2',
				},
				{
					id: 6,
					name: 'PlaylistName3',
					artist: 'PlaylistArtist3',
					album: 'PlaylistAlbum3',
				},
			],
		};
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
	}

	addTrack(track) {
		let tracks = this.state.playlistTracks;
		if (tracks.find(savedTrack => savedTrack.id === track.id)) {
			return;
		} else {
			tracks.push(track);
			this.setState({ playlistTracks: tracks });
		}
	}

	removeTrack(track) {
		let tracks = this.state.playlistTracks;
		tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

		this.setState({ playlistTracks: tracks });
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className='highlight'>mmm</span>ing
				</h1>
				<div className='App'>
					<SearchBar />
					<div className='App-playlist'>
						<SearchResults
							searchResults={this.state.searchResults}
							onAdd={this.addTrack}
						/>
						<PlayList
							playlistName={this.state.playlistName}
							playlistTracks={this.state.playlistTracks}
							onRemove={this.removeTrack}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
