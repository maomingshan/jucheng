import React, {Component} from 'react';
import '../../assets/css/home.css'
import {connect} from 'react-redux'
import { Button,Carousel } from 'element-react';
import 'element-theme-default';
import header1 from '../../assets/img/header1.png'
import header3 from '../../assets/img/header3.png'
import newsCreator from '../../store/actionCreator/home/index.js'

import img1 from '../img/0.jpg'
import img2 from '../img/1.jpg'
import img3 from '../img/2.jpg'
import img4 from '../img/3.jpg'
// import img from '../img/0.jpg'
 class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
			imgarr:[]
		};
    }
	async componentDidMount(){
		this.props.getClassify()
		// console.log(this.props)
		this.setState({
			imgarr:[img1,img2,img3,img4]
		})
	}
    render() {
		console.log(this.props.slide_list)
        return (
		<div>
			<header>
				<div><img src={header1}/>全国</div>
				<div>
					<input type="text" placeholder={"搜索热门演出"}/>
				</div>
				<div><img src={header3}/></div>
			</header>
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
			<div className="main">
				<ul>
					{
						this.props.classify_list.map(v=>(
							<li onClick={()=>{
								this.props.history.push({pathname:"/showlist",state:{category_id:v.category_id}})
							}} key={v.id} ><img src={v.pic}/><p>{v.name}</p></li>
						))
					}
				</ul>
			</div>
			<div className="adv">
				{
					this.props.advert1.map(v=>(
						<img key={v.ad_id} src={v.pic} />
					))
				}
			</div>
			<div className="breadcrumb">
				<h3>热门演出</h3>
				<p>全部></p>
			</div>
			<div className="hot-moveList">
				{
					this.props.hot_list.map(v=>(
						<div key={v.schedular_url} className={"hot-moveList-box"}>
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
			<div className="theatre" key={this.props.onlseach.sche_id}>
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
						<li key={v.sche_id}>
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
					<div className="recommend_box" key={v.schedular_id}>
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
		slide_list:state.home.slide_list
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