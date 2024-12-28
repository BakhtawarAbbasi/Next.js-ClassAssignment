"use client";

import { useEffect, useState } from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
};

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', description: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState<{ [key: number]: boolean }>({});
  const [editedBook, setEditedBook] = useState<Book | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteBookId, setDeleteBookId] = useState<number | null>(null);
  const [addedBookMessage, setAddedBookMessage] = useState<string>('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setLoading(true);
    const response = await fetch('/api/books');
    const data = await response.json();
    setBooks(data);
    setLoading(false);
  };

  const addBook = async () => {
    setLoading(true);
    const response = await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    });
    const data = await response.json();
    setBooks((prevBooks) => [...prevBooks, data]);

    setAddedBookMessage(`New book added: "${data.title}"`);
    setTimeout(() => setAddedBookMessage(''), 3000);
    setLoading(false);
  };

  const editBook = (id: number) => {
    setEditMode((prev) => ({ ...prev, [id]: true }));
    const bookToEdit = books.find((book) => book.id === id);
    if (bookToEdit) {
      setEditedBook(bookToEdit);
    }
  };

  const saveEditedBook = async () => {
    if (!editedBook) return;
    setLoading(true);
    const response = await fetch(`/api/books`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedBook),
    });
    const data = await response.json();
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === data.id ? data : book))
    );
    setEditMode((prev) => ({ ...prev, [editedBook.id]: false }));
    setEditedBook(null);
    setLoading(false);
  };

  const deleteBook = async (id: number) => {
    setLoading(true);
    await fetch(`/api/books?id=${id}`, {
      method: 'DELETE',
    });
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    setShowDeleteModal(false);
    setLoading(false);
  };

  const handleSort = () => {
    const sortedBooks = [...books].sort((a, b) =>
      sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
    setBooks(sortedBooks);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
      <h1 className="mb-8 text-4xl font-semibold text-gray-900">Books List</h1>

      {/* Success Message */}
      {addedBookMessage && (
        <div className="w-full max-w-lg p-3 mb-6 text-center text-white bg-green-600 rounded-lg shadow-lg">
          {addedBookMessage}
        </div>
      )}

      {/* Search and Sort Section */}
      <div className="flex justify-between w-full gap-4 mb-8 md:w-2/3 lg:w-1/2">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button
          onClick={handleSort}
          className="px-6 py-3 text-white transition duration-300 bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          Sort by Title ({sortOrder === 'asc' ? 'Asc' : 'Desc'})
        </button>
      </div>

      {/* Book List */}
      <ul className="w-full space-y-6 md:w-2/3 lg:w-1/2">
        {loading && <div className="text-center text-gray-600">Loading...</div>}
        {filteredBooks.map((book) => (
          <li
            key={book.id}
            className="p-6 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl"
          >
            {editMode[book.id] ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={editedBook?.title}
                  onChange={(e) =>
                    setEditedBook({ ...editedBook!, title: e.target.value })
                  }
                  className="w-full p-4 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  value={editedBook?.author}
                  onChange={(e) =>
                    setEditedBook({ ...editedBook!, author: e.target.value })
                  }
                  className="w-full p-4 border border-gray-300 rounded-md"
                />
                <textarea
                  value={editedBook?.description}
                  onChange={(e) =>
                    setEditedBook({ ...editedBook!, description: e.target.value })
                  }
                  className="w-full p-4 border border-gray-300 rounded-md"
                />
                <div className="flex justify-end gap-4">
                  <button
                    onClick={saveEditedBook}
                    className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode((prev) => ({ ...prev, [book.id]: false }))}
                    className="px-6 py-2 text-gray-500 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{book.title}</h2>
                <p className="text-gray-600 text-md">by {book.author}</p>
                <p className="mt-2 text-gray-700">{book.description}</p>
                <div className="flex gap-6 mt-4">
                  <button
                    onClick={() => editBook(book.id)}
                    className="px-6 py-2 text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setDeleteBookId(book.id);
                      setShowDeleteModal(true);
                    }}
                    className="px-6 py-2 text-red-600 bg-red-100 rounded-md hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Add Book Form */}
      <div className="w-full p-8 mt-12 bg-white rounded-lg shadow-lg md:w-2/3 lg:w-1/2">
        <h2 className="mb-6 text-xl font-semibold text-gray-800">Add a New Book</h2>
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="w-full p-4 mb-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="w-full p-4 mb-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <textarea
          placeholder="Description"
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
          className="w-full p-4 mb-6 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button
          onClick={addBook}
          disabled={loading}
          className="w-full py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          {loading ? 'Adding...' : 'Add Book'}
        </button>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && deleteBookId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-8 bg-white rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800">Confirm Delete</h3>
            <p className="my-4 text-lg text-gray-600">
              Are you sure you want to delete this book?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => deleteBook(deleteBookId)}
                className="px-6 py-3 text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-6 py-3 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
