import { bindActionCreators } from 'redux'

import messageAction from './messageAction'

const allActions = {
    messageAction,
}

export default dispatch => ({ actions: bindActionCreators(allActions, dispatch) })