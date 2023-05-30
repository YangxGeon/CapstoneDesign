import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { Container,Paper,TextField,Typography,Box,
Radio,
RadioGroup,
FormControl,
FormControlLabel,
Button, 
Grid,
} from '@mui/material';
import BasicCard from '../Components/BasicCard';


const Header = styled.div`
  background-color: #f2f2f2;
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

const Item = styled(Paper)(({ theme }) => ({
}));

const theme = {
  spacing: 8,
}

function CreateForm() {  
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [content, setContent] = useState('');

  const Data = {title,type,content};

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:8080/event/form', {param : Data})
      .then(function (response) {
        console.log(response, '성공');
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar></Navbar>
            <Header>
                <HeaderComment1>원하는 이벤트를 생성하세요!!</HeaderComment1>
            </Header>
      <Container maxWidth="md">
        <Box sx ={{m:3}}>
          <Typography component="h1" variant="h5">
            이벤트 이름
          </Typography>
        </Box>
        <TextField fullWidth label="이벤트 이름" id="fullWidth" value={title} />
        <Box sx ={{m:3}}>
          <Typography component="h1" variant="h5" style={{ verticalAlign: "middle" }}>
            이벤트 종류
          </Typography>
        </Box>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="study"
            name="radio-buttons-group"
            value={type}
          >
            <FormControlLabel value="study" name = "study" control={<Radio />} label="study" />
            <FormControlLabel value="competition" name = "competition" control={<Radio />} label="competition" />
            <FormControlLabel value="project" name = "project" control={<Radio />} label="project" />
          </RadioGroup>
        </FormControl>
          <Box sx ={{m:3}}>
          <Typography component="h1" variant="h5" style={{ verticalAlign: "middle" }}>
            이벤트 내용
          </Typography>
          </Box>
          <TextField fullWidth
            label="내용"
            multiline
            rows={20}
            value={content}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            size="large"
          >
            등록하기
          </Button>

      </Container>

    </>
  );
}

export default CreateForm;