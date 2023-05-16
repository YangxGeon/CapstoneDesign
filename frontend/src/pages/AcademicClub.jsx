import styled from 'styled-components';
import Navbar from '../Components/Navbar'

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

function AcademicClub() {
    return (
        <>
            <Navbar></Navbar>
            <Header>
                <HeaderComment1>동아리 부원을 모집하고 원하는 동아리를 찾으세요!</HeaderComment1>
            </Header>
        </>
    )
}

export default AcademicClub;