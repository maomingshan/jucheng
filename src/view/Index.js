import React, {Component} from 'react';
import {
	NavLink
} from 'react-router-dom'
// import Home from './index/Home.js'
// import Theater from './index/Theater.js'
// import Ticket from './index/Ticket.js'
// import My from './index/My.js'
import MyRouter from '../components/common/MyRouter.js'
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
	componentDidMount(){
		// console.log(this.props)
	}
    render() {
		// console.log(this)
        return (
            <div>
                <nav className={"nav"}>
                	<NavLink className={"App-link"} exact activeClassName={"App-active"} to={"/"} exact>
						<i className={"iconfont icon-ziyuan"}></i>
						首页
					</NavLink>
					<NavLink className={"App-link"}  activeClassName={"App-active"} to={"/theater"}>
						<i className={"iconfont icon-yingyuan"}></i>
						剧院
					</NavLink>
					<NavLink className={"App-link"}  activeClassName={"App-active"} to={"/ticket"}>
						<i className={"iconfont icon-dianyingpiao"}></i>
						票夹
					</NavLink>
					<NavLink className={"App-link"}  activeClassName={"App-active"} to={"/my"}>
						<i className={"iconfont icon-ziyuan1"}></i>
						我的
					</NavLink>
                </nav>
				<MyRouter router={this.props.childrends}></MyRouter>
				{/*
					<Switch>
						<Route path={'/'} exact component={Home}></Route>
						<Route path={'/theater'} component={Theater}></Route>
						<Route path={'/ticket'} component={Ticket}></Route>
						<Route path={'/my'} component={My}></Route>
					</Switch>
				*/}
            </div>
        )
    }
}