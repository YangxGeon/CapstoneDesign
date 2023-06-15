import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import { Link,useLocation } from 'react-router-dom';
import axios from 'axios';

const Header = styled.div`
  background-color: #f1c376;
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
  position: relative;
`;

const NewBtn = styled.button`
  position: absolute;
  right: 200px;
  height: 50px;
  cursor: pointer;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
`;

const Content = styled.div`
  width: 700px;
  height: 50px;
  border: 1px solid #F7E6C4;
  border-radius: 5px;
  margin-bottom: 5px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #F7E6C4;
`;

const ContentTitle = styled.div`
  font-size: 18px;
  position: absolute;
  left: 10px;
`;

const HashTag = styled.div`
  position: absolute;
  left: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Like = styled.div`
  font-size: 10px;
  position: absolute;
  right: 10px;
`;
function Info() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [posts, setPosts] = useState([]);
    const category = params.get('category');
  
    useEffect(() => {
      console.log(category);
      const fetchPosts = async () => {
        try {
          const response = await axios.get(`/api/posts/${category}`);
          setPosts(response.data);
        } catch (error) {
          console.error('게시판 목록 조회 오류:', error);
        }
      };
  
      fetchPosts();
    }, [category]);
  
    return (
      <>
        <Navbar />
        <Header>
          <HeaderComment1>{category} posts</HeaderComment1>
        </Header>
        <Body>
          <Link to={`/postform?category=${category}`}>
            <NewBtn>새 글 쓰러가기</NewBtn>
          </Link>
          {posts.map((post) => (
            <Link to={`/post/detail?postId=${post.id}`} key={post.id}>
              <Content>
                <ContentTitle>{post.title}</ContentTitle>
                <HashTag>{post.hashtags}</HashTag>
                <Like>❤️{post.likes}</Like>
              </Content>
            </Link>
          ))}
        </Body>
      </>
    );
  }
  
  export default Info;