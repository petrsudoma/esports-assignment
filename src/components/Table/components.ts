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
	cursor: pointer;

	:hover {
		background-color: #f2f2f2;
	}

	@media only screen and (max-width: 800px) {
		font-size: 0.8em;
		padding: 5px 10px;
	}
`;

export const LoadingCircle = styled.div`
	width: 80px;
	height: 80px;
	position: absolute;
	left: 50%;
	top: 50%;
	background-color: transparent;
	border-radius: 50%;
	border: 8px solid #c2c3c4;
	border-top: 8px solid #4083ff;
	animation: rotate 2s linear infinite;

	@keyframes rotate {
		from {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		to {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}
`;
