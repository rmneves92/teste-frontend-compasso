import React, { useState, useContext } from "react";
import { Container } from "reactstrap";
import SearchBar from "../components/searchBar";
import MyButton from "../components/button";
import Results from "../components/results";
import api from "../services/api";
import { UserContext } from "../context/userContext";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const [query, setQuery] = useState("rmneves92");
  const [repos, setRepos] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleChange = (value) => {
    setQuery(value);
  };
  const getUser = async () => {
    api.get(`/users/${query}`).then((res) => {
      setUser(res.data);
      console.log(res.data);
      history.push(`/${res.data.login}`);
    });
  };

  const getRepos = async () => {
    api.get(`/users/${query}/repos`).then((res) => {
      setRepos(res.data);
    });
  };

  const getStarred = async () => {
    api.get(`/users/${query}/starred`).then((res) => {
      setRepos(res.data);
    });
  };

  return (
    <Container>
      <h1>Home</h1>
      <SearchBar value={query} handleChange={handleChange} />

      <MyButton handleClick={getRepos} color="danger">
        getRepos
      </MyButton>
      <MyButton handleClick={getUser} color="info">
        getUser
      </MyButton>

      <MyButton handleClick={getStarred} color="info">
        getStarred
      </MyButton>

      <Results repos={repos} />
    </Container>
  );
};

export default Home;
