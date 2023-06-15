import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContentBox = styled.div`
    width: 250px;
    height: 300px;
    border: 1px solid #E3E3E3;
    border-radius: 5px;
    position: absolute;
    top: 330px;
    left: 500px;
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

function Mento() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(`/api/posts/academicclub`);
          setPosts(response.data.slice(0, 4));
        } catch (error) {
          console.error('게시판 목록 조회 오류:', error);
        }
      };
  
      fetchPosts();
    }, []);

    const moment = require('moment');

    function getTimeAgo(postTime) {
        const currentTime = Date.now();
        const newPostTime = new Date(postTime).getTime();
        const diffMilliseconds = currentTime - newPostTime;
        const duration = moment.duration(diffMilliseconds);
        const seconds = duration.asSeconds(); // 초 단위로 변환
      
        let timeAgo;
        if (seconds < 60) { // 60초보다 작을 경우
            timeAgo = `몇초 전`;
        } else {
            const minutes = duration.asMinutes();
            if (minutes < 60) { // 60분보다 작을 경우
                timeAgo = `${Math.round(minutes)}분 전`;
            } else if (minutes < 24 * 60) { // 24시간보다 작을 경우
                timeAgo = `${Math.round(minutes / 60)}시간 전`;
            } else { // 24시간 이상일 경우
                timeAgo = `${Math.round(minutes / (24 * 60))}일 전`;
            }
        }
      
        return timeAgo;
    }
    return (
        <>
            <ContentBox>
                <Header><Link to="/posts?category=meno">멘토멘티 모여 최신 게시글</Link></Header>
                {posts.map((post) => (
                    <Content>
                        <Link to={`/post/detail?postId=${post.id}`} key={post.id}>
                            <Title>{post.title}</Title>
                            <Time>{getTimeAgo(post.created_at)}</Time>
                        </Link>
                    </Content>
                ))}
            </ContentBox>
        </>
    )
}


export default Mento;