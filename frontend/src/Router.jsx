import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import React from "react";
import JoinForm from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/SignIn" element={<SignIn />} />
			<Route path="/SignUp" element={<JoinForm />} />
		</Routes>
	);
};

export default Router;
