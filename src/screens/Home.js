import React, { useState, useContext } from "react";
import { Container } from "reactstrap";
import SearchBar from "../components/searchBar";
import MyButton from "../components/button";
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
} from "reactstrap";

const Home = (props) => {
  const [query, setQuery] = useState("rmneves92");
  const [list, setList] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [title, setTitle] = useState("");

  const { user, setUser } = useContext(UserContext);

  const toggle = () => setShowToast(!showToast);

  const handleChange = (value) => {
    setQuery(value);
  };
  const getUser = () => {
    api
      .get(`/users/${query}`)
      .then((res) => setUser(res.data))
      .catch((err) => {
        setShowToast(true);
        console.log(err.response);
      });
  };

  const getRepos = () => {
    api
      .get(`/users/${query}/repos`)
      .then((res) => {
        setList(res.data);
        setTitle("repos");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getStarred = () => {
    api
      .get(`/users/${query}/starred`)
      .then((res) => {
        setList(res.data);
        setTitle("starred");
      })
      .catch((err) => {
        console.log(err.response);
      });
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
                  <MyButton handleClick={getRepos} color="primary">
                    Repos
                  </MyButton>

                  <MyButton handleClick={getStarred} color="primary">
                    Starred
                  </MyButton>
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
      <Results list={list} title={title} />
    </Container>
  );
};

export default Home;
