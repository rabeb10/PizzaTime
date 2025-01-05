import React, { useState } from "react";

const CraftPizza = () => {
  const [toppings, setToppings] = useState([]);

  const handleToppingChange = (event) => {
    const value = event.target.value;
    setToppings((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };

  return (
    <div>
      <h1>Craft Your Pizza</h1>
      <form>
        <label>
          Size:
          <select>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>
        <label>
          Crust:
          <select>
            <option>Thin Crust</option>
            <option>Thick Crust</option>
          </select>
        </label>
        <fieldset>
          <legend>Select Toppings:</legend>
          <label>
            <input type="checkbox" value="Pepperoni" onChange={handleToppingChange} />
            Pepperoni
          </label>
          <label>
            <input type="checkbox" value="Olives" onChange={handleToppingChange} />
            Olives
          </label>
          <label>
            <input type="checkbox" value="Mushrooms" onChange={handleToppingChange} />
            Mushrooms
          </label>
        </fieldset>
        <button type="submit">Add to Order</button>
      </form>
    </div>
  );
};

export default CraftPizza;
