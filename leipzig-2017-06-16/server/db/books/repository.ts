import JsonDb = require('node-json-db');

import { Book } from './model';

module.exports = function Books(db: JsonDb) {
  this.all = all;
  this.single = single;
  this.searchByTitle = searchByTitle;
  this.create = create;
  this.remove = remove;

  function all(): Book[] {
    const books = db.getData('/');
    return Object.keys(books).map(isbn => Object.assign(books[isbn], { isbn }));
  }

  function single(isbn: string): Book {
    return this
      .all()
      .find(book => book.isbn === isbn);
  }

  function searchByTitle(title: string): Book[] {
    const query = title.toLowerCase();

    return this
      .all()
      .filter(book => book.title.toLowerCase().indexOf(query) >= 0);
  }

  function create(book: Book) {
    const isbn = book.isbn;

    if (!isbn || this.single(isbn)) { return null; }

    delete book.isbn;

    db.push(`/${isbn}`, book);

    return isbn;
  }

  function remove(isbn: string) {
    db.delete(`/${isbn}`);
  }
};
