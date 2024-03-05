import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/button'
import AvailabilityModal from '../components/AvailabilityModal';


const BookDetail = () => {

  // State to retrieve bookID from URL
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [availability, setAvailability] = useState([]);
  let [isOpen, setIsOpen] = useState(false)
  const tagsArray = book && book.tags ? book.tags.split(', ') : [];

  const processApiResponse = (apiResponse) => {
    const booksAvailability = apiResponse.map(item => {
      return {
        location: item.location.name,
        status: item.status.name
      }
    });

    // Only return items that are available
    let booksAvailable = booksAvailability.filter(item => item.status !== "In-Transit");;

    setAvailability(booksAvailable);
    setIsOpen(true);
  };

  const fetchBookAvailability = async (title, isbn, bookID) => {
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://openweb.nlb.gov.sg/api/v2/Catalogue/GetAvailabilityInfo';

    try {

      // retrieve the mock response
      const mockJSON = "./response_" + bookID + ".json";
      const response = await axios.get(mockJSON, {

        // Using NLB API 
        // const response = await axios.get(corsProxy + targetUrl, {

        headers: {
          'x-app-code': process.env.REACT_APP_APP_ID,
          'x-api-key': process.env.REACT_APP_API_KEY
        },
        params: {
          Title: title,
          ISBN: isbn
        }
      });
      const apiResponse = response.data[0];
      if (apiResponse.items) {
        // Process and set state here 
        processApiResponse(apiResponse.items);
      } else {
        alert('No book locations found');
      }

    } catch (error) {
      console.error('Error fetching book availability:', error);
      // Handle error appropriately
    }
  };

  useEffect(() => {
    // Define an async function to fetch the book data
    const fetchBookData = async () => {
      try {
        const response = await axios.get('./books.json');
        // Ensure bookId is compared in the correct type (string or number)
        const bookData = response.data.find(b => b.id.toString() === bookId);
        setBook(bookData);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBookData();
  }, [bookId]); // Depend on bookId so if it changes, we refetch the book detail

  return (
    <div className="flex flex-col min-h-screen dark:bg-zinc-900">
      {/* Header */}
      <Header />

      {/* Book details */}
      {book ? (

        <div className="max-w-[800px] mx-auto max-w-2xl mx-auto p-4">
          <img src={book.thumbnail} alt={`Cover of the book ${book.title}`} className="w-30 h-auto" />
          <h2 className="text-3xl font-bold my-4 text-white">{book.title}</h2>
          <p className="text-xl mb-4 text-white">by {book.author}</p>

          {/* Genres/tags could be dynamically generated based on book details */}
          <div className="mb-4">
            {tagsArray.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-300">{book.description}</p>

          {/* Genres/tags could be dynamically generated based on book details */}
          <div className="mt-5">
            <div>
              <Button onClick={() => fetchBookAvailability(book.title, book.isbn, bookId)}>Check Book Availability</Button>
              <AvailabilityModal isOpen={isOpen} onClose={() => setIsOpen(false)} availability={availability} />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading book details...</p>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BookDetail;