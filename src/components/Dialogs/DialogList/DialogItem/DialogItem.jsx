import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.css'
import PropTypes from 'prop-types'

const DialogItem = ({ dialog }) => {
	const path = `/messages/${dialog.id}`
	
	return (
		<div className={s.dialog}>
			<NavLink to={path} activeClassName={s.active}>
				{dialog.title}
			</NavLink>
		</div>
	)
}

DialogItem.propTypes = {
	dialog: PropTypes.object.isRequired,
}

export default DialogItem
