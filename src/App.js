import { useState } from "react";
import AddingFriend from "./AddingFriend";
import Friends from "./Friends";
import Splitting from "./Splitting";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(""); //selectedFriend

  function handleCalcSplitting(e, balance, bill, myExpense) {
    if (!bill || !myExpense) return;
    e.preventDefault();
    setFriends((prev) =>
      prev.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: selectedFriend.balance + balance }
          : friend
      )
    );
    setSelectedFriend("");
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          selectedFriend={selectedFriend}
          setSplit={setSelectedFriend}
          setIsOpen={setIsOpen}
        />
        <AddingFriend
          setFriends={setFriends}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      {selectedFriend && (
        <Splitting
          name={selectedFriend.name}
          handleCalcSplitting={handleCalcSplitting}
        />
      )}
    </div>
  );
}

export default App;
