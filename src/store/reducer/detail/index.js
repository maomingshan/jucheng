import newDetail from '../../state/detail/index'
import detailType from '../../actionType/datail/index'

export default function(state=newDetail,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type===detailType.DETAIL_LIST){
        state.detail_list=payload;
    }else if(type===detailType.DETAIL_TIPC){
        state.detail_tipc=payload;
    }else if(type===detailType.DETAIL_SUPPORT){
        state.detail_support=payload
    }else if(type===detailType.DETAIL_VENUD){
        state.detail_venue=payload
    }else if(type===detailType.DETAIL_CITY){
        state.city=payload
    }else if(type===detailType.DETAIL_TIME){
        state.detail_time=payload
    }else if(type===detailType.SHOW_NOTICE){
        state.show_notice1=payload[0];
        state.show_notice2=payload[1];
        state.show_notice3=payload[2];
        state.show_notice4=payload[3];
    }else if(type===detailType.DETAIL_REC){
        state.detail_rec=payload
    }
    return state
}