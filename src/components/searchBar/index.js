import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import PropTypes from "prop-types";

const SearchBar = ({ value, handleChange, handleClick }) => {
  return (
    <InputGroup>
      <Input
        data-testid="input"
        value={value}
        placeholder="Digite o nickname do usuário..."
        onChange={(e) => handleChange(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleClick()}
      />
      <InputGroupAddon addonType="append">
        <Button
          data-testid="btn-search"
          onClick={() => handleClick()}
          color="danger"
        >
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
