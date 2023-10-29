import { styled } from 'styled-components';
import PropTypes, { string } from 'prop-types';
const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	font-style: bold;
	width: ${({ width = '100%' }) => width};
	height: 32px;
	border: 1px solid rgb(2);
	background-color: #afafaf;

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}
`;

Button.PropTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
