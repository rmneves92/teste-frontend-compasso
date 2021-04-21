import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

import Profile from "../components/profile";

const UserDetails = (props) => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) history.push("/");
  }, [user, history]);

  return (
    <Container>
      <Row>
        <Col sm="12">
          <Profile user={user} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
