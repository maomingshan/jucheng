import React, {Component} from 'react';
import {
	Switch,
	Route,
	Redirect
} from "react-router-dom"
import GuardRouter from './GuardRouter'
// import router from '../../router/index.js'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
               <Switch>
					{
						this.props.router.map(v=>(
							<Route key={v.path} exact={v.exact} path={v.path} render={()=><GuardRouter {...v}></GuardRouter>}></Route>
						))
						
					}
					<Redirect to={"/error"} from="*"></Redirect>
               </Switch> 
            </div>
        )
    }
}