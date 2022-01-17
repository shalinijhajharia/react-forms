
export const adddetails = (data) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            data: data
        })
    }

}

export const toggleusertype = (data) => {
    return (dispatch) => {
        dispatch({
            type: "toggle",
            data: data
        })
    }

}