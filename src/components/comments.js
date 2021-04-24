import  React from 'react';
import {connect} from 'react-redux';
import{removeComment} from '../redux/actions/index-actions';

const Comments = ({stateComment,removeComment}) =>{

    const deleteComment = id =>{
        removeComment(stateComment, id)
    }

    if (!stateComment.length) return <p className="comment-info">Нет комментариев!</p>

    return stateComment.map( item => (
                <li key ={item.id} className ="item-comment">
            <div className="flex-row">

                <div className="userName">
                    <span className="userName_span">Имя:</span>
                    {item.name}
                </div>
                <span>{item.time}</span>
                <p className="comment-text">
                    {item.comment}
                </p>
            </div>


            <button className="item-delete" onClick={()=>deleteComment(item.id)}>
                X
            </button>
        </li>
    )


    )
}

const mapStateToProps = state => {
    return {
        stateComment:state.comments
    }
}
const mapDispatchToProps = {
    removeComment
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);