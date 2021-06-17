import axios from 'axios'
import { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserData } from '../../redux/profile/actions'

class ProfileComponent extends Component {
	componentDidMount() {
		const url = 'https://social-network.samuraijs.com/api/1.0/profile/2'
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

export default connect(mapStateToProps, dispatchFunctions)(ProfileComponent)
