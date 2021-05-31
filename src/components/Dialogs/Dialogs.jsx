import DialogList from './DialogList/DialogList'
import s from './Dialogs.module.css'
import Messages from './Messages/Messages'
import PropTypes from 'prop-types'

const Dialogs = ({ state, dispatch }) => {
	return (
		<div className={s.dialogs}>
			<DialogList dList={state.dialogList} />
			<Messages mList={state.messageList} newMessageText={state.newMessageText} dispatch={dispatch} />
		</div>
	)
}

Dialogs.propTypes = {
	state: PropTypes.object.isRequired,
}

export default Dialogs
