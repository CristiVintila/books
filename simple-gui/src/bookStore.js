import {EventEmitter} from "fbemitter"

const SERVER = "http://localhost:8080";

class BookStore{
    constructor (){
        this.data = []
        this.emitter = new EventEmitter();
    }

    async getBooks() {
        try{
            const response = await fetch(`${SERVER}/books`)
            if(!response.ok){
                throw response;
            }
            this.data = await response.json();
            this.emitter.emit('GET_BOOKS_SUCCESS');
        } catch(err){
            console.warn(err);
            this.emitter.emit('GET_BOOKS_ERROR');

        }
    }

    async addBook(book) {
        try{
            const response = await fetch(`${SERVER}/books`, 
            {
                method:'POST',
                crossorigin: true,  
                mode: 'no-cors',
                headers:{
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(book)
            })
            if(!response.ok){
                throw response;
            }
            this.getBooks();
            this.emitter.emit('ADD_BOOK_SUCCESS');
        } catch(err){
            console.warn(err);
            this.emitter.emit('ADD_BOOK_ERROR');

        }
    }

    async updateBook(id, book) {
        try{
            const response = await fetch(`${SERVER}/books/${id}`, 
            {
                method:'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(book)
            })
            if(!response.ok){
                throw response;
            }
            this.getBooks();
            this.emitter.emit('UPDATE_BOOK_SUCCESS');
        } catch(err){
            console.warn(err);
            this.emitter.emit('UPDATE_BOOK_ERROR');

        }
    }

    async deleteBook(id) {
        try{
            const response = await fetch(`${SERVER}/books/${id}`, 
            {
                method:'DELETE',
            })
            if(!response.ok){
                throw response;
            }
            this.getBooks();
        } catch(err){
            console.warn(err);
            this.emitter.emit('UPDATE_BOOK_ERROR');

        }
    }

}

const store = new BookStore();
export default store;