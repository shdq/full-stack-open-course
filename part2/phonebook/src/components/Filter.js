import React from "react";

const Filter = ({ queryValue, onFilterUpdate }) => {
  return (
    <div>
      Filter contacts: <input onChange={onFilterUpdate} value={queryValue} />
    </div>
  );
};

export default Filter;
