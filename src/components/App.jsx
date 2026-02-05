import React, { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";
import HogForm from "./HogForm";
import hogsData from "../porkers_data";
import "../App.css";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  function handleAddHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  function handleHideHog(name) {
    setHogs(hogs.filter((hog) => hog.name !== name));
  }

  function handleGreasedChange(e) {
    setGreasedOnly(e.target.checked);
  }

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  let displayedHogs = [...hogs];
  if (greasedOnly) displayedHogs = displayedHogs.filter((hog) => hog.greased);
  if (sortBy === "name") displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "weight") displayedHogs.sort((a, b) => a.weight - b.weight);

  return (
    <div className="App">
      <Nav />
      <HogForm onAddHog={handleAddHog} />
      <div className="filterWrapper">
        <label htmlFor="greasedOnly">Greased Pigs Only?</label>
        <input
          type="checkbox"
          id="greasedOnly"
          checked={greasedOnly}
          onChange={handleGreasedChange}
        />
        <label htmlFor="sortBy">Sort by:</label>
        <select id="sortBy" value={sortBy} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <div className="ui grid container">
        {displayedHogs.map((hog) => (
          <div key={hog.name} className="ui eight wide column">
            <HogCard hog={hog} onHide={handleHideHog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
