import { authAPI, profileAPI } from '../../api/api'
import { AUTHORIZE, SET_MY_PROFILE } from './types'

const authorize = ({ id, email, login }) => ({
	type: AUTHORIZE,
	data: { id, email, login },
})

const setMyProfile = myProfile => ({
	type: SET_MY_PROFILE,
	myProfile,
})

const getMyProfile = (dispatch, myId) => {
	profileAPI
		.getProfile(myId)
		.then(myProfile => dispatch(setMyProfile(myProfile)))
}

export const getMe = () => {
	return dispatch => {
		authAPI.getMe().then(({ resultCode, data: myData }) => {
			if (resultCode === 0) {
				dispatch(authorize(myData))

				getMyProfile(dispatch, myData.id)
			}
		})
	}
}
