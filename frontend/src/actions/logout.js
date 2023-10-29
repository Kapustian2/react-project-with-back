import { request } from '../pages/utils/request';
import { ACTION_TYPE } from './action-type';

export const logout = (session) => {
	request('/logout', 'POST');

	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
