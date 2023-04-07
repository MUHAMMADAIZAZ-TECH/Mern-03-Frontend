import { IconButton, TextInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
const SearchBar = ({ setSearchQuery, searchHandler }) => (
  <div>
    <TextInput
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter Name Or Email Address"
      variant="outlined"
      placeholder="Search..."
      size="small"
      width="500px"
    />
    <IconButton type="submit" aria-label="search" onClick={searchHandler}>
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </div>
);

export default SearchBar;
