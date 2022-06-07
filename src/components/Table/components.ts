import styled from 'styled-components';

export const TableComponent = styled.table`
	border: 1px solid #696969;
	text-align: center;
	width: 100%;
`;

export const Row = styled.tr``;

export const Cell = styled.td`
	border-bottom: 1px solid #696969;
	padding: 15px 15px;

	@media only screen and (max-width: 800px) {
		font-size: 0.8em;
		padding: 5px 10px;
	}
`;

export const HeaderCell = styled.th`
	border-bottom: 1px solid #000;
	padding: 15px 15px;

	@media only screen and (max-width: 800px) {
		font-size: 0.8em;
		padding: 5px 10px;
	}
`;
