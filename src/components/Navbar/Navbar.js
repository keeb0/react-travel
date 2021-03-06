import PropTypes from 'prop-types'
import s from './Navbar.module.css'
import NavbarItem from './NavbarItem/NavbarItem'

const Navbar = () => {
	const navbarObjs = [
		{ title: 'Messages', link: '/messages' },
		{ title: 'Profile', link: '/profile' },
		{ title: 'Users', link: '/users' },
	]

	return (
		<nav className={s.navbar}>
			{navbarObjs.map((navbarObj, index) => (
				<NavbarItem key={index} navbarObj={navbarObj} />
			))}
		</nav>
	)
}

export default Navbar
