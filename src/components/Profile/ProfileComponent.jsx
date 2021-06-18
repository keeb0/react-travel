import axios from 'axios'
import { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserData } from '../../redux/profile/actions'
import { withRouter } from 'react-router-dom'

class ProfileComponent extends Component {
	componentDidMount() {
		const userId = this.props.match.params.userId || 2
		const url = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
		axios.get(url).then(response => this.props.setUserData(response.data))
	}

	render() {
		return <Profile user={this.props.user} />
	}
}

const mapStateToProps = state => ({
	user: state.profilePage.user,
})
const dispatchFunctions = { setUserData }

const WithUrlDataComponent = withRouter(ProfileComponent)

export default connect(mapStateToProps, dispatchFunctions)(WithUrlDataComponent)
