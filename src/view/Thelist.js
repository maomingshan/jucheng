import React, {Component} from 'react';
import '../assets/css/thelist.css'
import {connect} from 'react-redux'
import newsCreator from '../store/actionCreator/thelist/index.js'

class Thelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        this.props.thelistList(this.props.location.state.theatre_id)
    }
    render() {
        // console.log(this.props.the_more)
        return (
            <div className={"thelist"}>
                <div className={"the-header"}>
                    <span onClick={()=>{
                        this.props.history.go(-1)
                    }}>{"<"}</span>
                    <img className={"header-title-img"} src={this.props.the_header.theatre_pic}/>
                    <div className={"the-header-right"}>
                        <h3>{this.props.the_header.theatre_name}</h3>
                        <div>{this.props.the_header.sch_num}场在售演出</div>
                    </div>
                    <p>{this.props.the_header.theatre_address}</p>
                    <div className={"header-loc-img"}></div>
                </div>
                <div className={"the-content"}>
                    <h3>热门演出</h3>
                    {
                        this.props.the_more.map(v=>(
                            <div className={"the-content-list"} key={v.show_id} onClick={()=>{
                                this.props.history.push({pathname:"/detail",state:{schedular_id:v.schedular_id}})
                            }}>
                                <img src={v.pic}/>
                                <div className={"the-content-list-right"}>
                                    <p className={"content-list-right-time"}><span>{v.start_show_time}</span> 周日</p>
                                    <div className={"content-list-name"}>{v.name}</div>
                                    <p className={"content-list-right-loc"}>{v.city_name} | {v.venue_name}</p>
                                    <div className={"content-list-tick"}>
                                        {
                                            v.support_desc.map((item,i)=>(
                                                <span key={i}>{item}</span>
                                            ))
                                        }
                                        
                                    </div>
                                    <p className={"content-list-money"}>
                                    <span>￥{v.min_price}</span>起
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                    <p className={"the-content-notmore"}>没有更多了</p>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
	// console.log(state)
	return {
        the_header:state.thelist.the_header,
        the_more:state.thelist.the_more
	}
}
function mapDispatchToProps(dispatch){
	return {
		thelistList(id){
			dispatch(newsCreator.getTheList(id))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Thelist);


