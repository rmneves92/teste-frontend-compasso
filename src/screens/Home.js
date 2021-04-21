import React, { useState, useEffect, useContext } from "react";
import { Container } from "reactstrap";
import SearchBar from "../components/searchBar";
import Results from "../components/results";
import api from "../services/api";
import { UserContext } from "../context/userContext";
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
  const [repo, setRepo] = useState(initialRepoState);
  const [showToast, setShowToast] = useState(false);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (repo.list.length > 0) setRepo(initialRepoState);

    setUser(null);
  }, []);

  // useEffect(() => {
  //   if (list.length > 0) setList([]);

  //   setUser(null);
  // }, [query, list, setUser]);

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
        setRepo({
          name: "repos",
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
        setRepo({
          name: "starred",
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
      <Row>
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

            {user && (
              <Row>
                <Col sm="12">
                  <Button outline onClick={() => getRepos()} color="primary">
                    Repos
                  </Button>

                  <Button outline onClick={() => getStarred()} color="primary">
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

      {repo.list.length > 0 && <Results repo={repo} />}
    </Container>
  );
};

export default Home;
