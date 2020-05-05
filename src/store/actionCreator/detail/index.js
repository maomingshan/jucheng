import axios from 'axios'
import DetailType from '../../actionType/datail/index'


function getDetail(payload){
    return{
        type:DetailType.DETAIL_LIST,
        payload
    }
}
function setTipc(payload){
    return{
        type:DetailType.DETAIL_TIPC,
        payload
    }
}
function getSupport(payload){
    return{
        type:DetailType.DETAIL_SUPPORT,
        payload
    }
}
function getVenue(payload){
    return{
        type:DetailType.DETAIL_VENUD,
        payload
    }
}
function getCity(payload){
    return{
        type:DetailType.DETAIL_CITY,
        payload
    }
}
function getTime(payload){
    return{
        type:DetailType.DETAIL_TIME,
        payload
    }
}
function getNotice(payload){
    return{
        type:DetailType.SHOW_NOTICE,
        payload
    }
}
function Recommend(payload){
    return{
        type:DetailType.DETAIL_REC,
        payload
    }
}
export default{
    detailList(id){
        return async(dispatch)=>{
            const {data}=await axios.get("/Schedule/Schedule/getScheduleInfo?schedular_id="+id)
            
            dispatch(getDetail(data.static_data))
            dispatch(setTipc(data.static_data.tips))
            dispatch(getSupport(data.static_data.support.list))
            dispatch(getVenue(data.static_data.venue))
            dispatch(getCity(data.static_data.city))
            dispatch(getTime(data.static_data.show_time_data))
            dispatch(getNotice(data.static_data.show_notice.list))
            const respon=await axios.get("/Show/Search/getShowList?category="+data.static_data.cate_parent_id+"&city_id="+data.static_data.city.city_id)
            // console.log(respon.data.list)
            dispatch(Recommend(respon.data.list))
        }
    }
}