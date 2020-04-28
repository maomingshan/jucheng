import React from 'react';
import './App.css';
import {
	Route,
	Switch
} from 'react-router-dom'
import Index from './view/Index.js'
import Login from './view/Login.js'

function App() {
  return (
    <div className="App">
		<Switch>
			<Route path={"/"} component={Index}></Route>
			<Route path={"/login"} component={Login}></Route>
		</Switch>
    </div>
  );
}

export default App;
