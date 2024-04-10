import React, { useState } from "react";

const schoolItems = [
  { id: 1, name: "Mathematics", description: "Math is cool" },
  { id: 2, name: "History", description: "History is amazing" },
  { id: 3, name: "Science", description: "Science is fascinating" },
  // Add more items as needed
];

function App() {
  // State for the list of school items (if it changes dynamically)
  const [items, setItems] = useState(schoolItems);
  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter items based on search query
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>School Items</h1>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
