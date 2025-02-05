import { useState } from "react";

function AddingFriend({ setFriends, isOpen, setIsOpen }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleAdding(e, name, image) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    setFriends((prev) => [
      ...prev,
      { id, name: name, image: `${image}?=${id}`, balance: 0 },
    ]);
    // setName("");
    // setImage("https://i.pravatar.cc/48");
    setIsOpen(false);
  }
  return (
    <>
      {isOpen && (
        <form className="form-add-friend">
          <label htmlFor="name">👩🏻‍🤝‍👩🏻 Friend name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="image">📷 Image URL</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            className="button"
            type="submit"
            value="Add"
            onClick={(e) => handleAdding(e, name, image)}
          />
        </form>
      )}
      <div className="button" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? `Close` : `Add Friend`}
      </div>
    </>
  );
}

export default AddingFriend;
