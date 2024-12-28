import { NextApiRequest, NextApiResponse } from 'next';

type Book = {
  id: number;
  title: string;
  author: string;
};

let books: Book[] = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(books);
      break;
    case 'POST':
      const newBook = req.body as Book;
      newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
      books.push(newBook);
      res.status(201).json(newBook);
      break;
    case 'PUT':
      const updatedBook = req.body as Book;
      books = books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      );
      res.status(200).json(updatedBook);
      break;
    case 'DELETE':
      const id = parseInt(req.query.id as string);
      books = books.filter((book) => book.id !== id);
      res.status(200).json({ message: 'Book deleted successfully' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
