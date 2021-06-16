import { Component } from 'react'
import s from './Pagination.module.css'

class Pagination extends Component {
	getPageCount = () => {
		return Math.ceil(this.props.totalItems / this.props.pageSize)
	}

	createPageItem = (page, icon) => {
		return (
			<button
				className={s.item}
				key={page}
				onClick={this.props.onClickPage.bind(this, page)}
				className={this.props.currentPage === page ? s.active : ''}
			>
				{icon || page}
			</button>
		)
	}

	render() {
		const pageCount = this.getPageCount()
		const currentPage = this.props.currentPage
		const pageItems = []

		for (let i = currentPage - 1; i >= currentPage - 2 && i >= 1; i--) {
			pageItems.unshift(this.createPageItem(i))
		}
		for (let i = currentPage; i <= currentPage + 2 && i <= pageCount; i++) {
			pageItems.push(this.createPageItem(i))
		}

		if (currentPage > 3) {
			pageItems.unshift(this.createPageItem(1, '<'))
		}
		if (currentPage < pageCount - 2) {
			pageItems.push(this.createPageItem(pageCount, '>'))
		}

		return <div className={s.pagination}>{pageItems}</div>
	}
}

export default Pagination
