import { request } from '../pages/utils/request';
import { removeComment } from './remove-comment';

export const removeCommentAsync = (postId, id) => (dispatch) => {
	request(`/posts/${postId}/comments/${id}`, 'DELETE', postId, id).then(() => {
		dispatch(removeComment(id));
	});
};
