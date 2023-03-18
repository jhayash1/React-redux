export const addToCart = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type:'add',
            payload:amount
        })
    }
}
export const removeToCart = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type:'remove',
            payload:amount
        })
    }
}