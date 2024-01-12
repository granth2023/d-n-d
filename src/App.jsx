import { useState } from 'react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'

import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App></App>
    </Router>
  </React.StrictMode>
)

//components and pages
import Shop from './pages/Shop/Shop';

const App = () => {
  return (
    <main className="shop"> 
     <Shop />
     </main>
  )
}


  export default App 

  //what is a reservered keyword? return? calss? are built in components syntaxically different, how? lower case?
  
  //do user created components need to be capitalized? 

  //what must they include? a div? a react elemnt? 

  //can we use state to do conditional things? can we do it load things? how do we pass around state? do we use props ? how do we define state? the highest elemnt form taht state? 
  

  //dev depnedincies you don't need in production. 

  //when a list changes what mounts? 