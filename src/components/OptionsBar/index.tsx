import { FormEvent, useState } from 'react';

import { Button, Form, InputLabel } from './components';
import { Player } from '../../types';
import { fetchData } from '../../utils/fetchData';

type OptionsBarProps = {
	liftData: (data: Player[]) => void;
	setLoading: (value: boolean) => void;
};
const OptionsBar: React.FC<OptionsBarProps> = function (props) {
	const [playersMetrics, setPlayersMetrics] = useState<string[]>([]);

	function submitHandler(e: FormEvent) {
		if (playersMetrics.length === 0) {
			alert('Please choose at least one metric!');
		} else {
			fetchData(playersMetrics, props.liftData, props.setLoading);
		}
		e.preventDefault();
	}

	function handleCheckbox(e: FormEvent<HTMLInputElement>) {
		const value = e.currentTarget.value;
		let newMetrics;

		if (playersMetrics.includes(value)) {
			newMetrics = playersMetrics;
			newMetrics.splice(newMetrics.indexOf(value), 1);
		} else {
			newMetrics = playersMetrics;
			newMetrics.push(value);
		}

		setPlayersMetrics(newMetrics);
	}

	return (
		<Form onSubmit={submitHandler}>
			<Button type='submit'>Load data</Button>
			<div>
				<input type='checkbox' value='xg60' onChange={handleCheckbox} />
				<InputLabel>xg60</InputLabel>

				<input type='checkbox' value='c60' onChange={handleCheckbox} />
				<InputLabel>c60</InputLabel>

				<input type='checkbox' value='sogc_pct' onChange={handleCheckbox} />
				<InputLabel>sogc_pct</InputLabel>
			</div>
		</Form>
	);
};

export default OptionsBar;
