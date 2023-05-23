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

const Body = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NewBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 230px;
`;

const Content = styled.div`
    width: 500px;
    height: 60px;
    border: 1px solid #E2E2E2;
    border-radius: 5px;
    margin-bottom: 5px;
    position: relative;
    display: flex;
    align-items: center;
    background-color: #E2E2E2;
`;

const ContentTitle = styled.div`
    font-size: 18px;
    position: absolute;
    left: 10px;
`;

const Like = styled.div`
    font-size: 10px;
    position: absolute;
    right: 10px;
`;

function Info() {

    const posts = [
        { id: 1, title: '첫 번째 게시글', like: 17 },
        { id: 2, title: '두 번째 게시글', like: 19 },
        { id: 3, title: '세 번째 게시글', like: 15 }
    ];

    return (
        <>
            <Navbar></Navbar>
            <Header>
                <HeaderComment1>자유롭게 정보를 공유 해보세요!</HeaderComment1>
            </Header>
            <Body>
                <Link to="/academicclub/new"><NewBtn>새 글 쓰러가기</NewBtn></Link>
                {posts.map(post => (
                    <Content key={post.id}>
                        <ContentTitle>{post.title}</ContentTitle>
                        <Like>❤️{post.like}</Like>
                    </Content>
                ))}
            </Body>
        </>
    )
}

export default Info;