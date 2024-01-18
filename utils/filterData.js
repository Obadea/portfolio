import React, { useState } from "react";
import data from "@/components/data";

const filterData = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [filteredItems, setFilteredItems] = useState(data);
  let filters = ["New", "JavaScript", "Old", "Progress"];

  return <div></div>;
};

export default filterData;
