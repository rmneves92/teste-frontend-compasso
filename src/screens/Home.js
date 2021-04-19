import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>

      <Button color="danger">Repos</Button>
      <Button color="info">Starred</Button>
      <br />
    </div>
  );
};

export default Home;
