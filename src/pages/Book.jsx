import React, { useState } from 'react';

function Book() {
  const [data, setData] = useState([
    { id: 1, title: 'book1', author: 'author1', status: 'rented', image: 'https://diybookcovers.com/wp-content/uploads/2023/07/scifi4thumb.jpg' },
    { id: 2, title: 'book2', author: 'author2', status: 'not rented', image: 'https://diybookcovers.com/wp-content/uploads/2023/07/scifi4thumb.jpg' },
    { id: 3, title: 'book3', author: 'author3', status: 'rented', image: 'https://diybookcovers.com/wp-content/uploads/2023/07/scifi4thumb.jpg' },
    { id: 4, title: 'book4', author: 'author4', status: 'not rented', image: 'https://diybookcovers.com/wp-content/uploads/2023/07/scifi4thumb.jpg' },
  ]);

  const [selectedBook, setSelectedBook] = useState(null);
  const [newBook, setNewBook] = useState({ title: '', author: '', status: 'not rented', image: '' });

  const handleDelete = (id) => {
    setData(data.filter((book) => book.id !== id));
    setSelectedBook(null);
  };

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.status && newBook.image) {
      setData([...data, { id: Date.now(), ...newBook }]);
      setNewBook({ title: '', author: '', status: 'not rented', image: '' });
    }
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #CCCCCC',
    width: '300px',
    height: '40px',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#F4F4F4', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#3366CC' }}>Book Management</h1>
      
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {data.map((buk) => (
          <div
            key={buk.id}
            onClick={() => setSelectedBook(buk)}
            style={{
              padding: '15px',
              borderRadius: '10px',
              backgroundColor: buk.status === 'rented' ? '#FF6F61' : '#28A745',
              color: '#FFFFFF',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={buk.image}
              alt={buk.title}
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }}
            />
            <h4 style={{ margin: '10px 0' }}>{buk.title}</h4>
            <p>{buk.author}</p>
            <p style={{ textTransform: 'capitalize' }}>{buk.status}</p>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#FFFFFF',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            textAlign: 'center',
          }}
        >
          <h3 style={{ marginBottom: '15px', color: '#333333' }}>Book Details</h3>
          <img
            src={selectedBook.image}
            alt={selectedBook.title}
            style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '15px' }}
          />
          <p><strong>Title:</strong> {selectedBook.title}</p>
          <p><strong>Author:</strong> {selectedBook.author}</p>
          <p><strong>Status:</strong> {selectedBook.status}</p>
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => handleDelete(selectedBook.id)}
              style={{
                padding: '10px 20px',
                marginRight: '10px',
                borderRadius: '5px',
                backgroundColor: '#FF6F61',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
            <button
              onClick={() => setSelectedBook(null)}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                backgroundColor: '#3366CC',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#3366CC', textAlign: 'center' }}>Add a New Book</h3>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <input
            type="text"
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            style={inputStyle}
          />
          <select
            value={newBook.status}
            onChange={(e) => setNewBook({ ...newBook, status: e.target.value })}
            style={inputStyle}
          >
            <option value="not rented">Not Rented</option>
            <option value="rented">Rented</option>
          </select>
          <input
            type="text"
            placeholder="Image URL"
            value={newBook.image}
            onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
            style={inputStyle}
          />
          <button
            onClick={handleAddBook}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              backgroundColor: '#3366CC',
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
}


export default Book