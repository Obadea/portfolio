// components/FilteredData.js
const FilteredData = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default FilteredData;
