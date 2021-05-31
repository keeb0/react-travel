const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_NEW_POST = 'ADD_NEW_POST'

const store = {
	_state: {
		dialogsPage: {
			dialogList: [
				{ id: 1, title: 'Mark', message: 'Hi' },
				{ id: 2, title: 'Tom', message: 'Hi' },
				{ id: 3, title: 'Masha', message: 'Hi' },
			],
			messageList: [
				{ id: 1, text: 'hello', mine: true },
				{ id: 2, text: 'hi' },
				{ id: 3, text: 'how are you?', mine: true },
				{ id: 4, text: 'good' },
				{ id: 5, text: 'and you?' },
			],
			newMessageText: '',
		},
		profilePage: {
			postList: [
				{ id: 1, text: 'Why nobody loves me?' },
				{ id: 2, text: 'Im learning React' },
				{ id: 3, text: "I love it. It's cool" },
			],
			newPostText: '',
		},
		userSigned: false,
	},

	_callSubscriber: () => console.log('App rendered'),
	setSubscriber(observer) {
		this._callSubscriber = observer
	},

	// setNewMessage(text) {
	// 	this.state.dialogsPage.newMessage = text
	// 	this._callSubscriber()
	// },
	// sendMessage(text) {
	// 	if (typeof text === 'string' && !text.trim()) {
	// 		throw new Error('text must be not empty string')
	// 	}

	// 	const newMessage = {
	// 		id: Date.now(),
	// 		text: text,
	// 		mine: true,
	// 	}

	// 	this.state.dialogsPage.messageList.push(newMessage)
	// 	this.state.dialogsPage.newMessage = ''

	// 	this._callSubscriber()
	// },

	dispatch(action) {
		switch (action.type) {
			case 'UPDATE-NEW-MESSAGE-TEXT':
				this._state.dialogsPage.newMessageText = action.text
				this._callSubscriber()
				break

			case 'SEND-MESSAGE':
				const { text } = action
				if (typeof text === 'string' && !text.trim()) {
					throw new Error('text must be not empty string')
				}

				const newMessage = { id: Date.now(), text, mine: true }

				this._state.dialogsPage.messageList.push(newMessage)
				this._state.dialogsPage.newMessageText = ''

				this._callSubscriber()
				break

			case UPDATE_NEW_POST_TEXT:
				this._state.profilePage.newPostText = action.newText
				this._callSubscriber()
				break

			case ADD_NEW_POST:
				const newPostText = this._state.profilePage.newPostText

				if (!newPostText.trim()) {
					throw new Error('new post text must be not empty')
				}

				const newPost = {
					id: Date.now(),
					text: newPostText,
				}
				this._state.profilePage.postList.push(newPost)
				this._state.profilePage.newPostText = ''
				this._callSubscriber()
				break

			default:
				throw new Error('action type is undefined')
		}
	},

	get state() {
		return this._state
	},
}

export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})

export const addNewPostActionCreator = () => ({
	type: ADD_NEW_POST,
})

export default store
