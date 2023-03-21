import React from "react";
import {Outlet} from "react-router-dom";
import Navigation from "../Navigation";
import Container from "react-bootstrap/Container";

const Layout = () => {
    return (
        <>
            <Container>
            <Navigation/>
            <Outlet/>
            </Container>
        </>
    );
};

export default Layout;