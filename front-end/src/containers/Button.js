import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions'
import Button from '../components/Button'

const render = ({ actions }) => <Button text="Redux OK ?" onClick={() => actions.messageAction('Redux OK')} />

export default connect(null, actions)(render)