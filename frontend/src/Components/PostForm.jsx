import React, { useState } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import axios from 'axios';

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

const ContentBox = styled.textarea`
  width: 500px;
  height: 300px;
  font-size: 17px;
  margin-bottom: 20px;
`;

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 제목과 내용이 비어있는지 확인
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
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
    console.log(`Title: ${title}, Content: ${content}`);
    try {
      // 스프링 백엔드 엔드포인트 URL
      const url = 'http://example.com/api/posts';

      // 데이터를 전송할 객체 생성
      const data = { title, content };

      // POST 요청 전송
      const response = axios.post(url, data);

      // 응답 처리
      console.log(response.data);

      // 게시글 추가 후 폼 초기화
      setTitle('');
      setContent('');
    } catch (error) {
      console.error(error);
      alert('게시글 추가에 실패했습니다.');
    }
  };
  

  return (
    <>
      <Navbar></Navbar>
      <Body>
        <Form onSubmit={handleSubmit}>
          <TitleBox
            type="text"
            placeholder="제목"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
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
