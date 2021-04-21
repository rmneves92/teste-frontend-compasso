import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import PropTypes from "prop-types";

const SearchBar = ({ value, handleChange, handleClick }) => {
  return (
    <InputGroup>
      <Input
        value={value}
        placeholder="username"
        onChange={(e) => handleChange(e.target.value)}
      />
      <InputGroupAddon addonType="append">
        <Button onClick={() => handleClick()} color="danger">
          Buscar
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
