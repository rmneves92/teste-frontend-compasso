import React, { useEffect } from "react";
import { useUser } from "../context/userContext";
import { Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

import Profile from "../components/profile";

const UserDetails = (props) => {
  const { user } = useUser();
  const history = useHistory();

  useEffect(() => {
    if (!user) history.push("/");
  }, [user, history]);

  return (
    <Container className="mt-4">
      <h1>Detalhes do usuário</h1>
      <Row className="mt-4">
        <Col sm="12">
          <Profile user={user} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
