import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row,
} from "reactstrap";
import PropTypes from "prop-types";

const SearchBar = (props) => {
  return (
    <Row>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input
          value={props.value}
          placeholder="username"
          onChange={(e) => props.handleChange(e.target.value)}
        />
      </InputGroup>
    </Row>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
