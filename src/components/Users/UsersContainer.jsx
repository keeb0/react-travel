import { connect } from 'react-redux'
import {
	getUsers,
	startLoading,
	toggleFollowing,
	updatePage,
} from '../../redux/users/actions'
import userPhoto from '../../assets/users/img/person-icon.png'
import { Component } from 'react'
import Pagination from './Pagination/Pagination'
import Loading from '../Loading/Loading'
import UsersList from './UserList/UsersList'

class UsersContainer extends Component {
	componentDidMount() {
		this.props.startLoading()
		this.props.getUsers()
	}

	render() {
		return (
			<div className="content">
				<Pagination
					totalItems={this.props.totalCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onClickPage={this.props.updatePage}
					startLoading={this.props.startLoading}
					setUsers={this.props.getUsers}
				/>

				<UsersList
					users={this.props.users}
					userPhoto={this.props.userPhoto}
					onToggleFollowing={this.props.toggleFollowing}
				/>
				{this.props.loading && <Loading />}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	users: state.users.items,
	userPhoto,
	totalCount: state.users.totalCount,
	pageSize: state.users.pageSize,
	currentPage: state.users.currentPage,
	loading: state.users.isLoading,
})

const mapDispatchToProps = dispatch => {
	return {
		startLoading() {
			dispatch(startLoading())
		},
		getUsers() {
			dispatch(getUsers())
		},
		toggleFollowing(userId) {
			dispatch(toggleFollowing(userId))
		},
		updatePage(newPage) {
			// dispatch(startLoading())
			dispatch(updatePage(newPage))
			// dispatch(getUsers())
		},
	}
}

const dispatchObj = { startLoading, getUsers, toggleFollowing, updatePage }

export default connect(mapStateToProps, dispatchObj)(UsersContainer)
