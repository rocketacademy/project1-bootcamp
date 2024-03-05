// App.js or your main component file
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import heroImage from '../img/heroimage.webp';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import SearchableDropdown from '../components/SearchableDropdown';


// Define the BookCard component
const BookCard = ({ title, thumbnail, id }) => {
    return (
        // Adjust the width as needed for smaller book cards
        <div className="bg-zinc-900 rounded-lg w-36 h-56 mx-2 dark:bg-zinc-900">
            <Link to={`/detail/${id}`}>
                <img src={thumbnail} alt={`Cover of ${title}`} className="w-full h-40 object-cover" />
                <div className="text-center p-2">
                    <p className="text-sm font-semibold">{title}</p>
                </div>
            </Link>
        </div>
    );
};

// Define the Homepage component
const Homepage = () => {
 
    const [books, setBooks] = useState([]);  

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // Replace with the correct path to your JSON file
                const response = await axios.get('./books.json');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div className="flex flex-col min-h-screen dark:bg-zinc-900 dark:text-white">
 
            <Header books={books}/>

            {/* Main content */}
            <main className="flex-grow min-h-screen">
                <section className="max-w-[800px] mx-auto p-4 space-y-6">
                    {/* Hero section */}
                    <div className="flex flex-col items-center">
                        <div className="relative group">
                        <div className="h-96 flex justify-center items-center">
                            <img src={heroImage}  alt="Book Recommendation App Hero" 
                            />
                        </div> 
                        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4  ">
                                <h1 className="text-white text-3xl font-bold">Discover Your UX Read</h1>
                            </div>
                        </div>
                    </div>

                    <SearchableDropdown books={books} />

                    {/* Recent additions */}
                    <div>
                        <h2 className="text-xl font-bold">Recent additions to UX Chapter Library</h2>
                        <div className="flex overflow-x-auto py-2"> {/* Enables horizontal scrolling */}
                            {books.map(book => (
                                <BookCard key={book.id} id={book.id} title={book.title} thumbnail={book.thumbnail} />
                            ))}
                        </div>
                        <Link to={`/books/`} className="text-white-600 font-bold">Explore all books</Link>
                    </div>

                    {/* What design leaders are reading */}

                </section>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default Homepage;
