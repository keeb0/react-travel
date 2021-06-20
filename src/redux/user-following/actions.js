import { followAPI } from '../../api/api'
import { FOLLOW_USER, UN_FOLLOW_USER } from './types'

export const followUser = userId => {
	return dispatch => {
		followAPI.followUser(userId).then(({ resultCode }) => {
			if (resultCode === 0) {
				dispatch({ type: FOLLOW_USER, userId })
			}
		})
	}
}
export const unFollowUser = userId => {
	return dispatch => {
		followAPI.unFollowUser(userId).then(({ resultCode }) => {
			if (resultCode === 0) {
				dispatch({ type: UN_FOLLOW_USER, userId })
			}
		})
	}
}
