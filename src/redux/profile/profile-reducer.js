import { ADD_NEW_POST, SET_USER_DATA, UPDATE_NEW_POST_TEXT } from './types'

const initialState = {
	user: {},
	postList: [
		{ id: 1, text: 'Why nobody loves me?' },
		{ id: 2, text: 'Im learning React' },
		{ id: 3, text: "I love it. It's cool" },
	],
	newPostText: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			}

		case ADD_NEW_POST:
			const newPost = {
				id: Date.now(),
				text: state.newPostText,
			}

			return {
				...state,
				postList: [...state.postList, newPost],
				newPostText: '',
			}

		case SET_USER_DATA:
			return {
				...state,
				user: action.userProfile,
			}

		default:
			return state
	}
}

export default profileReducer
