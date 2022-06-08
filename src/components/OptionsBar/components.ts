import styled from 'styled-components';

export const Form = styled.form`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 3%;
	margin-bottom: 2%;
`;

export const InputLabel = styled.label`
	margin-left: 10px;
	margin-right: 50px;
`;

export const Button = styled.button`
	background-color: #fff;
	border: 1px solid #000;
	padding: 10px 30px;
	cursor: pointer;

	:hover {
		background-color: #f2f2f2;
	}

	:active {
		background-color: #e2e2e2;
	}
`;
