import {USERS} from '../shared/users';
import * as ActionTypes from "./ActionTypes";

export const Users = (state=USERS,action)=>{
    switch (action.type) {
        case ActionTypes.ADD_USER:
            var user = action.payload;
            user.id = state.length;
            console.log("Add" + JSON.stringify(state.concat(user)));
            return state.concat(user);
        default:return state;
    }
};