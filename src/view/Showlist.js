import React, {Component} from 'react';
import '../assets/css/showlist.css'
import img from '../assets/img/25.jpg'
// import List from './showlist/showlist.js'
import dizhi from "../assets/img/dizhi.png";
export default class Showlist extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
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
						<li className={"Showlist-movebox-min"}>
							123456
						</li>
						<li className={"Showlist-movebox-min"}>
							123456
						</li>
						<li className={"Showlist-movebox-min"}>
							123456
						</li>
						<li className={"Showlist-movebox-min"}>
							123456
						</li>
						<li className={"Showlist-movebox-min"}>
							123456
						</li>
						<li className={"Showlist-movebox-min"}>
							123456
						</li>
						<li className={"Showlist-movebox-min endall"}>
							全部
							<img src={dizhi}/>
						</li>
					</ul>
				</div>
				<div className={"Showlist-footList"}>
					<div className={"Showlist-footList-list"}>
						<img src={img}/>
						<h3><span>主办</span>年纪大健康的圣诞节是看电视时不是多喝点水你你家电脑上经典款</h3>
						<span className={"footList-sp1"}>2020-06-12</span>
						<p className={"footList-p1"}>$280起</p>
						<p className={"footList-p2"}>
							<span className={"footList-sp2"}>电子票</span>
							<span className={"footList-sp2"}>电子票</span>
							<span className={"footList-sp2"}>电子票</span>
						</p>
					</div>
					<div className={"Showlist-footList-list"}>
						<img src={img}/>
						<h3><span>主办</span>年纪大健康的圣诞节是看电视时不是多喝点水你你家电脑上经典款</h3>
						<span className={"footList-sp1"}>2020-06-12</span>
						<p className={"footList-p1"}>$280起</p>
						<p className={"footList-p2"}>
							<span className={"footList-sp2"}>电子票</span>
							<span className={"footList-sp2"}>电子票</span>
							<span className={"footList-sp2"}>电子票</span>
						</p>
					</div>
					<div className={"Showlist-footList-list"}>
						<img src={img}/>
						<h3><span>主办</span>年纪大健康的圣诞节是看电视时不是多喝点水你你家电脑上经典款</h3>
						<span className={"footList-sp1"}>2020-06-12</span>
						<p className={"footList-p1"}>$280起</p>
						<p className={"footList-p2"}>
							<span className={"footList-sp2"}>电子票</span>
							<span className={"footList-sp2"}>电子票</span>
							<span className={"footList-sp2"}>电子票</span>
						</p>
					</div>
					<div className={"Showlist-footList-list"}>
						<img src={img}/>
						<h3><span>主办</span>年纪大健康的圣诞节是看电视时不是多喝点水你你家电脑上经典款</h3>
						<span className={"footList-sp1"}>2020-06-12</span>
						<p className={"footList-p1"}>$280起</p>
						<p className={"footList-p2"}>
							<span className={"footList-sp2"}>电子票</span>
							<span className={"footList-sp2"}>电子票</span>
							<span className={"footList-sp2"}>电子票</span>
						</p>
					</div>
				</div>
				
				
				
            </div>
        )
    }
}