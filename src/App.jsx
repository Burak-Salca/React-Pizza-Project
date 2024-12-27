import { useState } from 'react'
import { Route, Switch  } from 'react-router-dom/cjs/react-router-dom.min'
import OrderPage from './pages/OrderPage'
import SuccessPage from './pages/SuccessPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </div>
  );
}

export default App

