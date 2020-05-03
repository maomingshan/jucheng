import React, {Component} from 'react';
import '../assets/css/showlist.css'
import {connect} from 'react-redux'
import newsCreator from '../store/actionCreator/showlist/index.js'

import img from '../assets/img/25.jpg'
// import List from './showlist/showlist.js'
import dizhi from "../assets/img/dizhi.png";
class Showlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
			index:0
		};
	}
	async componentDidMount(){
		this.props.showList(this.props.location.state.category_id)
	}
    render() {
		console.log(this.props.show_type)
        return (
            <div>
                <div className={"Showlist-header"}>
					<span onClick={()=>{
								this.props.history.go(-1)
							}}>{"<"}</span>
					演出
					<img src={"https://m.juooo.com/static/img/more.2ce7873.png"}/>
				</div>
				<div className={"Showlist-showtype"}>
					<ul className={"Showlist-movebox"}>
						<li className={"Showlist-movebox-min"} onClick={()=>{
									this.props.showList(0)
									this.setState({
										index:0
									})
								}}>
							全部
						</li>
						{
							this.props.show_type.map(v=>(
								<li className={this.state.index===v.id?"Showlist-movebox-min show-active":"Showlist-movebox-min"} key={v.id} onClick={()=>{
									this.props.showList(v.id)
									this.setState({
										index:v.id
									})
								}}>
									{v.name}
								</li>
							))
							
						}
						<li className={"Showlist-movebox-min endall"}>
							全国
							<img src={dizhi}/>
						</li>
					</ul>
				</div>
				<div className={"Showlist-footList"}>
					{
						this.props.show_list.map(v=>(
							<div className={"Showlist-footList-list"} key={v.show_id}>
								<img src={v.pic}/>
								<h3><img style={{display:v.method_icon?'block':'none'}} src={v.method_icon}/>{v.name}</h3>
								<span className={"footList-sp1"}>{v.start_show_time}{v.show_time_bottom}</span>
								<p className={"footList-p1"}>${v.min_price}起</p>
								<p className={"footList-p2"}>
									{
										v.support_desc.map((item,i)=>(
											<span className={"footList-sp2"} key={i}>{item}</span>
										))
									}
								</p>
								<span className={"footList-sp3"}>{v.city_name}</span>
							</div>
						))
					}
				</div>
            </div>
        )
    }
}

function mapStateToProps(state){
	// console.log(state)
	return {
		show_list:state.show.show_list,
		show_type:state.show.show_type
	}
}
function mapDispatchToProps(dispatch){
	return {
		showList(id){
			dispatch(newsCreator.getShowList(id))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Showlist);

