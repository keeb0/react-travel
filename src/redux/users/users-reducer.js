import { FOLLOW_USER, UN_FOLLOW_USER } from '../user-following/types'
import { GET_USERS, UPDATE_PAGE, START_LOADING, END_LOADING } from './types'

const initialState = {
	items: [],
	totalCount: 0,
	pageSize: 5,
	currentPage: 1,
	isLoading: false,
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				items: action.newItems,
				totalCount: action.totalCount,
			}

		case FOLLOW_USER:
			return {
				...state,
				items: state.items.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: true }
					}
					return user
				}),
			}

		case UN_FOLLOW_USER:
			return {
				...state,
				items: state.items.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: false }
					}
					return user
				}),
			}

		case UPDATE_PAGE:
			return {
				...state,
				currentPage: action.newPage,
			}

		case START_LOADING:
			return {
				...state,
				isLoading: true,
			}

		case END_LOADING:
			return {
				...state,
				isLoading: false,
			}

		default:
			return state
	}
}

export default usersReducer
