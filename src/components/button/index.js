import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

const MyButton = (props) => {
  return (
    <Button onClick={() => props.handleClick()} {...props}>
      {props.children}
    </Button>
  );
};

MyButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MyButton;
