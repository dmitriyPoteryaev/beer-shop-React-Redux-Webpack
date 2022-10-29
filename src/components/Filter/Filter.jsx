import React from "react";
import Select from "../UI/Select/Select";

const Filter = ({ filterSelector, setfilterSelector }) => {
  return (
    <div>
      <Select
        filterSelector={filterSelector}
        setfilterSelector={setfilterSelector}
        defaultName="Sort by:"
        options={[{ name: "abv", value: "abv" }]}
      />
    </div>
  );
};

export default Filter;
