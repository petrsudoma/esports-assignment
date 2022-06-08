import Axios from 'axios';

export function getAccessToken() {
	Axios.post(process.env.REACT_APP_AUTH_URL as string, {
		grant_type: 'client_credentials',
		client_id: process.env.REACT_APP_CLIENT_ID as string,
		client_secret: process.env.REACT_APP_CLIENT_SECRET as string,
	})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
		})
		.catch((err) => console.error(err));
}
