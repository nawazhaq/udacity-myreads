import React ,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import { Route, Link } from 'react-router-dom'
import Book from './Book'

class BooksApp extends Component {
  state = {
    books:[]
  }

/*
  @param query - search query
  @param maxResult - limit
  This function calls the searchBook() only if the search query matches
  with the SEARCH_TERMS.md file.

 */
updateQuery = (query,maxResult) => {
      var searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'];
      if(query && query.trim()){
          let searchFlag =  searchTerms.includes(query);
          if(searchFlag){
              this.searchBook(query,maxResult);
          }

      }
 }

 /*
     This function calls getAll() books API

 */

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books});

    })
  }

/*
     @param book - book object which is updated
     @param val - shelf to which its being updated
     This function updates the book shelf

 */
  updateShelf = (book,val) => {
      this.setState((state) =>({
      books: state.books.map((_book) => {
        if (_book.id === book.id) {
            _book.shelf = val;
          return _book;
        }
        return _book;
      })
    }))

    BooksAPI.update(book ,val);
  }


/*
     @param query - search query
     @param maxResults - limit
     This function renders the books related to the search

*/

  searchBook = (query,maxResults) => {
    BooksAPI.search(query ,maxResults).then((books) => {
      this.setState({books});
    })
  }

  /*
    Refreshes the books page when close search
   */

  refreshBooks=()=>{
        BooksAPI.getAll().then((books) => {
            this.setState({books});

        })
    }


    /*
     Render function includes routes for search and book listing
     */
  render() {

    const maxResult = 20;
    const booksList = this.state.books;


    return (
        <div className="app">

          <Route path="/search" render={()=>(

              <div className="search-books">
                <div className="search-books-bar">
                  <Link to={{
                      pathname: '/',
                      state: { books: this.state.books }
                  }} className="close-search" onClick={this.refreshBooks}>Close</Link>
                  <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"
                           onChange={(event)=> this.updateQuery(event.target.value,maxResult)}/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    {booksList.map((book) =>(
                        <Book key={book.id} book={book} handleBookChangeEvent={this.updateShelf}/>
                        )
                    ) }
                  </ol>
                </div>
              </div>

          )}
          />
          <Route exact path="/" render={()=>(
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <ListBooks books={this.state.books} onSelectBook={this.updateShelf}/>
                </div>
                <div className="open-search">
                  <Link to="/search">
                    Add a book
                  </Link>
                </div>
              </div>
          )} />
        </div>
    )
  }
}

export default BooksApp
