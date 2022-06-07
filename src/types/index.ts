export type Team = {
	team: string;
	players: Player[];
};

export type Player = {
	player: string;
	stats: {
		xg60: number;
		c60: number;
		sogc_pct: number;
		toi: number;
		gp: number;
	};
};
