import s from './Pagination.module.css'

const Pagination = ({ pageSize, totalItems, currentPage, getUsers }) => {
	const totalPage = Math.ceil(totalItems / pageSize)
	const pageItems = []

	const onClickPage = page => getUsers(page, pageSize)

	const createPageItem = (page, icon) => (
		<button
			key={page}
			onClick={onClickPage.bind(this, page)}
			className={currentPage === page ? `${s.active} ${s.item}` : s.item}
			disabled={currentPage === page}
		>
			{icon || page}
		</button>
	)

	const setSidePages = () => {
		if (currentPage > 3) {
			pageItems.unshift(createPageItem(1, '<<'))
		}
		if (currentPage < totalPage - 2) {
			pageItems.push(createPageItem(totalPage, '>>'))
		}
	}

	const setPrevPages = () => {
		for (let i = currentPage - 1; i >= currentPage - 2 && i >= 1; i--) {
			pageItems.unshift(createPageItem(i))
		}
	}

	const setNextPages = () => {
		for (let i = currentPage; i <= currentPage + 2 && i <= totalPage; i++) {
			pageItems.push(createPageItem(i))
		}
	}

	setPrevPages()
	setNextPages()
	setSidePages()

	return <div className={s.pagination}>{pageItems}</div>
}

export default Pagination
