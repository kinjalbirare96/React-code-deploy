import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './style.css';
import Home from './Home';
import ItemDetails from './ItemDetails';

function App() {
   console.log(this)
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={ItemDetails} />
        </div>
      </Router>
   </div>
  );
}

export default App;
