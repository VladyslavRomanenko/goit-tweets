import React from "react";
import Select from "react-select";
import { customStyles } from "../../styles/customStyles";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../redux/users/slice";

const Filter = () => {
  const options = [
    { label: "Show All", value: "all" },
    { label: "Follow", value: "follow" },
    { label: "Following", value: "following" },
  ];

  const dispatch = useDispatch();

  const handleChange = ({ value }) => {
    dispatch(updateFilter(value));
  };

  return (
    <div>
      <Select
        options={options}
        styles={customStyles}
        onChange={handleChange}
        defaultValue={options[0]}
      />
    </div>
  );
};

export default Filter;
