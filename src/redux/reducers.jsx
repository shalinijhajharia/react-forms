import { combineReducers } from "redux";
import { inititaldata } from "./initialdata";

const formreducers = (state = inititaldata.form, action) => {
    switch (action.type) {
        case "add":
            {
                const fullname = action.data.fullname
                let temp = state
                if (temp[fullname]) {
                    temp[fullname] = { ...temp[fullname], ...action.data }
                    return temp

                }
                else {
                    temp[fullname] = action.data
                    return temp
                }
            }
        default:
            return state
    }
}

const usertypereducer  = (state = inititaldata.usertype,action) =>
{
    switch(action.type)
    {
        case "toggle":
            {
                state = action.data
                return state
            }
        default :
        return state
    }
}
export const reducers = combineReducers(
    {
        forms: formreducers,
        toggleusertype : usertypereducer
    }
)