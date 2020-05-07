import axios from "axios"
import theType from '../../actionType/thelist/index'

function getlist(payload){
    return{
        type:theType.THE_HEADER,
        payload
    }
}
function getMore(payload){
    return{
        type:theType.THE_MORE,
        payload
    }
}

export default {
    getTheList(id){
        return async(dispatch)=>{
            const {data}=await axios.get("/theatre/index/getTheatreInfo?theatre_id="+id)
            const more=await axios.get("/Show/Search/getShowList?page=1&venue_id="+data.venue_ids)
            // console.log(data)
            dispatch(getlist(data))
            dispatch(getMore(more.data.list))
        }
    }
}



