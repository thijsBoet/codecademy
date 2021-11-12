import React from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

const business = {
	imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
	name: 'MarginOtto Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];

class App extends React.Component {
	searchYelp(term, location, sortBy) {
		console.log(
			`Searching Yelp with:\n term: ${term}\n location: ${location}\n sortBy: ${sortBy}`
		);
	}

	render() {
		return (
			<div className='App'>
				<h1>ravenous</h1>
				<SearchBar searchYelp={this.searchYelp} />
				<BusinessList businesses={businesses} />
			</div>
		);
	}
}

export default App;
