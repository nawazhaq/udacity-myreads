import React,{Component} from 'react';
import BookCategory from './BookCategory'

class ListBooks extends Component{

    handleBookChangeEvent = (book,val) => {
        this.props.onSelectBook(book,val);
    }

    render(){
        const { books } = this.props;

        /*
          Based on the shelf category filtering out the books before rendering
         */

        const currently_read = books.filter((book) => book.shelf === 'currentlyReading');
        const want_read = books.filter((book) => book.shelf === 'wantToRead');
        const already_read = books.filter((book) => book.shelf === 'read');
        /*
         Passing the categories of book to each div and then calling Book component
         */
        return (
            <div>

                <BookCategory category="Currently Reading" books={currently_read} onBookChangeEvent={this.handleBookChangeEvent}/>
                <BookCategory category="Want to Read" books={want_read} onBookChangeEvent={this.handleBookChangeEvent}/>
                <BookCategory category="Read" books={already_read} onBookChangeEvent={this.handleBookChangeEvent}/>

        </div>)
    }
}

export default ListBooks;