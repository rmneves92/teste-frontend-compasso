import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import SearchBar from "../components/searchBar";
import Results from "../components/results";
import api from "../services/api";
import { useUser } from "../context/userContext";
import {
  Card,
  CardTitle,
  Col,
  Toast,
  ToastBody,
  ToastHeader,
  Row,
  Button,
} from "reactstrap";

const initialRepoState = {
  name: "",
  list: [],
};
const Home = (props) => {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState(initialRepoState);
  const [showToast, setShowToast] = useState(false);

  const { user, setUser } = useUser();

  useEffect(() => {
    if (repos.list.length > 0) setRepos(initialRepoState);
    setUser({});
  }, []);

  const toggle = () => setShowToast(!showToast);

  const handleChange = (value) => {
    setQuery(value);
  };

  const getUser = () => {
    api
      .get(`/users/${query}`)
      .then((res) => setUser(res.data))
      .catch((err) => {
        error(err);
      });
  };

  const getRepos = () => {
    api
      .get(`/users/${query}/repos`)
      .then((res) => {
        setRepos({
          name: "Repositórios",
          list: res.data,
        });
      })
      .catch((err) => {
        error(err);
      });
  };

  const getStarred = () => {
    api
      .get(`/users/${query}/starred`)
      .then((res) => {
        setRepos({
          name: "Mais visitados",
          list: res.data,
        });
      })
      .catch((err) => {
        error(err);
      });
  };

  const error = (err) => {
    setUser(null);
    setShowToast(true);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col sm="12">
          <Card body>
            <CardTitle tag="h5">Buscar pelo usuário</CardTitle>

            <Row>
              <Col sm="12">
                <SearchBar
                  value={query}
                  handleChange={handleChange}
                  handleClick={getUser}
                />
              </Col>
            </Row>

            {user?.name && (
              <Row className="mt-4">
                <Col sm="12">
                  <Button
                    data-testid="btn-repos"
                    outline
                    onClick={() => getRepos()}
                    color="primary"
                  >
                    Repos
                  </Button>

                  <Button
                    data-testid="btn-starred"
                    outline
                    onClick={() => getStarred()}
                    color="primary"
                    className="ml-2"
                  >
                    Starred
                  </Button>
                </Col>
              </Row>
            )}
          </Card>
        </Col>
      </Row>

      <Toast isOpen={showToast}>
        <ToastHeader icon="danger" toggle={toggle}>
          Erro
        </ToastHeader>
        <ToastBody>Ocorreu um erro</ToastBody>
      </Toast>

      {repos.list.length > 0 && <Results repo={repos} />}
    </Container>
  );
};

export default Home;
