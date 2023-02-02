import { useState } from "react";

function BookForm(props){
    const {onAdd} = props

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const add=(evt)=>{
        onAdd({
            title,
            content
        })
    }
    return(
        <div>
            <h4>Add a book</h4>
            <div>
                <input type='text' placeholder="title" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <input type='text' placeholder="content" onChange={(e)=>setContent(e.target.value)}/>
            </div>
            <div>
                <input type='button' value='save' onClick={add}/>
            </div>
        </div>
    )
}

export default BookForm;