import { authAPI, profileAPI } from '../../api/api'
import { AUTHORIZE, SET_MY_PROFILE } from './types'

export const authorize = ({ id, email, login }) => ({
	type: AUTHORIZE,
	data: { id, email, login },
})

export const setMyProfile = myProfile => ({
	type: SET_MY_PROFILE,
	myProfile,
})

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

const getMyProfile = (dispatch, myId) => {
	profileAPI
		.getProfile(myId)
		.then(myProfile => dispatch(setMyProfile(myProfile)))
}
