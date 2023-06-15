import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormHelperText,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;

const SignIn = () => {
  const theme = createTheme();
  const [checked, setChecked] = useState(true);
  const [usernameError, setUsernameError] = useState('');
  const navigate = useNavigate();

  const handlePost = async (data) => {
    const { password, username } = data;
    console.log(data);
    const postData = { password, username };
    console.log('Post');
    try {
      const response = await axios.post(
        'http://localhost:4000/auth/login',
        postData,
      );
      if (response.status === 200) {
        console.log(response, '성공');
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        navigate('/');
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert('로그인에 실패했습니다.');
        navigate('/signin');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);
    const joinData = {
      password: data.get('password'),
      username: data.get('username'),
    };
    const { password, username } = joinData;

    // username 공백 체크
    if (username.trim() === '') {
      setUsernameError('Username을 입력해주세요.');
    } else {
      setUsernameError('');

      if (checked) {
        handlePost(joinData);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Boxs
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    name="username"
                    label="아이디"
                    error={usernameError !== ''}
                  />
                  {usernameError && (
                    <FormHelperTexts>{usernameError}</FormHelperTexts>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="password"
                    name="password"
                    label="비밀번호"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
              >
                로그인
              </Button>
            </FormControl>
          </Boxs>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
