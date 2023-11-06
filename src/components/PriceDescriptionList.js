import React from "react";

const PriceDescriptionList = ({ details, deleteItems }) => {
  console.log(details);
  return (
    <>
      <ul>
        {details.map((detail, index) => (
          <>
            <li key={index.toString()}>
              {detail.description} --- {detail.price} - {detail.payer}
            </li>
            <button type="button" onClick={() => deleteItems(index)}>
              Delete
            </button>
          </>
        ))}
      </ul>
    </>
  );
};

export default PriceDescriptionList;
