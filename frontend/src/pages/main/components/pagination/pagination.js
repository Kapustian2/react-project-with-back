import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../../../components';

const PaginationContainet = ({ className, page, setPage, lastPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>
			<Button disabled={page === lastPage} onClick={() => setPage(1)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainet)`
	display: flex;
	justify-content: center;
	bottom: 140px;
	margin: 10px 0;
	padding: 0 20px;

	& button {
		margin: 0 5px;
	}

	& .current-page {
		width: 150px;
		height: 40px;
		font-size: 18px;
		font-weight: 500;
		line-height: 35px;
		text-align: center;
		border: 1px solid black;
	}
`;

Pagination.PropTypes = {
	page: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};
