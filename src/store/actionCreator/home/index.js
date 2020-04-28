import ListType from '../../actionType/home/index.js'
import axios from 'axios'
function getclassify_list(payload){
	return{
		type:ListType.GET_FIRST_LIST,
		payload
	}
}
function gethotList(payload){
	return{
		type:ListType.HOT_LIST,
		payload
	}
}
function backList(payload){
	return{
		type:ListType.BACK_LIST,
		payload
	}
}
function advVlipimg(payload){
	return{
		type:ListType.ADV_VIP,
		payload
	}
}
function getSche(payload){
	return{
		type:ListType.SCHE_LIST,
		payload
	}
}
function getrecommend(payload){
	return{
		type:ListType.RECOM_LIST,
		payload
	}
}
export default {
	getList(dispatch){
		return async(dispatch)=>{
			const {data}=await axios.get("/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2")
			// console.log(data)
			const data1=await axios.get("/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2")
			// console.log(111,data1.data.hots_show_list)
			const data2=await axios.get("/show/tour/getList?version=6.1.1&referer=2")
			const data3=await axios.get("/home/index/getFloorShow?city_id=0&version=6.1.1&referer=2")
			const recommend=await axios.get("/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=1&referer_type=index&version=6.1.1&referer=2")
			// console.log(recommend.data.list)
			dispatch(getrecommend(recommend.data.list))
			dispatch(getSche(data3.data[2].list))
			dispatch(backList(data2.data.list))
			dispatch(getclassify_list(data.classify_list))
			dispatch(advVlipimg(data.ad_list.advert1))
			dispatch(gethotList(data1.data.hots_show_list))
		}
	}
}
