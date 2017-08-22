import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPanel extends Component{

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


    handleSearchQuery = (book,val) => {
        this.props.onSearch(book,val);
    }



    handleRefresh = () => {
        this.props.onRefresh();
    }


    render(){
        const { books } = this.props;
        const maxResult = 20;

        /*
         Rendering each book attributes and passing the event to the parent component for updates
         */
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={{
                        pathname: '/',
                        state: { books: books}
                    }} className="close-search" onClick={this.handleRefresh}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               onChange={(event)=> this.handleSearchQuery(event.target.value,maxResult)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) =>(
                                <Book key={book.id} book={book} handleBookChangeEvent={this.updateShelf}/>
                            )
                        ) }
                    </ol>
                </div>
            </div>
           )
    }
}

export default SearchPanel;