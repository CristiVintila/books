import store from "./bookStore"
import {useState, useEffect} from 'react'
import BookForm from "./bookForm"
import Book from "./book"

function BookList() {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        store.getBooks();
        store.emitter.addListener('GET_BOOKS_SUCCESS',()=>{
            setBooks(store.data);
        })
    }, [])

    const addBook = (book)=>{
        store.addBook(book);
    }

    const deleteBook = (id)=>{
        store.deleteBook(id);
    }

  return (
    <div>
        {
            books.map(e=> <Book key={e.id} item={e} onDelete={deleteBook}/>)
        }
        <BookForm onAdd={addBook}/>
    </div>
  );
}

export default BookList;