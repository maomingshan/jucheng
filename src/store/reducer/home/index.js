import newsListInit from '../../state/home/index.js'
import newsListType from '../../actionType/home/index.js'
export default function(state=newsListInit,{type,payload}){
	// console.log(state)
	state=JSON.parse(JSON.stringify(state))
	if(type===newsListType.GET_FIRST_LIST){
		state.classify_list=payload
	}else if(type===newsListType.HOT_LIST){
		state.hot_list=payload
	}else if(type===newsListType.BACK_LIST){
		state.back_list=payload
	}else if(type===newsListType.ADV_VIP){
		state.advert1=payload
	}else if(type===newsListType.SCHE_LIST){
		state.seachlist=payload
		state.onlseach=payload[0]
	}else if(type===newsListType.RECOM_LIST){
		state.recommend=payload
	}else if(type===newsListType.SLIDE_LIST){
		state.slide_list=payload
	}
	return state;
}