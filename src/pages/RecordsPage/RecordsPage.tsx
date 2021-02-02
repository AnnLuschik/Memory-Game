import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../../components';
import { RootState, setTopResults, ResultTime } from '../../state';

function formatTime(time: ResultTime) {
  const { min, sec } = time;
  return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}

export function RecordsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { topResults: { low, medium, high } } = useSelector((state:RootState) => state.game);

  useEffect(() => {
    if (!low.length && !medium.length && !high.length) {
      const results = localStorage.getItem('results');
      if (results) {
        dispatch(setTopResults(JSON.parse(results)));
      }
    }
  }, [dispatch, low, medium, high]);

  return (
    <Container>
      <Title>Best results</Title>
      <Results>
        <Box>
          <SecondaryTitle>Low level</SecondaryTitle>
          <StyledList>
            {low.map((item) => (
              <ListItem key={item.name + Math.random()}>
                {`${item.name} ${formatTime(item.time)}`}
              </ListItem>
            ))}
          </StyledList>
        </Box>
        <Box>
          <SecondaryTitle>Medium level</SecondaryTitle>
          <StyledList>
            {medium.map((item) => (
              <ListItem key={item.name + Math.random()}>
                {`${item.name} ${formatTime(item.time)}`}
              </ListItem>
            ))}
          </StyledList>
        </Box>
        <Box>
          <SecondaryTitle>High level</SecondaryTitle>
          <StyledList>
            {high.map((item) => (
              <ListItem key={item.name + Math.random()}>
                {`${item.name} ${formatTime(item.time)}`}
              </ListItem>
            ))}
          </StyledList>
        </Box>
      </Results>
      <Button onClick={() => history.push('/game')}>Main</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background: #ffffff;
`;

const Title = styled.p`
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 26px;
  color: #000000;
`;

const Results = styled.div`
  display: flex;
  row-gap: 10px;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  min-height: 200px;
  margin-bottom: 25px;
  padding: 10px;
  border: 1px solid gray;
`;

const SecondaryTitle = styled(Title)`
  position: relative;
  font-size: 20px;
`;

const StyledList = styled.ol`
  list-style-position: inside;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
`;
