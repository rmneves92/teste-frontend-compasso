import React from "react";
import PropTypes from "prop-types";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Card,
  CardTitle,
} from "reactstrap";

const Results = ({ repo }) => {
  return (
    <Row className="mt-4 mb-4" data-testid="results">
      <Col sm="12">
        {repo.list.length > 0 && (
          <Card body>
            <CardTitle tag="h5">{repo.name}</CardTitle>
            <ListGroup>
              {repo.list.map((item) => (
                <ListGroupItem key={item.id}>{item.name}</ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        )}
      </Col>
    </Row>
  );
};

Results.propTypes = {
  repo: PropTypes.any.isRequired,
};

export default Results;
