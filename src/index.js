import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import { fetchCatGifs } from './actions'
import './index.css'
import App from './App'
import About from './About'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SiteNav from "./components/SiteNav";

const store = configureStore();
window.store = store;

store.dispatch(fetchCatGifs());


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <header>
          <SiteNav />
        </header>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
