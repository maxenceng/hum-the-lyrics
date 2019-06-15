import React from 'react'
import { connect  } from 'react-redux'
import Message from '../components/Message'

const mapStateToProps = ({ message }) => ({ message })

const render = ({ message }) => <Message text={message} />

export default connect(mapStateToProps, null)(render)
