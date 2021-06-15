import { TOGGLE_FOLLOWING, GET_USERS } from './types'

const initialState = {
	items: [],
	totalCount: 0,
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				items: action.newItems,
				totalCount: action.totalCount,
			}

		case TOGGLE_FOLLOWING:
			return {
				...state,
				items: state.items.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: !user.followed }
					}
					return user
				}),
			}

		default:
			return state
	}
}

export default usersReducer
