import { followAPI } from '../../api/api'
import { FOLLOW_USER, UN_FOLLOW_USER } from './types'

export const followUser = userId => {
	return d => {
		followAPI.followUser(userId).then(({ resultCode }) => {
			if (resultCode === 0) {
				d({ type: FOLLOW_USER, userId })
			}
		})
	}
}
export const unFollowUser = userId => {
	return d => {
		followAPI.unFollowUser(userId).then(({ resultCode }) => {
			if (resultCode === 0) {
				d({ type: UN_FOLLOW_USER, userId })
			}
		})
	}
}
