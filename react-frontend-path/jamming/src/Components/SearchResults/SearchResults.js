import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

export default class Searchresults extends Component {
	render() {
		return (
			<div className='SearchResults'>
				<h2>Results</h2>
				<TrackList
					tracks={this.props.searchResults}
					onAdd={this.props.onAdd}
					onRemove={this.props.onRemove}
				/>
			</div>
		);
	}
}
