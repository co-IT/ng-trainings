import { Router, Request, Response } from 'express';

const router = Router();
const JsonDb = require('node-json-db');
const db = new JsonDb(`${__dirname}/data.json`, true, true);
const ApiError = require('../../errors/api-error');
const Books = require('./repository');

const books = new Books(db);

export const BooksController = router;

router.get('/books', all);
router.get('/books/:title', search);
router.get('/book/:isbn', single);
router.post('/book', createOrUpdate);
router.put('/book', createOrUpdate);
router.delete('/book/:isbn', remove);

function all(req: Request, res: Response) {
 return res.send(books.all());
}

function single(req: Request, res: Response) {
  const found = books.single(req.params.isbn);

  if (found) { return res.send(found); }

  return res.status(404).send(new ApiError(`Sorry, we found no book having the ISBN "${req.params.isbn}".` ));
}

function search(req: Request, res: Response) {
  const found = books.searchByTitle(req.params.title);

  if (found && found.length > 0) {
    return res.send(found);
  }

  return res.status(404).send(new ApiError(`Sorry, no book contains the title "${req.params.title}".`));
}

function createOrUpdate(req: Request, res: Response) {
  const isbn = books.create(req.body);

  if (isbn) {
    return res.status(201).send({
      message: 'Congratulations! You created a new book.',
      href: `http://localhost:4280/book/${isbn}`
    });
  }

  return res.status(405).send(new ApiError('Book could not be created'));
}

function remove(req: Request, res: Response) {
  books.remove(req.params.isbn);
  return res.send('The book has been removed.');
}
