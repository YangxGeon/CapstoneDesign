import styled from 'styled-components';
import Navbar from '../Components/Navbar'
import BasicCard from '../Components/BasicCard';
import { Container,Paper,TextField,Typography,Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button, 
  Grid,
  } from '@mui/material';

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

function Project() {
  const Item = styled(Paper)(({ theme }) => ({
  }));
    return (
        <>
            <Navbar></Navbar>
            <Header>
                <HeaderComment1>프로젝트를 같이 할 사람을 찾아보세요!</HeaderComment1>
            </Header>

            <Container maxWidth = "md">
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Item><BasicCard></BasicCard></Item>
                </Grid>
                <Grid item xs={4}>
                  <Item><BasicCard></BasicCard></Item>
                </Grid>
                <Grid item xs={4}>
                  <Item><BasicCard></BasicCard></Item>
                </Grid>
                <Grid item xs={4}>
                  <Item><BasicCard></BasicCard></Item>
                </Grid>
                <Grid item xs={4}>
                  <Item><BasicCard></BasicCard></Item>
                </Grid>
                <Grid item xs={4}>
                  <Item><BasicCard></BasicCard></Item>
                </Grid>
              </Grid>
            </Container>
        </>
    )
}

export default Project;

