import { useState } from 'react'
import './Book.css'

function Book(props){
    const {item, onDelete} = props
    const[isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [content, setContent] = useState(item.content);

    const edit = ()=>{
        setIsEditing(true)
    }

    const cancel = ()=>{
        setIsEditing(false)
    }

    const deleteBook = (evt)=>{
        onDelete(item.id)
    }

    // editBook = ()=>{

    // }
    return(
        <div>
        {
            isEditing ?(
                <div>
                    i am a book titled: 
                    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/> 
                    containing: 
                    <input type='text' value={content} onChange={(e)=>setContent(e.target.value)}/>
                    {/* <input type='button' value='save!' onClick={editBook}/> */}
                    <input type='button' value='cancel!' onClick={cancel}/>
                </div>
            ) : (
                <div>
                    i am a book titled: <span className="title">{item.title}</span> containing: <span style={{backgroundColor:'lightblue'}}>{item.content}</span>
                    <input type='button' value='delete me!' onClick={deleteBook}/>
                    <input type='button' value='edit me!' onClick={edit}/>
                </div>
            )
        }
        </div>

        // <div>
        //     i am a book titled: <span className="title">{item.title}</span> containing: <span style={{backgroundColor:'lightblue'}}>{item.content}</span>
        //     <input type='button' value='delete me!' onClick={clickHandler}/>
        // </div>
    )


}
export default Book;