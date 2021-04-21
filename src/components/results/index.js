import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Row } from "reactstrap";

const Results = ({ repos }) => {
  console.log("repos recebida:", repos);
  return (
    <Row>
      <ListGroup>
        {repos.map((repo) => (
          <ListGroupItem action tag="a" href={repo.html_url}>
            {repo.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Row>
  );
};

Results.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Results;
