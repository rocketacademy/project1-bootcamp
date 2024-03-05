import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define the BookCard component
const BookCard = ({ title, author, thumbnail, bookID }) => {
    return (
        <div className="flex flex-col items-center p-4 border rounded shadow-sm m-2 bg-white">
            {/* Use the thumbnail URL for the img src attribute */}
            <img src={thumbnail} alt={`Cover of the book ${title}`} className="w-full h-40 mb-2 object-cover" />
            <h2 className="text-md font-bold">{title}</h2>
            <p className="text-sm text-gray-500">{author}</p>
            <div className="flex gap-2 mt-2">
                <Link to={`/detail/${bookID}`} className="text-blue-500 hover:text-blue-700">Learn more</Link>
            </div>
        </div>
    );
};

const BooksGrid = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('books.json');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {books.map((book, index) => (
                    <BookCard key={index} title={book.title} author={book.author} thumbnail={book.thumbnail} bookID={book.id} />
                ))}
            </div>
        </div>
    );
};

export default BooksGrid;
