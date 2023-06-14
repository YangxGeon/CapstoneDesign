const express = require('express');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const http = require('http'); // http 모듈 추가
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;
const corsOptions = {
  origin: 'http://localhost:4000',
  credentials : true,
}
// Body parser 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
	console.log(`Server on : http://localhost:${PORT}/`);
})

app.use(express.json());
app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rlarjsdn99',
  database: 'community',
});

// 게시판 목록 조회
app.get('/api/posts/:category', (req, res) => {
  const category = req.params.category; // 카테고리 정보 받기
  console.log(category);

  let query = 'SELECT * FROM posts'; // 기본 쿼리

  if (category) {
    query += ` WHERE category = '${category}'`; // 카테고리 정보가 있는 경우 WHERE 절 추가
  }

  db.query(query, (error, results) => {
    if (error) {
      console.error('게시판 목록 조회 오류:', error);
      res.status(500).send('게시판 목록 조회에 실패했습니다.');
    } else {
      res.status(200).json(results);
    }
  });
});


//게시글 상세정보 조회
app.get('/api/posts/detail/:postId', (req, res) => {
  const postId = req.params.postId;
  console.log(postId)

  // Query the database to fetch the post details based on the postId
  const query = 'SELECT * FROM posts WHERE id = ?';
  db.query(query, [postId], (error, results) => {
    if (error) {
      console.error('게시물 상세정보 조회 오류:', error);
      res.status(500).send('게시물 상세정보 조회에 실패했습니다.');
    } else if (results.length === 0) {
      res.status(404).send('게시물을 찾을 수 없습니다.');
    } else {
      const post = results[0]; // Assuming the query returns a single post

      // Format the post data as needed
      const postDetail = {
        id: post.id,
        title: post.title,
        content: post.content,
        authorId: post.author_id,
        hashtags: post.hashtags,
        likes: post.likes,
        createdAt: post.createdAt,
        // Include any other fields you want to send
      };

      res.status(200).json(postDetail);
    }
  });
});

// 게시글 추가
app.post('/api/posts/create', (req, res) => {
  const { title, content, authorId,hashtag } = req.body;
  const { category } = req.query;
  const query = 'INSERT INTO posts (title, content, author_id, category,hashtags) VALUES (?, ?, ?, ?,?)';

  db.query(query, [title, content, authorId, category, hashtag], (error, results) => {
    if (error) {
      console.error('게시글 추가 오류:', error);
      res.status(500).send('게시글 추가에 실패했습니다.');
    } else {
      res.status(201).send('게시글이 성공적으로 추가되었습니다.');
    }
  });
});

// 댓글 조회
app.get('/api/posts/:postId/comments', (req, res) => {
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



// POST /api/posts/:postId/comments 라우트 핸들러 - 댓글 작성
app.post('/api/posts/:postId/comments', (req, res) => {
  const postId = req.params.postId;
  const { text } = req.body;

  // 댓글 삽입 쿼리 실행
  db.query(
    'INSERT INTO comments (postId, text) VALUES (?, ?)',
    [postId, text],
    (err, result) => {
      if (err) {
        console.error('Error inserting comment:', err);
        res.status(500).json({ error: 'Error inserting comment' });
      } else {
        const newCommentId = result.insertId;
        const newComment = { id: newCommentId, postId, text };
        res.json(newComment);
      }
    }
  );
});

// POST /api/posts/:postId/comments/:commentId/nested-comments 라우트 핸들러 - 대댓글 작성
app.post('/api/posts/:postId/comments/:commentId/nested-comments', (req, res) => {
  const postId = req.params.postId;
  const commentId = req.params.commentId;
  const { text } = req.body;

  // 대댓글 삽입 쿼리 실행
  db.query(
    'INSERT INTO nested_comments (commentId, text) VALUES (?, ?)',
    [commentId, text],
    (err, result) => {
      if (err) {
        console.error('Error inserting nested comment:', err);
        res.status(500).json({ error: 'Error inserting nested comment' });
      } else {
        const newNestedCommentId = result.insertId;
        const newNestedComment = { id: newNestedCommentId, commentId, text };
        res.json(newNestedComment);
      }
    }
  );
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
app.post('/auth/signup', async (req, res) => {
  console.log(req.body);
  const { email, name, username, password, hashtags, birthday } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const query =
    'INSERT INTO users (email, name, username, password, birthday) VALUES (?, ?, ?, ?, ?)';

  db.query(
    query,
    [email, name, username, hashedPassword, birthday],
    (error, results) => {
      if (error) {
        console.error('회원가입 오류:', error);
        res.status(500).send('회원가입에 실패했습니다.');
      } else {
        const userId = results.insertId;
        const hashtagsQuery =
          'INSERT INTO hashtags (user_id, hashtag) VALUES ?';

        const hashtagsValues = hashtags.map((hashtag) => [userId, hashtag]);

        db.query(hashtagsQuery, [hashtagsValues], (error, results) => {
          if (error) {
            console.error('해시태그 저장 오류:', error);
          }
          res.status(201).send('회원가입이 성공적으로 완료되었습니다.');
        });
      }
    },
  );
});

// 사용자 로그인
app.post('/auth/login', async (req, res) => {
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
