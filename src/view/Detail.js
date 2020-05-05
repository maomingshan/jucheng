import React, {Component} from 'react';
import '../assets/css/detail.css'
import house from '../assets/img/house.png'
import kefu from '../assets/img/kefu.png'
import {connect} from 'react-redux'
import newsCreator from '../store/actionCreator/detail/index.js'
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    componentDidMount(){
        this.props.DetailList(this.props.location.state.schedular_id)
        // console.log()
    }
    render() {
        // console.log(this.props.detail_rec)
        return (
            <div className={"detail-list"}>
                <div className={"detail-header"}>
                    <p>
                        <span onClick={()=>{
								this.props.history.go(-1)
							}}>{"<"}</span>
                        演出详情
                        <img src={house}/>
                    </p>
                    <div className={"detail-header-content"}>
                        <img src={this.props.detail_list.pic}/>
                        <h4>{this.props.detail_list.show_name}</h4>
                        <h2>￥{this.props.detail_list.price_range}</h2>
                    </div>
                </div>
                <p className={"detail-choose"} >
                    {
                        this.props.detail_support.map((v,index)=>(
                             <span key={index}>{v}</span>
                        ))
                    }
                    
                </p>
                <div className={"show-time"}>
                    <h4>
                        <span>
                            {this.props.detail_time.show_time_start_display}-
                            {this.props.detail_time.show_time_end_display}
                        </span>
                        {">"}
                    </h4>
                <p>{this.props.city.city_name} | {this.props.detail_venue.venue_name}</p>
                <div>{this.props.detail_venue.venue_address}</div>
                </div>
                <div className={"detail-content"}>
                        <div className={"detail-vip"}>
                            <div className={"vip-box"}>
                                <span>橙PLUS卡</span>
                                <span>开通送200 最高省109.9元</span>
                                <span>立即开卡{">"}</span>
                            </div>
                        </div>
                        <div className={"detail-buy"}>
                            <div className={"Discount"}>
                                <span>优惠：</span>
                                <span>折扣</span>
                                <span>早鸟优惠，指定票价9折</span>
                                <img src={"https://m.juooo.com/static/img/more.2ce7873.png"}/>
                            </div>
                            <div className={"buy-vip"}>
                                <span>VIP+:</span>
                                <span>V+会员享</span>
                                <span>国内免邮+双倍积分</span>
                                <span>></span>
                            </div>
                            <div className={"buy-in"}>
                                <span>入场：</span>
                                <div>{this.props.detail_tipc.desc}</div>
                            </div>
                            
                        </div>
                        <div className={"show-introduce"}>
                             <h3>演出介绍</h3>
                        </div>
                        <div className={"detail-tip"}>
                            <h3>温馨提示<span>></span></h3>
                            <p>
                                <span></span>{this.props.show_notice1.title}
                                <span></span>{this.props.show_notice2.title}
                                <span></span>{this.props.show_notice3.title}
                                <span></span>{this.props.show_notice4.title}
                            </p>
                        </div>
                        <div className={"detail-about"}>
                            <h3>相关推荐</h3>
                            {
                                this.props.detail_rec.map(v=>(
                                    <div className={"detail-about-list"} key={v.schedular_id} onClick={()=>{
                                        this.props.DetailList(v.schedular_id)
                                    }}>
                                        <img src={v.pic}/>
                                        <span className={"start_show_time"}>{v.start_show_time}</span>
                                        <h4>{v.name}</h4>
                                        <p>{v.city_name} | {v.venue_name}</p>
                                        <div className={"detail-about-list-min"}>
                                            {
                                                v.support_desc.map((item,i)=>(
                                                    <span key={i}>{item}</span>
                                                ))
                                            }
                                        </div>
                                        <span className={"detail-about-list-maney"}>￥{v.max_price}起</span>
                                    </div>
                                ))
                            }
                            <button onClick={()=>{
								this.props.history.push({pathname:"/showlist",state:{category_id:this.props.detail_listcate_parent_id}})
							}}>查看更多演出 ></button>
                        </div>
                </div>
                <div className={"detail-footer"}>
                    <div className={"detail-footer-left"}>
                        <img src={kefu}/>
                        客服
                    </div>
                    <div className={"detail-footer-right"}>
                            选座购买
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    // console.log(state)
	return {
        detail_list:state.detail.detail_list,
        detail_tipc:state.detail.detail_tipc,
        detail_support:state.detail.detail_support,
        detail_venue:state.detail.detail_venue,
        city:state.detail.city,
        detail_time:state.detail.detail_time,
        show_notice1:state.detail.show_notice1,
        show_notice2:state.detail.show_notice2,
        show_notice3:state.detail.show_notice3,
        show_notice4:state.detail.show_notice4,
        detail_rec:state.detail.detail_rec
	}
}
function mapDispatchToProps(dispatch){
	return {
		DetailList(id){
			dispatch(newsCreator.detailList(id))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);


