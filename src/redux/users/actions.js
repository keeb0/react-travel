import axios from 'axios'
import { TOGGLE_FOLLOWING, GET_USERS } from './types'

export const getUsers = () => {
	return dispatch => {
		axios
			.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response =>
				dispatch({ type: GET_USERS, newItems: response.data.items, totalCount: response.data.totalCount })
			)
	}
}

export const toggleFollowing = userId => {
	return {
		type: TOGGLE_FOLLOWING,
		userId,
	}
}
