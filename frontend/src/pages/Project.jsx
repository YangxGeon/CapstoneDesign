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

function Project() {
    return (
        <>
            <Navbar></Navbar>
            <Header>
                <HeaderComment1>프로젝트를 같이 할 사람을 찾아보세요!</HeaderComment1>
            </Header>
        </>
    )
}

export default Project;