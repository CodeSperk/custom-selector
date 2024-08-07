import { useState } from "react";
import CustomSelector from "../../components/custom_selector/CustomSelector";

const Home = () => {
  const [selectedValue, setSelectedValue] = useState([]);

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ];

  const groupedOptions = [
    {
      label: 'Fruits',
      options: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
      ],
    },
    {
      label: 'Citrus',
      options: [
        { value: 'orange', label: 'Orange' },
        { value: 'lemon', label: 'Lemon' },
      ],
    },
  ];

  const handleChange = (value) => {
    setSelectedValue(value);
    console.log('Selected value:', value);
  };


  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      <h1>Custom Select Component Demo</h1>
      <CustomSelector
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={options}
        value={selectedValue}
        placeholder="Select a fruit"
        isGrouped={false}
        isMulti={true}
        onChangeHandler={handleChange}
        onMenuOpen={() => console.log("Menu Opened")}
        onSearchHandler={handleSearch}
      />
    </div>
  );
};

export default Home;