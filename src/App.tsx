import styled from 'styled-components';

import Table from './components/Table';

function App() {
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
