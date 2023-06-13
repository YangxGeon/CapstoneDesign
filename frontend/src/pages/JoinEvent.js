import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`/events/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data);
      })
      .catch((error) => {
        console.error('이벤트 상세 정보 조회 오류:', error);
      });
  }, [id]);

  const handleParticipate = () => {
    // 로그인 상태 확인
    const token = localStorage.getItem('jwtToken');
    const isLoggedIn = !!token;

    if (isLoggedIn) {
      // 이벤트 참여 처리 로직
      const eventData = {
        title: event.event_name,
        user: {
          id: '사용자ID',
          name: '사용자이름',
          // 로그인한 사용자의 정보를 추가할 수 있습니다.
        },
      };

      fetch('/participate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('이벤트 참여 결과:', data);
          // 이벤트 참여 성공 시 필요한 로직을 추가할 수 있습니다.
        })
        .catch((error) => {
          console.error('이벤트 참여 오류:', error);
        });
    } else {
      // 로그인 필요 알림
      alert('로그인이 필요합니다. 로그인 해주세요.');
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>이벤트 상세 정보</h2>
      <Card sx={{ maxWidth: 500, marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {event.event_name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            카테고리: {event.category}
          </Typography>
          <Typography variant="body1" gutterBottom>
            내용: {event.content}
          </Typography>
          <Typography variant="body1">작성자 ID: {event.author_id}</Typography>
        </CardContent>
      </Card>
      <Button variant="contained" onClick={handleParticipate}>
        이벤트 참여
      </Button>
    </div>
  );
}

export default EventDetail;
