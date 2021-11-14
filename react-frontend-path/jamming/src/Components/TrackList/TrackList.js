import React, { Component } from 'react';
import Track from '../Track/Track';

import './TrackList.css';

export default class TrackList extends Component {
	render() {
		return (
			<div className='TrackList'>
				{this.props.tracks.map(track => {
					return (
						<Track
							key={track.id}
							onAdd={this.props.onAdd}
							onRemove={this.props.onRemove}
							track={track}
							isRemoval={this.props.isRemoval}
						/>
					);
				})}
			</div>
		);
	}
}
