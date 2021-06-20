import axios from 'axios'
import { Component } from 'react'
import { connect } from 'react-redux'
import { authorize, setMyProfile } from '../../redux/auth/actions'
import Header from './Header'

class HeaderComponent extends Component {
	componentDidMount() {
		const url = 'https://social-network.samuraijs.com/api/1.0/auth/me'
		axios.get(url, { withCredentials: true }).then(response => {
			if (response.data.resultCode === 0) {
				this.props.authorize(response.data.data)
				const myId = this.props.user.id
				axios
					.get(`https://social-network.samuraijs.com/api/1.0/profile/${myId}`)
					.then(response => this.props.setMyProfile(response.data))
			}
		})
	}

	render() {
		return <Header user={this.props.user} />
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
	myProfile: state.auth.myProfile,
})

const dispatchFunctions = { authorize, setMyProfile }

export default connect(mapStateToProps, dispatchFunctions)(HeaderComponent)
