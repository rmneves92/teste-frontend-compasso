import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);

  const history = useHistory();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="warning" light expand="md">
        <Container>
          <NavbarBrand href="https://github.com/recrutamento-compasso/api-github-interview">
            Teste Compasso
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink onClick={() => history.push("/")}>Home</NavLink>
              </NavItem>
              {user && (
                <NavItem>
                  <NavLink onClick={() => history.push(`/${user.login}`)}>
                    Detalhes do usuário
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
