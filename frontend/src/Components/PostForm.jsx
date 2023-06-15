import React, { useState } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Body = styled.body`
  margin-top: 200px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.input`
  width: 500px;
  height: 50px;
  margin-bottom: 20px;
  font-size: 20px;
`;

const HashtagBox = styled.input`
  width: 500px;
  height: 40px;
  margin-bottom: 20px;
  font-size: 15px;
`;

const ContentBox = styled.textarea`
  width: 500px;
  height: 300px;
  font-size: 17px;
  margin-bottom: 20px;
`;

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');
  const userId = localStorage.getItem('userID');
  const userInfo = localStorage.getItem('userInfo');
  console.log(userInfo);
  const handleSubmit = async (event) => {
    console.log(category);
    event.preventDefault();
    let hashCount = 0;
    let i;
    // 제목과 내용이 비어있는지 확인
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }
    for (i = 0; i < hashtag.length; i++) {
      if (hashtag[i] === '#') hashCount++;
    }
    if (hashCount > 10) {
      alert('해시태그는 10개 이하로 작성해주세요.');
      return;
    }
    if (title.length > 25) {
      alert('제목은 25자를 넘으면 안됩니다.');
      return;
    }
    if (content.length > 300) {
      alert('글 내용은 300자를 넘으면 안됩니다.');
      return;
    }
    console.log(`Title: ${title}, Hashtag : ${hashtag}, Content: ${content}`);

    try {
      // 백엔드 엔드포인트 URL
      const url = `/api/posts/create?category=${category}`;

      // 데이터를 전송할 객체 생성
      const data = { title, hashtag, content, userId, userInfo};

      // POST 요청 전송
      const response = await axios.post(url, data);

      // 응답 처리
      console.log(response.data);

      // 게시글 추가 후 폼 초기화
      setTitle('');
      setHashtag('');
      setContent('');
      if ( response.status === 201){
        alert('게시글 추가 완료')
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert('게시글 추가에 실패했습니다.');
    }
  };

  return (
    <>
      <Navbar />
      <Body>
        <Form onSubmit={handleSubmit}>
          <TitleBox
            type="text"
            placeholder="제목"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <HashtagBox
            type="text"
            placeholder="#해시태그"
            value={hashtag}
            onChange={(event) => setHashtag(event.target.value)}
          />
          <ContentBox
            placeholder="내용"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></ContentBox>
          <button type="submit">게시글 추가</button>
        </Form>
      </Body>
    </>
  );
};

export default PostForm;
