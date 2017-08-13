import React ,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
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
          {this.state.showSearchPage ? (
              <div className="search-books">
                <div className="search-books-bar">
                  <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                  <div className="search-books-input-wrapper">
                    {/*
                     NOTES: The search from BooksAPI is limited to a particular set of search terms.
                     You can find these search terms here:
                     https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                     However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                     you don't find a specific author or title. Every search is limited by search terms.
                     */}
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
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url({book.previewLink})' }}></div>
                              <div className="book-shelf-changer">
                                <select onChange={(event) => this.updateShelf(book,event.target.value)}>
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
          ) : (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <ListBooks books={this.state.books} onSelectBook={this.updateShelf}/>
                </div>
                <div className="open-search">
                  <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
              </div>
          )}
        </div>
    )
  }
}

export default BooksApp
