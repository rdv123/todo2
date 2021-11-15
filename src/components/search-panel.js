import React from "react";

const SearchPanel = () => {
  const searchTexte = "Type here to search";
  const searchStyle = {
    fontSize: "25px",
  };
  return <input style={searchStyle} placeholder={searchTexte} />;
};

export default SearchPanel;
