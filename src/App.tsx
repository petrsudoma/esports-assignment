import { useEffect } from 'react';
import styled from 'styled-components';

import Table from './components/Table';
import { getAccessToken } from './utils/getToken';

function App() {
	useEffect(() => {
		getAccessToken();
	}, []);

	return (
		<Wrapper>
			<Table />
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
