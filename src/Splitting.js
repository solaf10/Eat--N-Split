import { useState } from "react";

function Splitting({ name, handleCalcSplitting }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [pay, setPay] = useState("you");
  const calc = pay === "you" ? bill - +myExpense : -myExpense;
  return (
    <form className="form-split-bill">
      <h2>split a bill with {name}</h2>
      <label htmlFor="bill">💰 Bill Value</label>
      <input
        type="number"
        id="bill"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label htmlFor="yourExpense">🧍🏻‍♀️ Your expense</label>
      <input
        type="number"
        id="yourExpense"
        value={myExpense}
        onChange={(e) =>
          setMyExpense((prev) =>
            Number(e.target.value) > bill ? prev : Number(e.target.value)
          )
        }
      />
      <label htmlFor="friend">👩🏻‍🤝‍👩🏻 {name}'s expense:</label>
      <input
        type="number"
        id="friend"
        value={bill - myExpense === 0 ? "" : bill - myExpense}
        disabled
      />
      <label htmlFor="pay">😁 Who is paying the bill?</label>
      <select id="pay" value={pay} onChange={(e) => setPay(e.target.value)}>
        <option value="you">You</option>
        <option value={name}>{name}</option>
      </select>
      <input
        className="button"
        type="submit"
        value="Split bill"
        onClick={(e) => handleCalcSplitting(e, calc, bill, myExpense)}
      />
    </form>
  );
}

export default Splitting;
