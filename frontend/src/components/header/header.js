import { Logo, ControlPanel } from './components';
import { styled } from 'styled-components';

const Discription = styled.div`
	color: #1c1c1c;
	font-family: Arial;
	font-size: 25px;
	font-style: italic;
	font-weight: 400;
	line-height: normal;
`;

const headerContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Discription>
			Веб-технологии
			<br />
			Написание кода
			<br />
			Разбор ошибок
		</Discription>
		<ControlPanel />
	</header>
);

export const Header = styled(headerContainer)`
	position: fixed;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	top: 0;
	width: 1333px;
	height: 175px;
	padding: 30px 50px;
	box-shadow: 0px -2px 17px #000;
	z-index: 10;
`;
