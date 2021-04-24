import React,{useState} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../redux/actions/index-actions';
import {idCreate} from '../js/idCreate'

const Form = ({addComment}) => {

    const [userInput,setInputText] = useState('');
    const [userName,setInputName] = useState('');


    const handleChangeText = e => {
        setInputText(e.target.value)
    }

    const handleChangeName = e => {
        setInputName(e.target.value)
    }

    const handleSubmit = e => {

        e.preventDefault()

        addComment({
            id: idCreate(),
            comment: userInput,
            name: userName,
            time: new Date().toLocaleTimeString(),
        })

        setInputText('')
        setInputName('')
    }

    const handleKeyPress = (ev) =>{
        if(ev.key === 'Enter'){
            handleSubmit(ev)
        }
    }

    return (
        <div className="form">
            <h2 >Виджет комментариев</h2>
            <p className="info_subTitle">Я очень надеюсь, что оно будет работать</p>
            <form
                className="fixed-container"
                onSubmit={handleSubmit}
            >
                <input 
                    className ="user-name_input"
                    value={userName}
                    type="text"
                    onChange={handleChangeName}
                    placeholder="ваше имя"
                />
                <input
                    className ="comment"
                    value={userInput}
                    type="text"
                    onChange={handleChangeText}
                    onKeyDown={handleKeyPress}
                    placeholder="Ваш комментарий"
                />
                <button className="btn_submit">Отправить</button>
            </form>
        </div>

    )
}

const mapDispatchToProps = {
    addComment
}

export default connect(null, mapDispatchToProps)(Form)