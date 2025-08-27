import React, { useEffect, useState } from "react";

const GridItem = ({ clearSelection, updateClearSelection }) => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const handleClick = () => {
    setCheckboxChecked(!checkboxChecked);
    if (clearSelection) {
        updateClearSelection()
    }
  };
  useEffect(() => {
    if (clearSelection) {
      setCheckboxChecked(false);
    }
  }, [clearSelection]);
  return (
    <div
      className={`grid-item ${checkboxChecked ? "checkboxChecked" : ""}`}
      onClick={handleClick}
    >
      <input type="checkbox" defaultChecked={checkboxChecked} hidden={true} />
    </div>
  );
};

export default GridItem;
