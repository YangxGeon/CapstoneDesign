import styled from 'styled-components';

const ContentBox = styled.div`
    width: 250px;
    height: 300px;
    border: 1px solid #E3E3E3;
    border-radius: 5px;
    position: absolute;
    top: 330px;
    left: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #f7e6c4;
    background-color: #f7e6c4;
`

const Content = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #E3E3E3;
`

const Title = styled.div`
    position: absolute;
    top: 23px;
    left: 5px;
`

const Time = styled.div`
    position: absolute;
    top: 23px;
    right: 5px;
    color: gray;
    font-size: 13px;
`

function Project() {
    return (
        <>
            <ContentBox>
                <Header>프로젝트 모여 최신 게시글</Header>
                <Content>
                    <Title>최근 게시물1</Title>
                    <Time>3분 전</Time>
                </Content>
                <Content>
                    <Title>최근 게시물2</Title>
                    <Time>5분 전</Time>
                </Content>
                <Content>
                    <Title>최근 게시물3</Title>
                    <Time>10분 전</Time>
                </Content>
                <Content>
                    <Title>최근 게시물4</Title>
                    <Time>11분 전</Time>
                </Content>
            </ContentBox>
        </>
    )
}

export default Project;