import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS} from "../actionTypes";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';


const reducer = (state=[], action) => {
    let reminders = null;
    state = read_cookie("myCookie")
    if(action.type === ADD_REMINDER){
       reminders = [...state, {text:action.text, date:action.date, id:Math.random()}]
       bake_cookie("myCookie",reminders);
       return reminders;
    }else if(action.type === REMOVE_REMINDER){
        reminders = state.filter(reminder => reminder.id !== action.id)
        bake_cookie("myCookie",reminders);
        return reminders;
     }
     else if(action.type === CLEAR_REMINDERS){
        reminders = [];
        bake_cookie("myCookie",reminders);
        return reminders;
     }
    
     return state;
     
     
   

}

export default reducer;