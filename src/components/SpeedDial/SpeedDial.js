import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Avatar from "@mui/material/Avatar";

const pharmacist = (name, contact) => {
  const whatsAppTextBody = `Hi ${name}, I need your advice with dosing.`;
  const contactNum = contact;
  const whatsAppLink =
    "https://api.whatsapp.com/send/?phone=" +
    contactNum +
    "&text=" +
    whatsAppTextBody;
  return whatsAppLink;
};

export const ContactPharmacy = () => {
  const pcistOne = pharmacist("Hong Yun", "92315581");
  const pcistTwo = pharmacist("Clara", "92315581");

  return (
    <SpeedDial
      ariaLabel="WhatsApp SpeedDial"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<WhatsAppIcon />}
    >
      <SpeedDialAction
        key="sendHY"
        icon={<Avatar sx={{ bgcolor: "#7C8B8C", color: "white" }}>HY</Avatar>}
        tooltipTitle="Ask Hong Yun"
        href={pcistOne}
        target="_blank"
      />

      <SpeedDialAction
        key="sendClara"
        icon={<Avatar sx={{ bgcolor: "#7C8B8C", color: "white" }}>C</Avatar>}
        tooltipTitle="Ask Clara"
        href={pcistTwo}
        target="_blank"
      />
    </SpeedDial>
  );
};
