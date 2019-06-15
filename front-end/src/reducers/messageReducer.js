import { SAY_OK } from '../actions/messageAction.js'

export default (state = 'hello', action) => {
  switch(action.type) {
    case SAY_OK:
      console.log(action)
      return action.payload
    default:
      return state
  }
}
