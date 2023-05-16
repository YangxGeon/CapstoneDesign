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

function Mento() {
    return (
        <>
            <Navbar></Navbar>
            <Header>
                <HeaderComment1>서로의 마음이 맞는 멘토멘티를 찾으세요!</HeaderComment1>
            </Header>
        </>
    )
}

export default Mento;