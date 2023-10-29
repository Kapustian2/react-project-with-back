import { useDispatch } from 'react-redux';
import { useLayoutEffect, useRef, useState } from 'react';
import { sanitizeContent } from './utils';
import { SpecialPanel } from '../../special-panel/special-panel';
import { Icon, Input } from '../../../../components';
import { styled } from 'styled-components';
import { savePostAsync } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleUrlValue, setTitleUrlValue] = useState(title);

	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleUrlValue(title);
	}, [imageUrl, title]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(id, {
				imageUrl: imageUrlValue,
				title: titleUrlValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleUrlValue(target.value);

	return (
		<div className={className}>
			<Input
				value={imageUrlValue}
				placeholder="Картинка..."
				onChange={onImageChange}
			/>
			<Input
				value={titleUrlValue}
				placeholder="Заголовок..."
				onChange={onTitleChange}
			/>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={<Icon id="fa-floppy-o" size="21px" onClick={onSave} />}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		min-height: 80px;
		font-size: 18px;
		border: 1px solid #000;
		white-space: pre-line;
	}
`;

PostForm.PropTypes = {
	post: PropTypes.object.isRequired,
};
