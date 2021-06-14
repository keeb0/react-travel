import s from './Header.module.css'
import PropTypes from 'prop-types'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import NavigationItem from './Navigation/NavigationItem/NavigationItem'

const Header = () => {
	return (
		<div className={s.header_container}>
			<header className={`${s.header} container`}>
				<Logo />
				<Navigation />
				<div className={s.login}>
					<NavigationItem navItem={{ title: 'Войти', link: '/login' }} />
				</div>
			</header>
		</div>
	)
}

export default Header
