import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux' 
import store from './store'
import Index from './pages/Index'
import Other from './pages/Other'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <Link to="/">index</Link>
            <Link to="/other">other</Link>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/other" exact component={Other} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
