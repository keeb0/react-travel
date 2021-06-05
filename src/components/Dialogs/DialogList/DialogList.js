import PropTypes from 'prop-types'
import DialogItem from './DialogItem/DialogItem'
import s from './DialogList.module.css'

const DialogList = ({ dialogList }) => {
	const dialogItems = dialogList.map(dialog => (
		<DialogItem key={dialog.id} dialog={dialog} />
	))

	return <div className={s.dialog_list}>{dialogItems}</div>
}

DialogList.propTypes = {
	dialogList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default DialogList
