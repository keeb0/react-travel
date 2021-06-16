import axios from 'axios'
import store from '../redux-store'
import {
	TOGGLE_FOLLOWING,
	GET_USERS,
	UPDATE_PAGE,
	START_LOADING,
	END_LOADING,
} from './types'

export const getUsers = () => {
	return dispatch => {
		const state = store.getState().users
		const params = {
			count: state.pageSize,
			page: state.currentPage,
		}

		axios
			.get('https://social-network.samuraijs.com/api/1.0/users', { params })
			.then(response => {
				dispatch({
					type: GET_USERS,
					newItems: response.data.items,
					totalCount: response.data.totalCount,
				})
				dispatch(endLoading())
			})
	}
}

export const toggleFollowing = userId => {
	return {
		type: TOGGLE_FOLLOWING,
		userId,
	}
}

export const updatePage = newPage => ({
	type: UPDATE_PAGE,
	newPage,
})

export const startLoading = () => ({
	type: START_LOADING,
})

export const endLoading = () => ({
	type: END_LOADING,
})
