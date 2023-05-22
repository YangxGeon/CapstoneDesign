import styled from 'styled-components';
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom';

const Header = styled.div`
  background-color: #f2f2f2;
  height: 150px;
  border-bottom: 1px solid #d6d6d6;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderComment1 = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div``

const NewBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 230px;
`;

function AcademicClub() {
    return (
        <>
            <Navbar></Navbar>
            <Header>
                <HeaderComment1>동아리 부원을 모집하고 원하는 동아리를 찾으세요!</HeaderComment1>
            </Header>
            <Body><Link to="/academicclub/new"><NewBtn>새 글 쓰러가기</NewBtn></Link></Body>
        </>
    )
}

export default AcademicClub;