import React, { Component } from 'react';
import './Track.css';

export default class Track extends Component {
	renderAction() {
		if (this.props.isRemoval) {
			return <a onClick={this.props.onRemove} class="Track-action">-</a>
		} else {
			return <a onClick={this.props.onSave} class="Track-action">+</a>
		}
	}

	render() {
		return (
			<div class="Track">
				<div class="Track-information">
					<h3>{<!-- track name will go here -->}</h3>
					<p><{<!-- track artist will go here-->} | {<!-- track album will go here -->}</p>
				</div>
				<button class="Track-action">{<!-- + or - will go here -->}</button>
			</div>
		)
	}
}
