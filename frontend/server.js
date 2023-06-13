const express = require('express');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const http = require('http'); // http 모듈 추가

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'root',
  database: 'community_site',
});

// 게시판 목록 조회
app.get('/posts', (req, res) => {
  db.query('SELECT * FROM posts', (error, results) => {
    if (error) {
      console.error('게시판 목록 조회 오류:', error);
      res.status(500).send('게시판 목록 조회에 실패했습니다.');
    } else {
      res.status(200).json(results);
    }
  });
});

// 게시글 추가
app.post('/posts', (req, res) => {
  const { title, content, authorId } = req.body;
  const query = 'INSERT INTO posts (title, content, authorId) VALUES (?, ?, ?)';

  db.query(query, [title, content, authorId], (error, results) => {
    if (error) {
      console.error('게시글 추가 오류:', error);
      res.status(500).send('게시글 추가에 실패했습니다.');
    } else {
      res.status(201).send('게시글이 성공적으로 추가되었습니다.');
    }
  });
});

// 댓글 조회
app.get('/comments/:postId', (req, res) => {
  const { postId } = req.params;
  const query = 'SELECT * FROM comments WHERE postId = ?';

  db.query(query, [postId], (error, results) => {
    if (error) {
      console.error('댓글 조회 오류:', error);
      res.status(500).send('댓글 조회에 실패했습니다.');
    } else {
      res.status(200).json(results);
    }
  });
});

// 댓글 추가
app.post('/comments', (req, res) => {
  const { postId, content, authorId } = req.body;
  const query =
    'INSERT INTO comments (postId, content, authorId) VALUES (?, ?, ?)';

  db.query(query, [postId, content, authorId], (error, results) => {
    if (error) {
      console.error('댓글 추가 오류:', error);
      res.status(500).send('댓글 추가에 실패했습니다.');
    } else {
      res.status(201).send('댓글이 성공적으로 추가되었습니다.');
    }
  });
});

// 이벤트 목록 조회
app.get('/events', (req, res) => {
  db.query('SELECT * FROM events', (error, results) => {
    if (error) {
      console.error('이벤트 목록 조회 오류:', error);
      res.status(500).send('이벤트 목록 조회에 실패했습니다.');
    } else {
      res.status(200).json(results);
    }
  });
});

// 이벤트 추가
app.post('/events', (req, res) => {
  const { event_name, category, content, author_id } = req.body;
  const query =
    'INSERT INTO events (event_name, category, content, author_id) VALUES (?, ?, ?, ?)';

  db.query(
    query,
    [event_name, category, content, author_id],
    (error, results) => {
      if (error) {
        console.error('이벤트 추가 오류:', error);
        res.status(500).send('이벤트 추가에 실패했습니다.');
      } else {
        res.status(201).send('이벤트가 성공적으로 추가되었습니다.');
      }
    },
  );
});

// 사용자 회원가입
app.post('http://localhost:3000/auth/signup', async (req, res) => {
  const { username, password, hashtag, birthday, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const query =
    'INSERT INTO users (username, password, hashtag, birthday, email) VALUES (?, ?, ?, ?, ?)';

  db.query(
    query,
    [username, hashedPassword, hashtag, birthday, email],
    (error, results) => {
      if (error) {
        console.error('회원가입 오류:', error);
        res.status(500).send('회원가입에 실패했습니다.');
      } else {
        res.status(201).send('회원가입이 성공적으로 완료되었습니다.');
      }
    },
  );
});

// 사용자 로그인
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';

  db.query(query, [username], async (error, results) => {
    if (error) {
      console.error('로그인 오류:', error);
      res.status(500).send('로그인에 실패했습니다.');
    } else {
      if (results.length === 0) {
        res.status(401).send('사용자가 존재하지 않습니다.');
      } else {
        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          const token = jwt.sign({ id: user.id }, 'secretKey');
          res.status(200).json({ token });
        } else {
          res.status(401).send('비밀번호가 올바르지 않습니다.');
        }
      }
    }
  });
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Date: Date.now(),
  });
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행 중입니다.`);
});
