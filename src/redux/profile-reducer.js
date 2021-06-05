import Profile from '../components/Profile/Profile'

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_NEW_POST = 'ADD_NEW_POST'

const initialState = {
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
			state.newPostText = action.newText
			return state

		case ADD_NEW_POST:
			const newPostText = state.newPostText

			if (!newPostText.trim()) {
				throw new Error('new post text must be not empty')
			}

			const newPost = {
				id: Date.now(),
				text: newPostText,
			}
			state.postList.push(newPost)
			state.newPostText = ''
			return state
		default:
			return state
	}
}

export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})

export const addNewPostActionCreator = () => ({
	type: ADD_NEW_POST,
})

export default profileReducer
