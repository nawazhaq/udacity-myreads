import React,{Component} from 'react';
import Book from './Book'

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
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {currently_read.map((book) =>(

                                <Book key={book.id} book={book} handleBookChangeEvent={this.handleBookChangeEvent}/>
                        )
                        ) }

                    </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {want_read.map((book) =>(

                            <Book key={book.id}  book={book} handleBookChangeEvent={this.handleBookChangeEvent}/>
                            )
                        )  }
                    </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {already_read.map((book) =>(

                            <Book key={book.id}  book={book} handleBookChangeEvent={this.handleBookChangeEvent}/>
                            )
                        )  }
                    </ol>
                </div>
            </div>
        </div>)
    }
}

export default ListBooks;