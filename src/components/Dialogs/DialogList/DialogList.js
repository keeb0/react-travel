import DialogItem from './DialogItem/DialogItem'
import s from './DialogList.module.css'
import PropTypes from 'prop-types'

const DialogList = ({ dList }) => {
	const dialogItems = dList.map(dialog => (
		<DialogItem key={dialog.id} dialog={dialog} />
	))
	
	return <div className={s.dialog_list}>{dialogItems}</div>
}

DialogList.propTypes = {
	dList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default DialogList
