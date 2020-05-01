import React, {Component} from 'react';
import {
	NavLink,
	Route
} from 'react-router-dom'
import Home from './index/Home.js'
import Theater from './index/Theater.js'
import Ticket from './index/Ticket.js'
import My from './index/My.js'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <nav className={"nav"}>
                	<NavLink className={"App-link"} exact activeClassName={"App-active"} to={"/"} exact>
						<div className="home"></div>
						首页
					</NavLink>
					<NavLink className={"App-link"}  activeClassName={"App-active"} to={"/theater"}>
						<div className="theater"></div>
						剧院
					</NavLink>
					<NavLink className={"App-link"}  activeClassName={"App-active"} to={"/ticket"}>
						<div className="wallet"></div>
						票夹
					</NavLink>
					<NavLink className={"App-link"}  activeClassName={"App-active"} to={"/my"}>
						<div className="My"></div>
						我的
					</NavLink>
                </nav>
				<Route path={'/theater'} component={Theater}></Route>
				<Route path={'/ticket'} component={Ticket}></Route>
				<Route path={'/my'} component={My}></Route>
				<Route path={'/'} exact component={Home}></Route>
            </div>
        )
    }
}