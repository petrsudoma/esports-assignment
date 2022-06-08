import Axios from 'axios';

import { Player } from '../types';

export function fetchData(
	playersMetrics: string[],
	giveData: (data: Player[]) => void,
	setLoading: (value: boolean) => void
) {
	setLoading(true);
	Axios.post(
		process.env.REACT_APP_COMPETITION_URL as string,
		{
			gameState: '5:5',
			timeOnIce: 600,
			metrics: playersMetrics,
		},
		{ headers: { Authorization: 'Bearer ' + localStorage.access_token } }
	)
		.then((res) => {
			const players = [];
			for (let team of res.data) {
				for (let player of team.players) {
					players.push({
						team: team.team,
						...player,
					});
				}
			}
			giveData(players);
		})
		.catch((err) => console.error(err))
		.finally(() => setLoading(false));
}
