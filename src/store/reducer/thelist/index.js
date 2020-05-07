import newTheList from '../../state/thelist/index'
import theType from '../../actionType/thelist/index'
export default function(state=newTheList,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type===theType.THE_HEADER){
        state.the_header=payload
    }else if(type===theType.THE_MORE){
        // console.log(typeof(payload))
        state.the_more=payload
    }
    return state
}
