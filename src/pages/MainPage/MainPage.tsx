import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../../components';
import { LevelInput, BackInput } from './components';
import {
  logout, selectCardBack, selectGamelevel, LevelTypes,
} from '../../state';
import recordsImg from '../../assets/cup.png';
import { mountainsImg, forestImg, submarineImg } from '../../assets';

export function MainPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [level, setLevel] = useState<LevelTypes>('low');
  const [cardBack, setCardBack] = useState(mountainsImg);

  const logoutHandler = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const startGame = useCallback(() => {
    history.push('/game/play');
  }, [history]);

  useEffect(() => {
    dispatch(selectGamelevel(level));
  }, [dispatch, level]);

  useEffect(() => {
    dispatch(selectCardBack(cardBack));
  }, [dispatch, cardBack]);

  return (
    <StyledWrapper>
      <RulesContainer>
        <StyledTitle>Rules</StyledTitle>
        <ol>
          <ListItem>Select two cards to try match the flag and country name.</ListItem>
          <ListItem>If you match the pictures, the cards disappear.</ListItem>
          <ListItem>If they do not match, the cards turn over.</ListItem>
          <ListItem>Have fun!</ListItem>
        </ol>
      </RulesContainer>
      <BacksContainer>
        <StyledTitle>Choose card back</StyledTitle>
        <Backs>
          <BackInput id="mountains" value={mountainsImg} name="backInput" onChange={() => setCardBack(mountainsImg)} image={mountainsImg} checked={cardBack === mountainsImg} />
          <BackInput id="forest" value={forestImg} name="backInput" onChange={() => setCardBack(forestImg)} image={forestImg} checked={cardBack === forestImg} />
          <BackInput id="submarine" value={submarineImg} name="backInput" onChange={() => setCardBack(submarineImg)} image={submarineImg} checked={cardBack === submarineImg} />
        </Backs>
      </BacksContainer>
      <LevelContainer>
        <StyledTitle>Choose difficulty</StyledTitle>
        <Levels>
          <LevelInput id="low" value="low" name="levelInput" onChange={() => setLevel('low')} checked={level === 'low'} text="low (5*2)" />
          <LevelInput id="medium" value="medium" name="levelInput" onChange={() => setLevel('medium')} checked={level === 'medium'} text="medium (6*3)" />
          <LevelInput id="high" value="high" name="levelInput" onChange={() => setLevel('high')} checked={level === 'high'} text="high (8*3)" />
        </Levels>
      </LevelContainer>
      <PlayButtonBox>
        <Button onClick={startGame}>play</Button>
      </PlayButtonBox>
      <LogoutButtonBox>
        <Button onClick={logoutHandler}>logout</Button>
      </LogoutButtonBox>
      <RecordsContainer>
        <StyledLink to="/game/records">
          <StyledRecordsBox>
            <StyledTitle>Hall of fame</StyledTitle>
            <StyledImage src={recordsImg} alt="cup" />
          </StyledRecordsBox>
        </StyledLink>
      </RecordsContainer>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 30px 25px;
  display: grid;
  grid-template-areas:
    "rules rules rules logout"
    "rules rules rules records"
    "level backs backs play";
  row-gap: 15px;
  column-gap: 15px;
  background: #ffffff;
`;

const StyledTitle = styled.h3`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  font-size: 18px;
`;

const StyledContainer = styled.div`
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ebe9e9;
  box-shadow: 0 0 15px #ebe9e9;
`;

const RulesContainer = styled(StyledContainer)`
  grid-area: rules;
`;

const BacksContainer = styled(StyledContainer)`
  grid-area: backs;
`;

const Backs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  width: 100%;
`;

const LevelContainer = styled(StyledContainer)`
  grid-area: level;
`;

const Levels = styled.div`
  display: flex;
  flex-direction: column;   
  align-items: center;
`;

const PlayButtonBox = styled.div`
  grid-area: play;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoutButtonBox = styled.div`
  grid-area: logout;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecordsContainer = styled(StyledContainer)`
  grid-area: records;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const StyledRecordsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  &:hover {
    transform: scale(1.1);
  }
`;
