import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions/authAction";
import Cookies from "js-cookie";
const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //redux
  const profileRedux = useSelector((state) => state.authReducer.profile);
  // const totalRedux = useSelector((state) => state.cartReducer.total);
  //redux below
  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem("profile"));
    if (profileValue) {
      dispatch(updateProfile(profileValue));
    }
  };
  React.useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    Cookies.set('access_token', null)
    history.replace("/");
    dispatch(updateProfile(null));
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mb-4"
      >
        <Container>
          <NavLink to="/">
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {profileRedux ? (
                <span className="navbar-text text-white">
                  Welcome {profileRedux.name}{" "}
                  <button className="btn btn-danger ml-2" onClick={logout}>
                    Log out
                  </button>
                </span>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
