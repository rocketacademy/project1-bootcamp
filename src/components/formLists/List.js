import React from "react";

const List = ({ list, deleteItems }) => {
  return (
    <>
      {list.map((listItem, index) => (
        <div
          key={index.toString()}
          style={{
            display: "flex",
            maxWidth: "110px",
            padding: "4px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                maxWidth: "60px",
                fontSize: "15px",
              }}
            >
              {listItem}
            </p>
          </div>
          <div>
            <button
              onClick={() => deleteItems(index)}
              style={{
                backgroundColor: "#ffe0b2",
                height: "35px",
                color: "black",
                fontWeight: "bold",
                width: "35px",
              }}
            >
              x
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
