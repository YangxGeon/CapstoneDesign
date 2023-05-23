import * as React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import { Container,Paper,TextField,Typography,Box,
Radio,
RadioGroup,
FormControl,
FormControlLabel,
Button } from '@mui/material';


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
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = {
  spacing: 8,
}


function CreateForm() {
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
        <TextField fullWidth label="이벤트 이름" id="fullWidth" />
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
          >
            <FormControlLabel value="study" control={<Radio />} label="study" />
            <FormControlLabel value="competition" control={<Radio />} label="competition" />
            <FormControlLabel value="project" control={<Radio />} label="project" />
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