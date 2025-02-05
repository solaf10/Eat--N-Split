import { useState } from "react";
import Friend from "./Friend";

function Friends({ friends, setSplit, selectedFriend, setIsOpen }) {
  const content =
    friends &&
    friends.map((friend) => (
      <Friend
        key={friend.id}
        data={friend}
        setSplit={setSplit}
        selectedFriend={selectedFriend}
        setIsOpen={setIsOpen}
      />
    ));
  return <ul>{content}</ul>;
}

export default Friends;
