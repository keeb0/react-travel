import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Context from './Context'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Advertisement from './components/Advertisement/Advertisement'

function App() {
	const [userSigned, setUserSigned] = useState(false)

	return (
		<Context.Provider value={{ userSigned }}>
			<BrowserRouter>
				<div>
					<Header userSigned={userSigned} />
					<div className="main-wrapper">
						<Navbar />
						<div className="main-wrapper-content">
							<Switch>
								<Route path="/advertisment" component={Advertisement} />
								<Route path="/profile" component={Profile} />
								<Route path="/login" component={Login} />
								<Route path="/" component={Home} />
							</Switch>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</Context.Provider>
	)
}

export default App
