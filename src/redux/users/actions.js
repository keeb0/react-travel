import { userAPI } from '../../api/api'
import { GET_USERS, UPDATE_PAGE, START_LOADING, END_LOADING } from './types'

export const getUsers = params => {
	const action = { type: GET_USERS }

	return dispatch => {
		userAPI.getUsers(params).then(({ items, totalCount }) => {
			action.newItems = items
			action.totalCount = totalCount

			dispatch(action)
			dispatch(endLoading())
		})
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
