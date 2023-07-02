import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ARC from "../../assets/icons/ARC.webp";
import "./NavBar.css";
import { Image } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        className="animate-navbar nav-theme justify-content-between"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <Image
            src={ARC}
            alt="arc"
            rounded
            className="arc image-style m-1"
          ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
