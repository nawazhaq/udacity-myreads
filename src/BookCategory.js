import React,{Component} from 'react';
import Book from './Book'

class BookCategory extends Component{

    onBookChangeEvent = (book,val) => {
        this.props.onBookChangeEvent(book,val);
    }


    render(){
        const { category,books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{category}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {books.map((book) =>(

                                <Book key={book.id} book={book} handleBookChangeEvent={this.onBookChangeEvent}/>
                            )
                        ) }

                    </ol>
                </div>
            </div>
           )
    }
}

export default BookCategory;