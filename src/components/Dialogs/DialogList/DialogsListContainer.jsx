import { connect } from 'react-redux'
import DialogList from './DialogList'

const mapStateToProps = state => ({ dialogList: state.dialogsPage.dialogList })

const DialogsListContainer = connect(mapStateToProps)(DialogList)

export default DialogsListContainer
