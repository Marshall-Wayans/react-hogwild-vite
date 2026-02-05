import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newHog = {
      name,
      weight: parseFloat(weight),
      specialty,
      greased,
      "highest medal achieved": "wood",
      image: image || "https://via.placeholder.com/150",
    };
    onAddHog(newHog);
    setName("");
    setWeight("");
    setSpecialty("");
    setGreased(false);
    setImage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="weight">Weight:</label>
      <input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />

      <label htmlFor="specialty">Specialty:</label>
      <input id="specialty" type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />

      <label htmlFor="greased">Greased?</label>
      <input id="greased" type="checkbox" checked={greased} onChange={(e) => setGreased(e.target.checked)} />

      <label htmlFor="image">Image URL:</label>
      <input id="image" type="text" value={image} onChange={(e) => setImage(e.target.value)} />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
