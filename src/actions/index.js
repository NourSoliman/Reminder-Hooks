import { ADD_REMINDER , REMOVE_REMINDER , REMOVE_ALL } from "../actionTypes/type"
export const addReminder = (name ,desc , date ) => {
    const action = {
        type : ADD_REMINDER,
        name : name,
        desc : desc,
        date: date,
        
    }
    console.log(action);
    return action
}
export const removeReminder = (id) => {
    const action = {
        type: REMOVE_REMINDER , 
        id 
    }
    return action
}
export const removeAll = () => {
    const action = {
        type : REMOVE_ALL,
    }
    return action
}
