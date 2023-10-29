import { request } from '../pages/utils/request';

export const removePostAsync = (id) => () => request(`/posts/${id}`, 'DELETE');
