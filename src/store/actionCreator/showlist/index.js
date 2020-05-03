import ShowType from '../../actionType/showlist/index.js'
import axios from 'axios'
function setShowList(payload){
    return{
        type:ShowType.SHOW_LIST,
        payload
    }
}
function getType(payload){
    return{
        type:ShowType.SHOW_TYPE,
        payload
    }
}

export default{
    getShowList(id){
        return async(dispatch)=>{
            const {data}=await axios.get("/Show/Search/getShowList?category="+id)
            const res=await axios.get("/Show/Index/getShowCategoryList")
            console.log(res.data)
            dispatch(setShowList(data.list))
            dispatch(getType(res.data))
        }
    }
}