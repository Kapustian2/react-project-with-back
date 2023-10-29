import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Icon } from '../../../../components';
import { styled } from 'styled-components';
import { SelectUserLogin, SelectUserRole } from '../../../../selectors';
import { ROLE } from '../../../../constants/role';
import { logout } from '../../../../actions/logout';

const RightAlign = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
	padding: 5px;
`;

const ControlPanelContainer = ({ className }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const roleId = useSelector(SelectUserRole);
	const login = useSelector(SelectUserLogin);

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	return (
		<div className={className}>
			<RightAlign>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>

						<Icon id="fa-sign-out" size="23px" margin="" onClick={onLogout} />
					</>
				)}
			</RightAlign>
			<RightAlign>
				<Icon
					id="fa-backward"
					size="23px"
					margin=""
					onClick={() => navigate(-1)}
				/>
				<Link to="/post">
					<Icon id="fa-pencil-square" size="23px" margin="5px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" size="23px" margin="" />
				</Link>
			</RightAlign>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
