const clientId = 'b68282ef0df14eb28150dcf74c5225bc';
const redirectUri = 'http://localhost:3000/';
let accesToken;

const Spotify = {
	getAccessToken() {
		if (accesToken) {
			return accesToken;
		}

		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

		if (accessTokenMatch && expiresInMatch) {
			accesToken = accessTokenMatch[1];
			const expiresIn = Number(expiresInMatch[1]);
			window.setTimeout(() => (accesToken = ''), expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
			return accesToken;
		}

		const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
		window.location = accessUrl;
	},

	search() {
		const accessToken = Spotify.getAccessToken();
		return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if(!jsonResponse.tracks) {
				return [];
			}
			return jsonResponse.tracks.items.map(track => ({
				id: track.id,
				name: track.name,
				artist: track.artists[0].name,
				album: track.album.name,
			}));
		});
	}
}

export default Spotify;
