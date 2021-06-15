import { ADD_NEW_POST, UPDATE_NEW_POST_TEXT } from './types'

const initialState = {
	postList: [
		{ id: 1, text: 'Why nobody loves me?' },
		{ id: 2, text: 'Im learning React' },
		{ id: 3, text: "I love it. It's cool" },
	],
	newPostText: '',
}

const profileReducer = (state = initialState, action) => {
	const stateCopy = { ...state }
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT:
			stateCopy.newPostText = action.newText
			return stateCopy

		case ADD_NEW_POST:
			const newPostText = state.newPostText
			const newPost = {
				id: Date.now(),
				text: newPostText,
			}

			stateCopy.postList = state.postList
			stateCopy.postList.push(newPost)
			stateCopy.newPostText = ''
			return stateCopy
		default:
			return state
	}
}

export default profileReducer