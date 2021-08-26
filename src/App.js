import React from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import User from './store/reducer/User'
import Ingredients from './Pages/Ingredients/ingredients'
import Nutrition from './Pages/Nutritions/Nutrition'

const App = () => {

const store=createStore(User)
  return (
    <Provider store={store}>
       <Router>
         <Switch>
           <Route path='/' exact component={Home}/>
           <Route path='/ingredients' exact component={Ingredients}/>
           <Route path='/nutrients' exact component={Nutrition}/>
         </Switch>
       </Router>
       </Provider>
  )
}
export default App
