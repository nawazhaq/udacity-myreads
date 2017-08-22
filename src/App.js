import React ,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchPanel from './SearchPanel'

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
    searchTerms = searchTerms.map((term) => {
       return term.toLowerCase();
    });
     if(query && query.trim()){
          let searchFlag =  searchTerms.includes(query.toLowerCase());
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
     @param query - search query
     @param maxResults - limit
     This function renders the books related to the search

*/

  searchBook = (query,maxResults) => {
    BooksAPI.search(query,maxResults).then((books) => {
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
    return (
        <div className="app">
          <Route path="/search" render={()=>(
          <SearchPanel books={this.state.books} onSearch={this.updateQuery} onRefresh={this.refreshBooks}/>
          )}
          />
          <Route exact path="/" render={()=>(
           <BookShelf books={this.state.books}/>
          )} />
        </div>
    )
  }
}

export default BooksApp
