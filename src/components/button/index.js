import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import "./styles.scss";

const MyButton = (props) => {
  return (
    <Button
      className="button"
      outline
      onClick={() => props.handleClick()}
      {...props}
    >
      {props.children}
    </Button>
  );
};

MyButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MyButton;
