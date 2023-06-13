import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import React from 'react';
import JoinForm from './pages/SignUp';
import SignIn from './pages/SignIn';
import AcademicClub from './pages/AcademicClub';
import Project from './pages/Project';
import Mento from './pages/Mento';
import Study from './pages/Study';
import PostForm from './Components/PostForm';
import Info from './pages/Info';
import InfoDetail from './pages/InfoDetail';
import CreateForm from './pages/CreateForm';
import EventDetail from './pages/JoinEvent';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/info/detail" element={<InfoDetail />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<JoinForm />} />
      <Route path="/academicclub" element={<AcademicClub />} />
      <Route path="/academicclub/new" element={<PostForm />} />
      <Route path="/study" element={<Study />} />
      <Route path="/mento" element={<Mento />} />
      <Route path="/project" element={<Project />} />
      <Route path="/createForm" element={<CreateForm />} />
      <Route path="/joinevent" element={<EventDetail />} />
    </Routes>
  );
};

export default Router;
