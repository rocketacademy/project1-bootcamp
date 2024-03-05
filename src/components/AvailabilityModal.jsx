import React from 'react';
import { Button } from '../components/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/table'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '../components/dialog' 
import { ShoppingBagIcon, BellAlertIcon } from '@heroicons/react/16/solid'



const AvailabilityModal = ({ isOpen, onClose, availability }) => {

  // If isOpen is false, nothing is returned, hence the modal is not shown
  if (!isOpen) return null;

  // Function to handle "Notify me" button click
  const handleNotifyMe = (bookTitle) => {
    window.alert(`Notify me when ${bookTitle} is available`);
  };

  // Function to handle "Reserve book" button click
  const handleReserveBook = (bookTitle) => {
    window.alert(`Coming soon!`);
  };


  return (
    <Dialog size="2xl" open={isOpen} onClose={onClose}> {/* onClose should be passed from the parent component */}
      <DialogTitle>Book availability</DialogTitle>
      <DialogDescription>
        This book is currently available at the following locations
      </DialogDescription>
      <DialogBody>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Location</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {availability.map((book, index) => (
              <TableRow key={index}>
                <TableCell className="text-zinc-300 text-bold">{book.location}</TableCell>
                <TableCell className="text-zinc-500">{book.status}</TableCell>
                <TableCell className="text-zinc-500">
                  {book.status.toLowerCase() === "on loan" ? (
                    <Button plain onClick={() => handleNotifyMe(book.title)}>
                      <BellAlertIcon /> Notify me
                    </Button>
                  ) : (
                    <Button onClick={() => handleReserveBook(book.title)}>
                      <ShoppingBagIcon /> Reserve book
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogBody>
      <DialogActions>
        <Button plain onClick={() => onClose()}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AvailabilityModal;
