import React, { useEffect, useState } from 'react';

const MarqueeHeader = ({books}) => {

    const [extendedBooks, setExtendedBooks] = useState([]);
    let bookList = books.books;

    useEffect(() => {
        // Extend the book data array for looping
        if (bookList.length > 0) {
            // Clone the books array to ensure it appears sooner
            const clonedBooks = [...bookList];
            const duplicatedBooks = [...bookList, ...clonedBooks];
            setExtendedBooks(duplicatedBooks);
        }
    }, [bookList]);
    
    return (
        <div className="overflow-hidden h-8 bg-zinc-900 text-white">
            <div className="whitespace-nowrap animate-marquee" style={{ animation: `marquee 60s linear infinite` }}>
                {bookList.map((book, index) => (
                    <span key={index} className="mx-4">
                        {book.title}  
                    </span>
                ))}
            </div>
        </div>
    );
};
 

export default MarqueeHeader;
