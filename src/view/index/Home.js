import React, {Component} from 'react';
import '../../assets/css/home.css'
import {connect} from 'react-redux'
import { Carousel } from 'element-react';
import 'element-theme-default';
import header1 from '../../assets/img/header1.png'
import header3 from '../../assets/img/header3.png'
import newsCreator from '../../store/actionCreator/home/index.js'
 class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
		};
    }
	async componentDidMount(){
		this.props.getClassify()
		// console.log(this.props)
	}
    render() {
		// console.log(this.props.classify_list)
        return (
		<div>
			{/* 头部 */}
			<header>
				<div><img src={header1}/>全国</div>
				<div>
					<input type="text" placeholder={"搜索热门演出"}/>
				</div>
				<div><img src={header3}/></div>
			</header>
			{/* 轮播图 */}
			<div className="demo-3 medium">
				<Carousel interval="5000" arrow="always">
					{
						this.props.slide_list.map((v,index) => {
							return (
								<Carousel.Item key={index}>
									<img className={'el-carousel-img'} src={v.image_url}/>
								</Carousel.Item>
							)
						})
					}
				</Carousel>
			</div>
			{/* 演出列表分类 */}
			<div className="main">
				<ul>
					{
						this.props.classify_list.map(v=>(
							<li onClick={()=>{
								if(v.id<5){
									this.props.history.push({pathname:"/showlist",state:{category_id:v.category_id}})
								}
							}} key={v.id} ><img src={v.pic}/><p>{v.name}</p></li>
						))
					}
				</ul>
			</div>
			{/* 会员轮播图 */}
			<div className={"home-vip"}>
				<p className={"vip-header"}>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAABd1BMVEUAAADvz6743L/22rz/6M/43cDpx6L/6M7w0bD43sHqx6T848ny1LTryKX33L//6M/z1rfryab017nsyqf/6M/538P+587tzKn95cv95cv/5872273uzav+5s3oxaD+5s3vz67pxqH95cr95crtzKnx0rLqx6T+5s3vzq3ryabw0bDtzKnx0rLx0rLoxJ/oxJ/95cz12bvsy6j12bv/6M/sy6jtzKrtzKruzq3oxaDoxJ/uzq3w0bDpx6Ly1LTryKX01rf/6M9HJwj95Mr017jtzKnsyqfryKX+5s3+5cz33L/227343sH12bv538P64cXy1LTuzavx0rLw0bDvz6774sfpxqBIKAnpx6KPclTix6uPclVXNxjmy7DKro+1mHyTdljw1LjlzLLfw6bYvaLNspSqi2uXeFp8XkB3WTtsTS5gQCJfPyBZOhtLKwzmzbPqy6vgxqjUuJrIqIjDpoi5noKylXaihWeegmWOcFKQcFCDY0RnSCn+eriUAAAAQXRSTlMA/g4J+hv5A/n48/Lq6uTh4eDS0s7JxrGwqI2Kh21qaVtbT0pCNzcwJBwUBfXz6uTNyMjBv7+kmHd2cGpNTCwrAhUStP0AAAG1SURBVDjLjdAHU9tAEAXgZ8uF3ktooff03hOtSXMhDoYowhjTAoQQ0nt+PLuyZOmwJPhmpNvZfXM7c7DND3XF9BqxruEkFNEePcANDV7n9EB98BjTQ4x7FreGBVujcPTrofphm469CPSJv9g0LMkrLwNt0Rb/e55ADKWClagkxzBYvNHpvieiox9S/Sa2lioXi1Qs7qRSjXF5whXH4kce70u1ecTV3krZNMk0d7jRB4y9csmVB1JscPEhw8UqrVZG4+hedP2RhXxuG0TGO+lwsDLqRn3W9Ys4kM5m9/ncqLS+2KN6tKRdZWKl9Los3kwrWjCQcUmCvub+y+KMagDa1VzVNrHvP2VxTnVdA+Y6Fhx5gzO7a0SHhQVFRxQs3lZtyENyzlhXc21xWB415W0HZDHziqYZ2CYvLFX8I3H4ecnr4iSqHtQVLHvEjG8Fr7oJeIxElsUusb/LXpERKO5EAtzHCYOvfQ2ixq2nPm6j1nxvba43CR/atWcn3NTga65TzXVGEWC2/blH+ywCPW52c80zCDHV4OQaphDqYeKtJTGBU4y+EYlRnOquBM/jDO5dvuSTOwZ3nQUiwxrMfwAAAABJRU5ErkJggg=="></img>
					<span className={"vip-header-left"}>会员专享折扣</span>
					<div className={"vip-header-right"}>
						99元/年{">"}
					</div>
				</p>
				<div className={"vip-bottom"}>
					<div className="demo-2 medium">
						<Carousel indicatorPosition="outside">
							{
							this.props.vip_list.map(v => {
								return (
								<Carousel.Item key={v.schedular_id}>
									<div className={"vip-bottom-move"} onClick={()=>{
										this.props.history.push({pathname:"/detail",state:{schedular_id:v.schedular_id}})
									}}>
										<img src={v.pic}/>
										<h4>{v.schedular_name}</h4>
										<p>
											<span className={"vip-bottom-move-left"}>5</span>折起
											<span className={"vip-bottom-move-right"}>立即抢购</span>
										</p>
									</div> 
								</Carousel.Item>
								)
							})
							}
						</Carousel>
					</div>
				</div>
			</div>
			{/* 广告充99 */}
			<div className="adv">
				{
					this.props.advert1.map(v=>(
						<img key={v.ad_id} src={v.pic} />
					))
				}
			</div>
			<div className="breadcrumb">
				<h3>热门演出</h3>
				<p onClick={()=>{
								this.props.history.push({pathname:"/showlist",state:{category_id:0}})
							}} >全部></p>
			</div>
			<div className="hot-moveList">
				{
					this.props.hot_list.map(v=>(
						<div key={v.schedular_url} className={"hot-moveList-box"} onClick={()=>{
							const url=v.schedular_url.split("/")
							
							this.props.history.push({pathname:"/detail",state:{schedular_id:url[url.length-1]}})
						}}>
							<img className={"hot-moveList-img"} src={v.pic}/>
							<p>{v.show_name}</p>
						</div>
					))
				}
			</div>
			<div className="breadcrumb">
				<h3>巡回演出</h3>
				<p>全部></p>
			</div>
			{
				this.props.back_list.map(v=>(
					<div className="perform" key={v.id}>
						<div className="perform_left">
							<img src={v.mobile_col_img}/>
						</div>
						<div className="perform_right" >
							<p>{this.$filters.date(v.start_time)}-{this.$filters.date(v.end_time)}</p>
							<h4>{v.name}</h4>
							<span className="redcolor">{this.$filters.currency(v.min_price)}</span><span>起</span>
								<p className="line">
									<span className="redcolor">{v.citys.length}</span><span className="graycolor">城巡演</span>
									{
										v.citys.map((item,i)=>(
											<span key={i}>{item.name} |</span>
										))
									}
								</p>
						</div>
					</div>
					
				))
			}
				
			<div className="breadcrumb">
				<h3>舞台剧</h3>
				<p>></p>
			</div>
			<div className="theatre" key={this.props.onlseach.sche_id} onClick={()=>{
										this.props.history.push({pathname:"/detail",state:{schedular_id:this.props.onlseach.sche_id}})
									}}>
				<div className="theatre_left">
					<img src={this.props.onlseach.pic} />
				</div>
				<div className="theatre_right">
					<span className="sizebig">{this.props.onlseach.display_show_time}</span><span> {this.props.onlseach.week}</span>
					<h4>{this.props.onlseach.schedular_name}</h4>
					<span>{this.props.onlseach.city_name}</span><span>|</span><span>{this.props.onlseach.venue_name}</span>
				</div>
			</div>
			<div className="concent">
				<ul className="box">
				{
					this.props.seachlist.map(v=>(
						<li key={v.sche_id} onClick={()=>{
							this.props.history.push({pathname:"/detail",state:{schedular_id:v.sche_id}})
						}}>
							<div className="">
								<img src={v.pic} />
								<p>{v.schedular_name}</p>
								<span className="redcolor">￥{v.low_price}起</span>
							</div>
						</li>
					))
				}
				</ul>
			</div>
			<div className="breadcrumb">
				<h3>为你推荐</h3>
			</div>
			<div className="recommend">
			{
				this.props.recommend.map(v=>(
					<div className="recommend_box" key={v.schedular_id} onClick={()=>{
						this.props.history.push({pathname:"/detail",state:{schedular_id:v.schedular_id}})
					}}>
						<img src={v.pic} />
						<div className={"recommend_box-foot"}>
							<span className="location">{v.city_name}</span>
							<h3><img src="https://image.juooo.com/upload/i.png"></img>{v.name}</h3>
							<p>{v.start_show_time}</p>
							<span className={"recommend_box-price"}>￥{v.min_price}起</span><br/>
							{
								v.support_desc.map((item,i)=>(
									<span key={i} className="redcolor">{item}</span>
								))
							}
						</div>
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
		classify_list:state.home.classify_list,
		hot_list:state.home.hot_list,
		back_list:state.home.back_list,
		advert1:state.home.advert1,
		seachlist:state.home.seachlist,
		onlseach:state.home.onlseach,
		recommend:state.home.recommend,
		slide_list:state.home.slide_list,
		vip_list:state.home.vip_list
	}
}
function mapDispatchToProps(dispatch){
	return {
		getClassify(){
			dispatch(newsCreator.getList())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);


