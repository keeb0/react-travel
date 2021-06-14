import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import dialogsReducer from './dialogs/dialogs-reducer'
import profileReducer from './profile/profile-reducer'
import usersReducer from './users/users-reducer'

const rootReducer = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	users: usersReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
