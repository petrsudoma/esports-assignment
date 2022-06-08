import { ComparatorType, CompareOrder, Player } from '../types';

export function sortData(
	unsortedData: Player[],
	comparator: ComparatorType,
	compareOrder: CompareOrder
) {
	const sortedData = unsortedData.sort((a, b) => {
		if (comparator !== 'team' && comparator !== 'player') {
			if (a['stats'][comparator]! > b['stats'][comparator]!) return compareOrder === 'asc' ? 1 : -1;
		} else {
			if (a[comparator]! > b[comparator]!) return compareOrder === 'asc' ? 1 : -1;
		}

		return compareOrder === 'asc' ? -1 : 1;
	});
	return sortedData;
}
