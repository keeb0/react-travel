import { createStore, combineReducers } from 'redux'
import dialogsReducer from './dialogs/dialogs-reducer'
import profileReducer from './profile/profile-reducer'

const rootReducer = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
})

const store = createStore(rootReducer)

export default store
