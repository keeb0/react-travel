import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Context from './Context'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Advertisement from './components/Advertisement/Advertisement'
import Dialogs from './components/Dialogs/Dialogs'

function App({ state, dispatch }) {
	return (
		<Context.Provider value={{ userSigned: state.userSigned }}>
			<BrowserRouter>
				<div>
					<Header userSigned={state.userSigned} />
					<div className="main-wrapper">
						<Navbar />
						<div className="main-wrapper-content">
							<Switch>
								<Route path="/advertisment" component={Advertisement} />
								<Route
									path="/messages"
									render={() => (
										<Dialogs state={state.dialogsPage} dispatch={dispatch} />
									)}
								/>
								<Route
									path="/profile"
									render={() => (
										<Profile state={state.profilePage} dispatch={dispatch} />
									)}
								/>
								<Route path="/login" component={Login} />
								<Route exact path="/" component={Home} />
							</Switch>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</Context.Provider>
	)
}

export default App
