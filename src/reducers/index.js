import { ADD_REMINDER , REMOVE_REMINDER , REMOVE_ALL } from "../actionTypes/type"
import {bake_cookie , read_cookie} from 'sfcookies'
    let reducer = (state=[], action) => {
    let reducer = [];
    state = read_cookie(`reducer`)
    if (action.type === ADD_REMINDER) {
        reducer = [...state,{name: action.name , desc: action.desc, date: action.date , id:Math.random()}]    
        console.log(`from reducer` , reducer);
        bake_cookie(`reducer`,reducer)
        return reducer
    } else if ( action.type === REMOVE_REMINDER) {
        reducer = state.filter(reminder => reminder.id !== action.id)
        bake_cookie(`reducer`,reducer)
        return reducer
    } else if (action.type === REMOVE_ALL ) {
        reducer = []
        bake_cookie(`reducer`,reducer)
        return reducer
    }
    else {
        return state
    }     
}
export default reducer;
