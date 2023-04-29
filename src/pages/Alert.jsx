import React, { useState, useEffect } from "react";
import { BackButton, Button, AlertButton } from "../components ";

const Alert = () => {
  return (
    <div className="base-container-secondary">
      <BackButton />
      <p className="m-10 text-5xl text-dark-pink">Alert!</p>
      <AlertButton />
      <p className="m-7 text-xl text-dark-pink">
        Warning: Pressing this button will send an auto WhatsApp message to your
        emergency contacts!
      </p>
    </div>
  );
};

export default Alert;
