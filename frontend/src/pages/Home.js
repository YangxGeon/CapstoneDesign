import React from 'react';
import Navbar from '../Components/Navbar';
import styled from 'styled-components';
import AcademicClub from '../Components/AcademicClub';
import Study from '../Components/Study';
import Project from '../Components/Project';
import Mento from '../Components/Mento';
import Recommend from '../Components/Recommend';
import Popular from '../Components/Popular';

const Header = styled.div`
  background-color: #f2f2f2;
  height: 150px;
  border-bottom: 1px solid #d6d6d6;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderComment1 = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

const HeaderComment2 = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  padding: 10px 0px;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Main = styled.div`
  width: 60%;
  position: relative;
  box-sizing: border-box;
`;

const UserBox = styled.div`
  width: 200px;
  background-color: #f9f9f9;
  position: absolute;
  top: 20px;
  left: 0px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
`;

const UesrImg = styled.div``;

const UserNickname = styled.div`
  font-size: 20px;
  padding: 10px 0px;
`;

const UserNameEmail = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a6a6a6;
`;

const UserBtnBox = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserBtn = styled.button`
  background-color: #f9f9f9;
  margin: 0px 5px;
  padding: 5px;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  appearance: none;
`;

const UserComment = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
  background-color: #f9f9f9;
  top: 270px;
  left: 0px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentBox = styled.div`
  display: flex;
  padding-left: 30px;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 33%;
  box-sizing: border-box;
`;

const Line = styled.div`
  width: 80%;
  background-color: #d6d6d6;
  height: 1px;
`;

const Comment = styled.div`
  margin-left: 20px;
`;

const Search = styled.input`
  width: 250px;
  height: 40px;
  background-color: #f9f9f9;
  border: 2px solid #e3e3e3;
  border-radius: 3px;
`;

const SearchBox = styled.div`
  position: absolute;
  top: 20px;
  left: 770px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchImg = styled.div`
  position: absolute;
  top: 10px;
  left: 220px;
`;

const Name = styled.div`
  margin-bottom: 3px;
`;

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header>
        <HeaderComment1>한국 대학생들 한 곳에 모여!</HeaderComment1>
        <HeaderComment2>
          비슷한 과에 있는 학생들과 자유로운 소통과 여러 활동을 해보세요.
        </HeaderComment2>
      </Header>
      <Body>
        <Main>
          <UserBox>
            <UesrImg>
              <img src="img/user.png" height="50px" width="50px"></img>
            </UesrImg>
            <UserNickname>닉네임</UserNickname>
            <UserNameEmail>
              <Name>이름</Name>
              <div>이메일</div>
            </UserNameEmail>
            <UserBtnBox>
              <UserBtn>내 정보</UserBtn>
              <UserBtn>로그아웃</UserBtn>
            </UserBtnBox>
          </UserBox>
          <UserComment>
            <CommentBox>
              <img src="img/writing.png" height="25px" width="25px"></img>
              <Comment>내가 쓴 글</Comment>
            </CommentBox>
            <Line></Line>
            <CommentBox>
              <img src="img/comments.png" height="25px" width="25px"></img>
              <Comment>댓글 단 글</Comment>
            </CommentBox>
            <Line></Line>
            <CommentBox>
              <img src="img/star.png" height="25px" width="25px"></img>
              <Comment>내 스크랩</Comment>
            </CommentBox>
          </UserComment>
          <AcademicClub></AcademicClub>
          <Study></Study>
          <Project></Project>
          <Mento></Mento>
          <SearchBox>
            <Search placeholder="전체 게시판의 글을 검색하세요!"></Search>
            <SearchImg>
              <img
                src="/img/magnifying-glass.png"
                width="20px"
                height="20px"
              ></img>
            </SearchImg>
          </SearchBox>
          <Recommend></Recommend>
          <Popular></Popular>
        </Main>
      </Body>
    </>
  );
};

export default Home;
