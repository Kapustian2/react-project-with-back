import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import { styled } from 'styled-components';

const LargeText = styled.div`
	color: #1c1c1c;
	font-family: Arial;
	font-size: 68px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const SmallText = styled.div`
	color: #1c1c1c;
	font-family: Arial;
	font-size: 25px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const logoContainer = ({ className }) => {
	return (
		<Link className={className} to="/">
			<Icon id="fa-code" size="70px" />
			<div>
				<LargeText>Блог</LargeText>
				<SmallText>веб-разработчика</SmallText>
			</div>
		</Link>
	);
};

export const Logo = styled(logoContainer)`
	display: flex;
	margin-top: -25px;
`;
