import React from 'react';
import './App.css';
import {
	Route,
	Switch
} from 'react-router-dom'
import Index from './view/Index.js'
import Login from './view/Login.js'
import Showlist from './view/Showlist.js'
import Detail from './view/Detail.js'
import Thelist from './view/Thelist.js'
function App() {
  return (
    <div className="App">
		<Switch>
			<Route path={"/login"} component={Login}></Route>
			<Route path={"/showlist"} component={Showlist}></Route>
			<Route path={"/detail"} component={Detail}></Route>
			<Route path={"/thelist"} component={Thelist}></Route>
			<Route path={"/"} component={Index}></Route>
		</Switch>
    </div>
  );
}

export default App;
