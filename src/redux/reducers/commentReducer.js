import {ADD_COMMENT,REMOVE_COMMENT} from '../types'

const initialState = {
    comments:[]
}

export const commentReducer = (state = initialState,action) =>{
    switch(action.type){
        
        case ADD_COMMENT:
            return {
                ...state, comments:[...state.comments,action.payload]
            }
        
        case REMOVE_COMMENT:
            let filterArr = action.payload.filter(comment => comment.id != action.id)
            return {...state, comments:[...state.comments = filterArr]}

        default:return state
    }
}