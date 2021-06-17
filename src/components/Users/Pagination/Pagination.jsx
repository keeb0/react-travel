import { Component } from 'react'
import s from './Pagination.module.css'

class Pagination extends Component {
	getTotalPage = () => {
		return Math.ceil(this.props.totalItems / this.props.pageSize)
	}
	onClickPage = page => {
		this.props.startLoading()
		this.props.updatePage(page)
		this.props.getUsers({
			page,
			count: this.props.pageSize,
		})
	}

	createPageItem = (page, icon) => {
		return (
			<button
				className={s.item}
				key={page}
				onClick={this.onClickPage.bind(this, page)}
				className={this.props.currentPage === page ? s.active : ''}
			>
				{icon || page}
			</button>
		)
	}

	setSidePages = (pageItems, currentPage, totalPage) => {
		if (currentPage > 3) {
			pageItems.unshift(this.createPageItem(1, '<<'))
		}
		if (currentPage < totalPage - 2) {
			pageItems.push(this.createPageItem(totalPage, '>>'))
		}
	}

	setPrevPages = (pageItems, currentPage) => {
		for (let i = currentPage - 1; i >= currentPage - 2 && i >= 1; i--) {
			pageItems.unshift(this.createPageItem(i))
		}
	}

	setNextPages = (pageItems, currentPage, totalPage) => {
		for (let i = currentPage; i <= currentPage + 2 && i <= totalPage; i++) {
			pageItems.push(this.createPageItem(i))
		}
	}

	render() {
		const totalPage = this.getTotalPage()
		const currentPage = this.props.currentPage
		const pageItems = []

		this.setPrevPages(pageItems, currentPage)
		this.setNextPages(pageItems, currentPage, totalPage)
		this.setSidePages(pageItems, currentPage, totalPage)

		return <div className={s.pagination}>{pageItems}</div>
	}
}

export default Pagination
