import React,{Component} from 'react';

class Book extends Component{

    render(){
        const { book,handleBookChangeEvent } = this.props;
        let author = book.authors ? book.authors.join(', '): '';
        /*
         Rendering each book attributes and passing the event to the parent component for updates
         */
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(event) => handleBookChangeEvent(book,event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{author}</div>
                </div>
            </li>
           )
    }
}

export default Book;