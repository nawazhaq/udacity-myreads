import React ,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import { Route, Link } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    books:[],
    query:""
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books});

    })
  }

  updateShelf = (book,val) => {
    this.setState((state) =>({
      books: state.books.map((c) => {
        if (c.id === book.id) {
          c.shelf = val
          return c
        }
        return c
      })
    }))

    BooksAPI.update(book ,val)
  }

  searchBook = (query,maxResults) => {
    BooksAPI.search(query ,maxResults).then((books) => {
      this.setState({books});
    })
  }


  render() {

    const maxResult = 20;
    const booksList = this.state.books;
    return (
        <div className="app">

          <Route path="/search" render={({history})=>(
              <div className="search-books">
                <div className="search-books-bar">
                  <Link to="/" className="close-search">Close</Link>
                  <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"
                           onChange={(event)=> this.searchBook(event.target.value,maxResult)}/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    {booksList.map((book) =>(
                            <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">
                                    <select value="none" onChange={(event) => this.updateShelf(book,event.target.value)}>
                                      <option value="none" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors[0]}</div>
                              </div>
                            </li>
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
