import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components';
import { Card, ModalWindow } from './components';
import {
  flags, names, Images, IImage,
} from '../../assets';
import {
  RootState, changeGameStatus, ResultTime, setGameResult,
} from '../../state';

function selectImages(arr1: Images, arr2: Images, num: number) {
  let selected: Images = [];
  for (let i = 0; i < num / 2;) {
    const random = Math.floor(Math.random() * arr1.length);
    if (selected.indexOf(arr1[random]) === -1) {
      const name = arr2.find((item) => item.key === arr1[random].key);
      selected = [...selected, arr1[random], name!];
      i++;
    }
  }
  return selected;
}

function shuffleCards(arr: Images) {
  const shuffled = arr;
  shuffled.sort(() => Math.random() - 0.5);
  return shuffled;
}

export function GamePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    gameParams: { cardsNumber, level, back }, status, result,
  } = useSelector((store: RootState) => store.game);

  const [cardsArray, setCardsArray] = useState<Images>([]);
  const [selected, setSelected] = useState<Images>([]);
  const [founded, setFounded] = useState<Array<string>>([]);
  const [time, setTime] = useState<ResultTime>({ sec: 0, min: 0 });

  const onClickCard = useCallback((card:IImage) => {
    if (status === 'non-started') {
      dispatch(changeGameStatus('started'));
    }
    if (selected.length >= 2) {
      return false;
    }
    if (selected.length === 0) {
      setSelected([...selected, card]);
    } else {
      setSelected([...selected, card]);
      if (card.key === selected[0].key) {
        setTimeout(() => {
          setFounded([...founded, card.key]);
        }, 1000);
      } else {
        setTimeout(() => setSelected([]), 1000);
      }
    }
  }, [dispatch, status, selected, founded]);

  const onClickBack = useCallback(() => {
    history.push('/game');
    dispatch(changeGameStatus('non-started'));
  }, [dispatch, history]);

  useEffect(() => {
    if (status === 'non-started') {
      setFounded([]);
      setSelected([]);
      setCardsArray(shuffleCards(selectImages(flags, names, cardsNumber)));
    }
  }, [cardsNumber, status]);

  useEffect(() => {
    if (founded.length === cardsNumber / 2 && founded.length !== 0) {
      dispatch(setGameResult(time));
      dispatch(changeGameStatus('finished'));
    }
  }, [dispatch, founded, cardsNumber, time]);

  useEffect(() => {
    setTimeout(() => setSelected([]), 1000);
  }, [founded]);

  useEffect(() => {
    if (status === 'started') {
      const timeCounter = setTimeout(() => {
        let { min, sec } = time;
        sec++;
        if (sec === 60) {
          min += 1;
          sec = 0;
        }
        setTime({ sec, min });
      }, 1000);
      return () => clearTimeout(timeCounter);
    }
  }, [time, status]);

  function showTime() {
    const { min, sec } = time;
    if (min >= 60) {
      return 'Are you still here?';
    }
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  }

  return (
    <>
      <StyledWrapper>
        <Header>
          {status === 'started'
            ? <Time>{showTime()}</Time>
            : <Title>Please click any card to start the game</Title>}
          <BackButton onClick={onClickBack}>Back</BackButton>
        </Header>
        <CardsContainer row={level === 'low' ? 5 : 6}>
          {
          cardsArray.map((value) => (
            <Card
              key={value.path}
              data={value}
              back={back}
              onClick={(data) => onClickCard(data)}
              isFlipped={selected.indexOf(value) !== -1}
              isFound={founded.indexOf(value.key) !== -1}
            />
          ))
        }
        </CardsContainer>
      </StyledWrapper>
      {status !== 'finished' ? null : <ModalWindow result={result} />}
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  min-height: 400px;
  margin: 0 auto;
  padding: 30px 25px;
  background: #ffffff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 25px;
`;

const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 26px;
`;

const BackButton = styled(Button)`
`;

const Title = styled.h3`
  font-size: 26px;
`;

const CardsContainer = styled.div<{row: number}>`
  display: grid;
  ${(props) => `grid-template-columns: repeat(${props.row}, 175px);`}
  row-gap: 10px;
  column-gap: 10px;
  justify-content: center;
  width: 100%;
  padding: 15px 25px;
`;
