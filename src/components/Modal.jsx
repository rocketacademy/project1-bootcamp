import React from 'react';

const Modal = ({ isOpen, onClose, books }) => {

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button onClick={onClose}>Close</button>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {books.map((book, index) => (
                            <tr key={index}>
                                <td>{book.title}</td>
                                <td>{book.isAvailable ? 'Available' : 'Not Available'}</td>
                            </tr>
                        ))} */}
                        hello world
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Modal;
