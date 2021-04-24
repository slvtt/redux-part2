import React from 'react';
import Form from '../components/form';
import Comments from '../components/comments'
function App (){
    return(
        <div className='fixed-container'>
            <Form />
            <ul className="comment-list">
                <Comments />
            </ul>

        </div>
    )
}

export default App;