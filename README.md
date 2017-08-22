# udacity-myreads
This project is part udacity react project [udacity-myreads](https://github.com/nawazhaq/udacity-myreads/tree/master/src).

## Table of Contents

- [How to run](#how-to-run)
- [Folder Structure](#folder-structure)
- [Available Routes](#available-routes)
- [Available Components](#components-structure)
- [Backend API calls](#backend-api-calls)
- [Supported Search Terms](#supported-search-terms)


## How to Run

Clone the repo into your local system.

* `npm install` Will install the react dependencies.
* `npm start` Will start the application at port 3000 internally this calls react-scripts.

## Folder Structure

After creation, your project should look like this:

```
src/
  icons
  App.css
  App.test.js
  Book.js
  BookCategory.js
  BooksAPI.js
  BookShelf.js
  index.css
  index.js
  ListBooks.js
  SearchPanel.js
 public/
    index.html
    favicon.ico
 
```
## Available Routes
* `/` Default routes to show the book shelves.
* `/search` Allows user to query on books and then update the book shelf status.

## Available Components
* `SearchPanel` Renders the search panel view
* `Book` Renders each book
* `BookShelf` Renders Book shelf view
* `ListBooks` All books inside the shelf
* `BookCategory` Renders each shelf category

## Backend API calls

* `componentDidMount` Renders all the books
* `updateQuery` Matches the input query and then calls searchBook()
* `searchBook(query,max)` Renders list of books upto a max limit 
* `refreshBooks` Re-renders on going back from search page to main page(/)
* `updateShelf(book,shelf)` Update the book's shelf

## Supported Search Terms

Following search terms are allowed - case insensitive search

['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'];

```
