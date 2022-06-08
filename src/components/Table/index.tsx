import { useState } from 'react';

import { Cell, HeaderCell, LoadingCircle, Row, TableComponent } from './components';
import { Player, ComparatorType } from '../../types';
import OptionsBar from '../OptionsBar';
import { sortData } from '../../utils/sortData';

function Table() {
	const [data, setData] = useState<Player[]>([]);
	const [loadingData, setLoadingData] = useState<boolean>(false);
	const [comparator, setComparator] = useState<ComparatorType>('team');
	const [compareOrder, setCompareOrder] = useState<'asc' | 'desc'>('asc');

	function getData(data: Player[]) {
		setData(data);
	}

	function handleLoading(value: boolean) {
		setLoadingData(value);
	}

	function handleSort(newComparator: ComparatorType) {
		if (newComparator === comparator) {
			if (compareOrder === 'asc') setCompareOrder('desc');
			else setCompareOrder('asc');
		} else {
			if (compareOrder !== 'asc') setCompareOrder('asc');
			setComparator(newComparator);
		}
	}

	function getTime(originalTime: number) {
		const minutes = Math.floor(originalTime / 60);
		const seconds = originalTime - minutes * 60;
		return minutes + ':' + seconds;
	}

	return (
		<>
			<OptionsBar liftData={getData} setLoading={handleLoading} />
			<TableComponent cellSpacing={0}>
				<thead>
					<Row>
						<HeaderCell onClick={() => handleSort('team')} style={{ width: '34%' }}>
							Team
						</HeaderCell>
						<HeaderCell onClick={() => handleSort('player')} style={{ width: '34%' }}>
							Player
						</HeaderCell>
						<HeaderCell onClick={() => handleSort('toi')} style={{ width: '8%' }}>
							toi
						</HeaderCell>
						<HeaderCell onClick={() => handleSort('gp')} style={{ width: '6%' }}>
							gp
						</HeaderCell>
						<HeaderCell onClick={() => handleSort('xg60')} style={{ width: '6%' }}>
							xg60
						</HeaderCell>
						<HeaderCell onClick={() => handleSort('c60')} style={{ width: '6%' }}>
							c60
						</HeaderCell>
						<HeaderCell onClick={() => handleSort('sogc_pct')} style={{ width: '6%' }}>
							sogc_pct
						</HeaderCell>
					</Row>
				</thead>
				<tbody>
					{!loadingData ? (
						sortData(data, comparator, compareOrder).map((player: Player) => (
							<Row key={player.player + Math.random()}>
								<Cell>{player.team}</Cell>
								<Cell>{player.player}</Cell>
								<Cell>{getTime(player.stats.toi)}</Cell>
								<Cell>{player.stats.gp}</Cell>
								<Cell>{player.stats.xg60}</Cell>
								<Cell>{player.stats.c60}</Cell>
								<Cell>{player.stats.sogc_pct}</Cell>
							</Row>
						))
					) : (
						<tr>
							<td>
								<LoadingCircle />
							</td>
						</tr>
					)}
				</tbody>
			</TableComponent>
		</>
	);
}

export default Table;
