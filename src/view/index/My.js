import React, {Component} from 'react';
import '../../assets/css/my.css'
import shezhi from "../../assets/img/shezhi.png"
import dingdan from '../../assets/img/dingdan.png'
import dizhi from '../../assets/img/dizhi.png'
import goupiaoren from '../../assets/img/goupiaoren.png'
import kefu from '../../assets/img/kefu.png'
import piaojia from '../../assets/img/piaojia.png'
import qianbao from '../../assets/img/qianbao.png'
import yijian from '../../assets/img/yijian.png'

export default class My extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={"my"}>
				<div className="my-header">
					<img className={"my-header-img1"} src={shezhi}/>
					<div className={"my-header-box"}>
						<img className={"my-header-img2"} src={"https://m.juooo.com/static/img/logo-user.8413cbf.png"}/>
						<span>注册|登录</span><br/>
						<span>请点击登录></span>
						<p className={"my-header-box-vip"}>普通会员</p>
						<ul className={"my-header-box-item"}>
							<li>
								<div className={"my-header-box-item-li"}>
									<p>0</p>
									<p>账户余额</p>
								</div>
							</li>
							<li>
								<div className={"my-header-box-item-li"}>
									<p>0</p>
									<p>积分</p>
								</div>
							</li>
							<li>
								<div className={"my-header-box-item-li"}>
									<p>0</p>
									<p>优惠券</p>
								</div>
							</li>
							<li>
								<div className={"my-header-box-item-li"}>
									<p>立即开通</p>
									<p>橙PLUS卡</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<img className={"my-vip-img"} src={"https://m.juooo.com/static/img/ad.411f5e6.png"}/>
				<div className={"my-div"}>
					<div className={"my-div-box"}>
						<img src={dingdan}/>
						<p>我的订单</p>
					</div>
					<div className={"my-div-box"}>
						<img src={piaojia}/>
						<p>我的票夹</p>
					</div>
					<div className={"my-div-box"}>
						<img src={qianbao}/>
						<p>我的卡包</p>
					</div>
				</div>
				<div className={"my-div"}>
					<div className={"my-div-box"}>
						<img src={goupiaoren}/>
						<p>实名购票人</p>
					</div>
					<div className={"my-div-box"}>
						<img src={dizhi}/>
						<p>收货地址</p>
					</div>
					<div className={"my-div-box"}>
						<img src={yijian}/>
						<p>意见反馈</p>
					</div>
					<div className={"my-div-box"}>
						<img src={kefu}/>
						<p>客服帮助</p>
					</div>
				</div>
            </div>
        )
    }
}
