import { connect } from 'react-redux'
import { getUsers } from '../../redux/users/actions'
import { followUser, unFollowUser } from '../../redux/user-following/actions'
import userPhoto from '../../assets/users/img/person-icon.png'
import { Component } from 'react'
import Pagination from './Pagination/Pagination'
import Loading from '../common/Loading/Loading'
import UsersList from './UserList/UsersList'

class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	render() {
		return (
			<div className="content">
				<Pagination
					totalItems={this.props.totalCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					changeUserPage={this.props.getUsers}
					startLoading={this.props.startLoading}
					getUsers={this.props.getUsers}
				/>

				<UsersList
					users={this.props.users}
					userPhoto={this.props.userPhoto}
					followUser={this.props.followUser}
					unFollowUser={this.props.unFollowUser}
				/>
				{this.props.loading && <Loading />}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	users: state.users.items,
	totalCount: state.users.totalCount,
	pageSize: state.users.pageSize,
	currentPage: state.users.currentPage,
	loading: state.users.isLoading,
	userPhoto,
})

const dispatchObj = {
	getUsers,
	followUser,
	unFollowUser,
	getUsers,
}

export default connect(mapStateToProps, dispatchObj)(UsersContainer)
