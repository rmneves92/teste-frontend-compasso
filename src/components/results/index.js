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

const Results = ({ list, title }) => {
  return (
    <Row>
      <Col sm="12">
        {list.length > 0 && (
          <Card body>
            <CardTitle tag="h5">{title}</CardTitle>
            <ListGroup>
              {list.map((repo) => (
                <ListGroupItem>{repo.name}</ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        )}
      </Col>
    </Row>
  );
};

Results.propTypes = {
  list: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default Results;
