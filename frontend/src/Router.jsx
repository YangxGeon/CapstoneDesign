import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import JoinForm from './pages/SignUp';
import SignIn from './pages/SignIn';
import PostForm from './Components/PostForm';
import Info from './pages/Info';
import InfoDetail from './pages/InfoDetail';
import CreateForm from './pages/CreateForm';
import EventDetail from './pages/JoinEvent';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Info />} />
      <Route path="/post/detail" element={<InfoDetail />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<JoinForm />} />
      <Route path="/postform" element={<PostForm />} />
      <Route path="/project" element={<EventDetail />} />
      <Route path="/createform" element={<CreateForm />} />
      <Route path="/joinevent" element={<EventDetail />} />
    </Routes>
  );
};

export default Router;
