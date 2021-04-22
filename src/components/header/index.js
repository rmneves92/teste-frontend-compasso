import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { useUser } from "../../context/userContext";

const Header = (props) => {
  const { user } = useUser();
  const history = useHistory();

  return (
    <Navbar color="warning" light expand="md" data-testid="header">
      <Container>
        <NavbarBrand href="https://github.com/recrutamento-compasso/api-github-interview">
          Teste Compasso
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#" onClick={() => history.push("/")}>
              Home
            </NavLink>
          </NavItem>
          {user?.name && (
            <NavItem>
              <NavLink href="#" onClick={() => history.push(`/${user.login}`)}>
                Detalhes do usuário
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
