import { useState } from 'react';

import { Cell, HeaderCell, Row, TableComponent } from './components';
import { Team, Player } from '../../types';
import OptionsBar from '../OptionsBar';

function Table() {
	const [data, setData] = useState<Team[]>();

	function getData(data: Team[]) {
		setData(data);
	}

	return (
		<>
			<OptionsBar liftData={getData} />
			<TableComponent cellSpacing={0}>
				<thead>
					<Row>
						<HeaderCell style={{ width: '34%' }}>Team</HeaderCell>
						<HeaderCell style={{ width: '34%' }}>Player</HeaderCell>
						<HeaderCell style={{ width: '8%' }}>toi</HeaderCell>
						<HeaderCell style={{ width: '6%' }}>gp</HeaderCell>
						<HeaderCell style={{ width: '6%' }}>xg60</HeaderCell>
						<HeaderCell style={{ width: '6%' }}>c60</HeaderCell>
						<HeaderCell style={{ width: '6%' }}>sogc_pct</HeaderCell>
					</Row>
				</thead>
				<tbody>
					{data?.map((team: Team) => {
						return team.players.map((player: Player) => (
							<Row key={player.player}>
								<Cell>{team.team}</Cell>
								<Cell>{player.player}</Cell>
								<Cell>{player.stats.toi}</Cell>
								<Cell>{player.stats.gp}</Cell>
								<Cell>{player.stats.xg60}</Cell>
								<Cell>{player.stats.c60}</Cell>
								<Cell>{player.stats.sogc_pct}</Cell>
							</Row>
						));
					})}
				</tbody>
			</TableComponent>
		</>
	);
}

export default Table;
