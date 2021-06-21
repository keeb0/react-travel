import { userAPI } from '../../api/api'
import { SET_USERS, UPDATE_PAGE, TOGGLE_LOADING } from './types'

const setUsers = (newItems, totalCount) => ({
	type: SET_USERS,
	newItems,
	totalCount,
})

const updatePage = newPage => ({
	type: UPDATE_PAGE,
	newPage,
})

const toggleLoading = value => ({
	type: TOGGLE_LOADING,
	value,
})

export const getUsersFromAPI = (page, count) => {
	return d => {
		userAPI.getUsers({ page, count }).then(({ items, totalCount }) => {
			d(setUsers(items, totalCount))
			d(toggleLoading(false))
		})
	}
}

export const getUsers = (newPage, pageSize) => {
	return d => {
		d(toggleLoading(true))
		d(updatePage(newPage))
		d(getUsersFromAPI(newPage, pageSize))
	}
}
