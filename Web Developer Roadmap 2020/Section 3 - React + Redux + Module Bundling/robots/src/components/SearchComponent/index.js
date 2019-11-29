import React from "react";

const SearchComponent = ({ searchChange }) => (
  <div className="br3 pa3 bw2 tc">
    <input 
        name="search_friends"
        type="search"
        placeholder="search robo friends" 
        className="pa3 ba b--blue bg-lightest-blue"
        onChange={searchChange}
    />
  </div>
);

export default SearchComponent;
