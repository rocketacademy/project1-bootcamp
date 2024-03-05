// App.js or your main component file
import React from 'react';
import Header from '.././components/Header';
import Footer from '.././components/Footer';
import BooksGrid from '../components/BooksGrid'; 


// Define the PageTitle component
const PageTitle = () => {
  return (
    <div className="w-full text-center">
      <h1 className="text-4xl font-bold my-4 text-white">Books catalogue</h1>
    </div>
  );
};

// Define the main App component
const Books = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-zinc-900">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-full">
        <section className="max-w-[800px] mx-auto p-4 space-y-6">
          <PageTitle />

          {/* Books grid */}
          <BooksGrid />

        </section>
      </main>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Books;