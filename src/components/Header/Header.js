import s from './Header.module.css'
import PropTypes from 'prop-types'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import NavigationItem from './Navigation/NavigationItem/NavigationItem'
import defaultProfilePhoto from '../../assets/users/img/person-icon.png'

const Header = ({ user }) => {
	const login = { title: 'Войти', link: '/login' }
	const logout = { title: 'Выйти', link: '/logout' }
	return (
		<div className={s.header_container}>
			<header className={`${s.header} container`}>
				<Logo />
				<Navigation />
				{/* <img src={defaultProfilePhoto} style={{ height: '1rem' }} /> */}
				<div className={s.login}>
					<NavigationItem navItem={user.isAuth ? logout : login} />
				</div>
			</header>
		</div>
	)
}

export default Header
