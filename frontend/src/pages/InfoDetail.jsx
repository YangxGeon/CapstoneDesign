import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Body = styled.div`
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

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CommentInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

const CommentButton = styled.button`
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
`;

const CommentList = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
`;

const CommentItem = styled.li`
  margin-bottom: 10px;
`;

const NestedCommentForm = styled.form`
  margin-left: 20px;
`;

const NestedCommentInput = styled.input`
  margin-bottom: 5px;
  padding: 3px;
`;

const NestedCommentButton = styled.button`
  padding: 3px 6px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
`;

function InfoDetail() {
  const [post, setPost] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [nestedCommentText, setNestedCommentText] = useState('');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const postId = params.get('postId');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/detail/${postId}`);
        const postData = response.data;
        setPost(postData);
      } catch (error) {
        console.error('게시글 정보 가져오기 오류:', error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/posts/${postId}/comments`, {
        text: commentText,
      });
      console.log(response);
      const newComment = response.data.text;
  
      // 이전 상태(prevPost) 대신에 이전 상태를 참조하는 함수(prevPost)를 사용하여 상태 업데이트
      setPost((prevPost) => {
        return {
          ...prevPost,
          comments: [...prevPost.comments, newComment],
        };
      });
      setCommentText('');
    } catch (error) {
      console.error('댓글 추가 오류:', error);
    }
  };
  
  const handleNestedCommentSubmit = async (event, commentId) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `/api/posts/${postId}/comments/${commentId}/nested-comments`,
        {
          text: nestedCommentText,
        }
      );
      const newNestedComment = response.data;
  
      // 이전 상태(prevPost) 대신에 이전 상태를 참조하는 함수(prevPost)를 사용하여 상태 업데이트
      setPost((prevPost) => {
        const updatedComments = prevPost.comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              nestedComments: [...comment.nestedComments, newNestedComment],
            };
          }
          return comment;
        });
  
        return {
          ...prevPost,
          comments: updatedComments,
        };
      });
      setNestedCommentText('');
    } catch (error) {
      console.error('대댓글 추가 오류:', error);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <Body>
        <Main>
          {post ? (
            <TitleAndContent>
              <ContentInfo>
                <Info>
                  <span>작성자 : {post.authorInfo}</span>
                  <span>{post.createdAt}</span>
                </Info>
              </ContentInfo>
              <Title>
                <div>{post.title}</div>
                <Like>❤️{post.likes}</Like>
              </Title>
              <Content>{post.content}</Content>
              <CommentForm onSubmit={handleCommentSubmit}>
                <CommentInput
                  type="text"
                  placeholder="댓글을 입력하세요"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <CommentButton type="submit">댓글 추가</CommentButton>
              </CommentForm>
              <CommentList>
                {post.comments && post.comments.map((comment) => (
                  <CommentItem key={comment.id}>
                    <div>{comment.text}</div>
                    <NestedCommentForm
                      onSubmit={(e) => handleNestedCommentSubmit(e, comment.id)}
                    >
                      <NestedCommentInput
                        type="text"
                        placeholder="대댓글을 입력하세요"
                        value={nestedCommentText}
                        onChange={(e) => setNestedCommentText(e.target.value)}
                      />
                      <NestedCommentButton type="submit">
                        대댓글 추가
                      </NestedCommentButton>
                    </NestedCommentForm>
                    <ul>
                      {comment.nestedComments.map((nestedComment) => (
                        <li key={nestedComment.id}>{nestedComment.text}</li>
                      ))}
                    </ul>
                  </CommentItem>
                ))}
              </CommentList>
            </TitleAndContent>
          ) : (
            <div>게시글을 불러오는 중입니다...</div>
          )}
        </Main>
      </Body>
    </>
  );
}

export default InfoDetail;
