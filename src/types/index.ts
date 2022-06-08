export type Player = {
	team: string;
	player: string;
	stats: {
		xg60?: number;
		c60?: number;
		sogc_pct?: number;
		toi: number;
		gp: number;
	};
};

export type ComparatorType = 'toi' | 'gp' | 'xg60' | 'c60' | 'sogc_pct' | 'team' | 'player';

export type CompareOrder = 'asc' | 'desc';
