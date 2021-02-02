import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ResultTime, RootState, changeGameStatus } from '../../../../state';
import { Button } from '../../../../components';

interface IProps {
  result: ResultTime
}

function formatTime(time: ResultTime) {
  const { min, sec } = time;
  if (min) {
    return `${min} ${min === 1 ? 'minute' : 'minutes'} ${sec} ${sec === 1 ? 'second' : 'seconds'}`;
  }
  return `${sec} ${sec === 1 ? 'second' : 'seconds'}`;
}

export const ModalWindow = React.memo(({ result }:IProps) => {
  const { gameParams: { level }, topResults } = useSelector((state:RootState) => state.game);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickBackBtn = useCallback(() => {
    dispatch(changeGameStatus('non-started'));
    history.push('/game');
  }, [dispatch, history]);

  const onClickRecordsBtn = useCallback(() => {
    dispatch(changeGameStatus('non-started'));
    history.push('/game/records');
  }, [dispatch, history]);

  return (
    <Fogging>
      <Container>
        <Inner>
          <Title>Congratulations!</Title>
          <Text>{`The game is finished in ${formatTime(result)}.`}</Text>
          <Box>
            <SecondaryTitle>{`TOP 5 of ${level} level:`}</SecondaryTitle>
            <ol>
              {topResults[level].map((item) => (
                <li key={Math.random()}>
                  <Text>{`${item.name}: ${item.time.min}:${item.time.sec}`}</Text>
                </li>
              ))}
            </ol>
            <Button onClick={onClickRecordsBtn}>show all</Button>
          </Box>
          <ButtonsContainer>
            <Button onClick={() => dispatch(changeGameStatus('non-started'))}>Restart</Button>
            <Button onClick={onClickBackBtn}>Go to main</Button>
          </ButtonsContainer>
        </Inner>
      </Container>
    </Fogging>
  );
});

const Fogging = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
`;

const Container = styled.div`
  position: absolute;
  top: calc(50% - 300px);
  left: calc(50% - 300px);
  width: 600px;
  background: #ffffff;
  z-index: 10;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 25px 20px;;
`;

const Title = styled.p`
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 26px;
  color: #000000;
`;

const SecondaryTitle = styled(Title)`
  font-size: 20px;
`;

const Text = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin: 20px 0;
  padding: 15px 20px;
  border: 1px solid gray;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
