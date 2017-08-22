import React,{Component} from 'react';
import ListBooks from './ListBooks'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component{

    /*
     @param book - book object which is updated
     @param val - shelf to which its being updated
     This function updates the book shelf

     */
    updateShelf = (book,val) => {
        this.setState((state) =>({
            books: this.props.books.map((_book) => {
                if (_book.id === book.id) {
                    _book.shelf = val;
                    return _book;
                }
                return _book;
            })
        }))

        BooksAPI.update(book ,val);
    }

    render(){
        const { books } = this.props;

        /*
         Rendering each book attributes and passing the event to the parent component for updates
         */
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <ListBooks books={books} onSelectBook={this.updateShelf}/>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        Add a book
                    </Link>
                </div>
            </div>
           )
    }
}

export default BookShelf;