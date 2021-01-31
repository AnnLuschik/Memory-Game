import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../../components';
import { RootState } from '../../state';

export function RecordsPage() {
  const history = useHistory();
  const { topResults } = useSelector((state:RootState) => state.game);
  return (
    <Container>
      <Title>Best results</Title>
      <Results>
        <Box>
          <SecondaryTitle>Low level</SecondaryTitle>
          <ol>
            {topResults.low.map((item) => (
              <li>
                <Text>{`${item.name}: ${item.time.min}:${item.time.sec}`}</Text>
              </li>
            ))}
          </ol>
        </Box>
        <Box>
          <SecondaryTitle>Medium level</SecondaryTitle>
          <ol>
            {topResults.medium.map((item) => (
              <li>
                <Text>{`${item.name}: ${item.time.min}:${item.time.sec}`}</Text>
              </li>
            ))}
          </ol>
        </Box>
        <Box>
          <SecondaryTitle>High level</SecondaryTitle>
          <ol>
            {topResults.high.map((item) => (
              <li>
                <Text>{`${item.name}: ${item.time.min}:${item.time.sec}`}</Text>
              </li>
            ))}
          </ol>
        </Box>
      </Results>
      <Button onClick={() => history.push('/game')}>Back</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
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
  justify-content: space-between;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  margin-bottom: 25px;
  padding: 10px;
  border: 1px solid gray;
`;

const SecondaryTitle = styled(Title)`
  position: relative;
  font-size: 20px;
  /* &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 1px;
    border: none;
    border-bottom: 1px solid #000000;
  } */
`;

const Text = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
`;
