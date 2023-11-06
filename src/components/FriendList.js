import React from "react";

const FriendList = ({ friendList, deleteFriends }) => {
  return (
    <>
      <ul>
        {friendList.map((friend, index) => (
          <>
            <li key={index.toString()}>{friend}</li>
            <button type="button" onClick={() => deleteFriends(index)}>
              Delete
            </button>
          </>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
