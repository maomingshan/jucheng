import shoeType from '../../actionType/showlist'
import newsshowInit from '../../state/showlist/index.js'

export default function(state=newsshowInit,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type===shoeType.SHOW_LIST){
        state.show_list=payload
    }else if(type===shoeType.SHOW_TYPE){
        state.show_type=payload
    }
    return state
}