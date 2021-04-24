import {ADD_COMMENT,REMOVE_COMMENT} from '../types'

export const addComment = (comment) =>{
    return{
        type:ADD_COMMENT,
        payload:comment
    }
}

export const removeComment = (comment,id) =>{
    return {
        type:REMOVE_COMMENT,
        id,
        payload:comment
    }
}