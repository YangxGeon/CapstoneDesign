import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  margin-bottom: 10px;
`;

const CommentContent = styled.div`
  margin-bottom: 5px;
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

const NestedCommentItem = ({ nestedComment }) => {
  return <li>{nestedComment.text}</li>;
};

const CommentItem = ({
  comment,
  handleNestedCommentSubmit,
  handleNestedCommentTextChange,
}) => {
  return (
    <CommentWrapper>
      <CommentContent>
        작성자 : {comment.authorInfo}
        <br></br>
        {comment.text}
      </CommentContent>
      <NestedCommentForm
        onSubmit={(e) => handleNestedCommentSubmit(e, comment.id)}
      ></NestedCommentForm>
      {comment.nestedComments && comment.nestedComments.length > 0 && (
        <ul>
          {comment.nestedComments.map((nestedComment) => (
            <NestedCommentItem
              key={nestedComment.id}
              nestedComment={nestedComment}
            />
          ))}
        </ul>
      )}
    </CommentWrapper>
  );
};

export default CommentItem;
