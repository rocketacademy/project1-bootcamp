import React, { useState, useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import uuid from "react-uuid";

const CalendarComponent = (props) => {
  // console.log(props);
  const data = props.medicineData;
  const moodData = props.moodData;
  // console.log (data);
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);

  const [selectedEvent, setSelectedEvent] = useState(undefined);
  const [displayModal, setDisplayModal] = useState(false);

  const [show, setShow] = useState(false);

  let tempEvents = [];

  useEffect(() => {
    data.forEach((element) => {
      const dataDose = {
        title: `${element.medicineName} , ${element.medicineQtyOne} pills`,
        id: uuid(),
        isMedicine: true,
        start: moment(
          `${element.medicineDate} ${element.medicineTime}`,
        ).toDate(),
        end: moment(`${element.medicineDate} ${element.medicineTime}`)
          .add(1, "second")
          .toDate(),
      };
      tempEvents.push(dataDose);
    });

    moodData.forEach((element) => {
      const dataMood = {
        title: `${element.mood} Mood`,
        id: uuid(),
        value: element.id,
        isMedicine: false,
        start: moment(`${element.moodDate} ${element.moodTime}`).toDate(),
        end: moment(`${element.moodDate} ${element.moodTime}`)
          .add(1, "second")
          .toDate(),
      };
      tempEvents.push(dataMood);
    });
    setEvents(tempEvents);
  }, [data, moodData]);

  const eventPropGetter = (event, start, end, isSelected) => {
    // console.log(event);
    let newStyle = {
      backgroundColor: "#f59e0b",
      colour: "white",
      borderRadius: "2px",
      border: "none",
    };

    if (event.isMedicine) {
      newStyle.backgroundColor = "#14b8a6";
    }
    return {
      className: "",
      style: newStyle,
    };
  };

  // console.log(events);
  // console.log(selectedEvent.id);

  const handleDeleteEvent = (selectedEvent, id) => {
    setEvents(events.filter((event) => selectedEvent.id !== id));
  };

  const handleSelectedEvent = (event) => {
    setSelectedEvent(event);
    setDisplayModal(true);
    setShow(true);
  };

  // console.log(selectedEvent);
  // console.log(selectedEvent.title);

  const CalendarModal = () => {
    const cancelButtonRef = useRef(null);
    // console.log(selectedEvent);
    // console.log(selectedEvent.id);

    return (
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setShow}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Event Details
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {JSON.stringify(
                              `${selectedEvent.title} at ${selectedEvent.start}`,
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleDeleteEvent}
                    >
                      Delete Event
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setShow(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  };

  return (
    <div className="grid justify-items-center grid-cols-1 h-max">
      {selectedEvent && displayModal && (
        <CalendarModal selectedEvent={selectedEvent} />
      )}
      {/* alert(`${selectedEvent.title} at ${selectedEvent.start}`) */}
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="flex justify-center h-screen w-11/12 text-dark-pink text-xs p-3"
        eventPropGetter={eventPropGetter}
        onSelectEvent={(e) => handleSelectedEvent(e)}
      />
    </div>
  );
};

export default CalendarComponent;
