import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = styled.header`
  z-index: 10;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #d6d6d6;
  background-color: white;
`;

const Logo = styled.div`
  position: absolute;
  left: 20%;
  font-weight: bolder;
  font-size: 18px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30%;
  font-weight: bold;
`;

const Menu = styled.div`
  margin-right: 40px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 15%;
  width: 150px;
`;

const LoginBtn = styled.button`
  width: 70px;
  height: 35px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const SignUpBtn = styled.button`
  width: 70px;
  height: 35px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const LogoutBtn = styled.button`
  width: 70px;
  height: 35px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

function Navbar({ category }) {
  const history = useNavigate();

  // 로컬 스토리지에서 JWT 토큰 가져오기
  const token = localStorage.getItem('jwtToken');

  const handleLogout = () => {
    // 토큰 삭제
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userID');
    // 홈 화면으로 리디렉션
    history('/');
    window.location.reload();
  };

  return (
    <Header>
      <Logo>
        <Link to="/">한대모여</Link>
      </Logo>
      <Nav>
        <Menu>
          <Link to="/posts?category=info">정보공유 모여</Link>
        </Menu>
        <Menu>
          <Link to="/posts?category=academicclub">동아리 모여</Link>
        </Menu>
        <Menu>
          <Link to="/posts?category=study">스터디 모여</Link>
        </Menu>
        <Menu>
          <Link to="/posts?category=project">프로젝트 모여</Link>
        </Menu>
        <Menu>
          <Link to="/posts?category=mento">멘토멘티 모여</Link>
        </Menu>
      </Nav>
      {!token || token === 'undefined' ? (
        <BtnBox>
          <Link to="/SignIn">
            <LoginBtn>Login</LoginBtn>
          </Link>
          <Link to="/SignUp">
            <SignUpBtn>SignUp</SignUpBtn>
          </Link>
        </BtnBox>
      ) : (
        <BtnBox>
          <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
        </BtnBox>
      )}
    </Header>
  );
}

export default Navbar;
