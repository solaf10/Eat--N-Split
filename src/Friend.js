import { useState } from "react";

function Friend({ data, setSplit, selectedFriend, setIsOpen }) {
  const isSelected = data.id === selectedFriend.id;
  function handleSelection() {
    setSplit(data.id === selectedFriend.id ? "" : data);
    setIsOpen(false);
  }
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      {data.balance > 0 ? (
        <p className="green">
          {data.name} owes you {data.balance}$
        </p>
      ) : data.balance < 0 ? (
        <p className="red">
          You owe {data.name} {-data.balance}$
        </p>
      ) : (
        <p>You and {data.name} are even</p>
      )}
      <button className="button" onClick={handleSelection}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default Friend;
