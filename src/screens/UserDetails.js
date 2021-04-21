import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { Media } from "reactstrap";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";

const UserDetails = (props) => {
  const { user } = useContext(UserContext);

  console.log("dados do usuario", user);
  return (
    // <Media>
    //   <Media left top href={user.html_url} target="_blank">
    //     <Media src={user.avatar_url} alt="Generic placeholder image" />
    //   </Media>
    //   <Media body>
    //     <Media heading>{user.name} </Media>
    //     <spa>{user.bio}</spa>
    //     <span>Repositorios: {user.public_repos}</span>
    //   </Media>
    // </Media>

    <Container>
      <Card>
        <CardImg top width="1%" src={user?.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{user?.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Bio
          </CardSubtitle>
          <CardText>{user?.bio}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default UserDetails;
