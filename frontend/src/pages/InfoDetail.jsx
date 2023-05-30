import styled from 'styled-components';
import Navbar from '../Components/Navbar';

const Body = styled.body`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Main = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: top;
`;

const ContentInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: -40px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    color: gray;
`;

const Title = styled.div`
    font-size: 25px;
    width: 500px;
    height: 50px;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const Like = styled.div`
    font-size: 16px;
`;

const TitleAndContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    position: relative;
`;

const Content = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    font-size: 15px;
`;

const Comment = styled.div`
    width: 20%;
    height: 100px;
    border: 1px solid black;
`;

function InfoDetail() {
    return (
        <>
            <Navbar></Navbar>
            <Body>
                <Main>
                    <TitleAndContent>
                        <ContentInfo>
                            <img src="../img/user.png" height="40px" width="40px"></img>
                            <Info>
                                <span>닉네임</span>
                                <span>05/23 17:34</span>
                            </Info>
                        </ContentInfo>
                        <Title>
                            <div>첫 번째 게시물</div>
                            <Like>❤️17</Like>
                        </Title>
                        <Content>이 글은 첫 번째 글입니다.</Content>
                    </TitleAndContent>
                </Main>
            </Body>
        </>
    )
}

export default InfoDetail;