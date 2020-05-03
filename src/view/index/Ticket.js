import React, {Component} from 'react';
import '../../assets/css/ticket.css'
export default class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
				<div>
					<div className="Ticket-header">
						<span>票夹</span>
						<img src="https://m.juooo.com/static/img/more.2ce7873.png" />
					</div>
					<div className="down-box">
						<img src="https://m.juooo.com/static/img/ticket_empty.cf4b072.png" />
						<p>暂无电子票</p>
						<button onClick={()=>{
							this.props.history.push({pathname:"/login"})
						}}>登录</button>
					</div>
					
				</div>
            </div>
        )
    }
}
