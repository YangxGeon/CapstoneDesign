import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import React from "react";
import JoinForm from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AcademicClub from './pages/AcademicClub';
import Project from './pages/Project';
import Mento from './pages/Mento';
import Study from './pages/Study';
import PostForm from './Components/PostForm';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/SignIn" element={<SignIn />} />
			<Route path="/SignUp" element={<JoinForm />} />
			<Route path='/academicclub' element={<AcademicClub />} />
			<Route path='/academicclub/new' element={<PostForm />}/>
			<Route path='/study' element={<Study/>} />
			<Route path='/mento' element={<Mento/>} />
			<Route path='/project' element={<Project/>} />
		</Routes>
	);
};

export default Router;
