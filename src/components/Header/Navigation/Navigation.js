import NavigationItem from './NavigationItem/NavigationItem'
import s from './Navigation.module.css'

function Navigation() {
	const navItems = [
		{ link: '/', title: 'Гланая' },
		{ link: '/', title: 'Портфолио' },
		{ link: '/', title: 'Контакты' },
		{ link: '/', title: 'О нас' },
	]

	return (
		<div className={s.navigation}>
			{navItems.map((navItem, index) => (
				<NavigationItem key={index} navItem={navItem} />
			))}
		</div>
	)
}

export default Navigation
