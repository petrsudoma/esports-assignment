import Axios from 'axios';

import { Team } from '../types';

export function fetchData(playersMetrics: string[], giveData: (data: Team[]) => void) {
	Axios.post(
		'http://logiq.statistics.datasport.cz/api/v1/individual/9db52d7c-a449-4acd-a8ac-aad705b60c6e',
		{
			gameState: '5:5',
			timeOnIce: 600,
			metrics: playersMetrics,
		},
		{ headers: { Authorization: 'Bearer 7ce0595b80a50950f3887cbec3fe6de5e4cf41c8' } }
	)
		.then((res) => {
			giveData(res.data);
		})
		.catch((err) => console.error(err));
}
