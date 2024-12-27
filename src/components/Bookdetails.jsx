import React, { useState } from 'react';

function BookDetails() {
  const [data, setData] = useState([
    { id: 1, title: 'book1', author: 'author1', status: 'rented', image: 'https://diybookcovers.com/wp-content/uploads/2023/07/scifi4thumb.jpg' },
    { id: 2, title: 'book2', author: 'author2', status: 'not rented', image: 'https://diybookcovers.com/wp-content/uploads/2023/07/scifi4thumb.jpg' },
    { id: 3, title: 'book3', author: 'author3', status: 'rented', image: 'https://diybookcovers.com/wp-content/uploads/2023/07/scifi4thumb.jpg' },
    { id: 4, title: 'book4', author: 'author4', status: 'not rented', image: 'https://diybookcovers.com/wp-content/uploads/2023/07/scifi4thumb.jpg' },
  ]);

  const [selectedBook, setSelectedBook] = useState(null);
  const [newBook, setNewBook] = useState({ title: '', author: '', status: '', image: '' });

  const handleDelete = (id) => {
    setData(data.filter((book) => book.id !== id));
    setSelectedBook(null);
  };

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.status && newBook.image) {
      setData([
        ...data,
        { id: Date.now(), ...newBook }, 
      ]);
      setNewBook({ title: '', author: '', status: '', image: '' });
    }
  };

  return (
    <div>
      {/* Book Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '5px',
          padding: '10px',
        }}
      >
        {data.map((buk) => (
          <div
            key={buk.id}
            onClick={() => setSelectedBook(buk)}
            style={{
              width: '120px',
              height: '120px',
              padding: '5px',
              borderRadius: '5px',
              backgroundColor: 'lightgrey',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <img src={buk.image} alt={buk.title} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
            <h4>{buk.title}</h4>
            <h4>{buk.author}</h4>
            <h4>{buk.status}</h4>
          </div>
        ))}
      </div>

      {/* Modal for Selected Book */}
      {selectedBook && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            border: '1px solid black',
            borderRadius: '5px',
            zIndex: 1000,
          }}
        >
          <h3>Book Details</h3>
          <img src={selectedBook.image} alt={selectedBook.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          <p><strong>Title:</strong> {selectedBook.title}</p>
          <p><strong>Author:</strong> {selectedBook.author}</p>
          <p><strong>Status:</strong> {selectedBook.status}</p>
          <button onClick={() => handleDelete(selectedBook.id)}>Delete</button>
          <button onClick={() => setSelectedBook(null)}>Close</button>
        </div>
      )}

      {/* Add Book Form */}
      <div style={{ marginTop: '20px' }}>
        <h3>Add a New Book</h3>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newBook.status}
          onChange={(e) => setNewBook({ ...newBook, status: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newBook.image}
          onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </div>
  );
}

export default BookDetails;
