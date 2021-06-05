import dialogsReducer from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

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
		sidebar: {},
		userSigned: false,
	},

	get state() {
		return this._state
	},

	_callSubscriber: () => console.log('App rendered'),
	setSubscriber(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber()
	},
}

export default store
