// App.js or your main component file
import React from 'react';
import Footer from '.././components/Footer';
import Header from '.././components/Header'; 

const People = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-100">

      {/* Header */}
      <Header></Header>

      {/* Main content */}
      <main className="flex-grow">
        People page
      </main>

      {/* Footer */}
      <Footer></Footer>

    </div>
  ); // Add closing parenthesis here
};

export default People;
