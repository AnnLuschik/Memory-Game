import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../../components';
import { LevelInput, SkirtInput } from './components';
import {
  logout, selectCardSkirt, selectGamelevel, LevelTypes,
} from '../../state';
import recordsImg from '../../assets/cup.png';
import { mountainsImg, forestImg, submarineImg } from '../../assets';

export function MainPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [level, setLevel] = useState<LevelTypes>('low');
  const [skirt, setSkirt] = useState(mountainsImg);

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
    dispatch(selectCardSkirt(skirt));
  }, [dispatch, skirt]);

  return (
    <StyledWrapper>
      <RulesContainer>
        <StyledTitle>Rules</StyledTitle>
        <ol>
          <li>Select two cards to try match the flag and country name.</li>
          <li>If you match the pictures, the cards disappear.</li>
          <li>If they do not match, the cards turn over.</li>
          <li>Have fun!</li>
        </ol>
      </RulesContainer>
      <SkirtsContainer>
        <StyledTitle>Choose card skirt</StyledTitle>
        <Skirts>
          <SkirtInput id="mountains" value={mountainsImg} name="skirtInput" onChange={() => setSkirt(mountainsImg)} image={mountainsImg} checked={skirt === mountainsImg} />
          <SkirtInput id="forest" value={forestImg} name="skirtInput" onChange={() => setSkirt(forestImg)} image={forestImg} checked={skirt === forestImg} />
          <SkirtInput id="submarine" value={submarineImg} name="skirtInput" onChange={() => setSkirt(submarineImg)} image={submarineImg} checked={skirt === submarineImg} />
        </Skirts>
      </SkirtsContainer>
      <LevelContainer>
        <StyledTitle>Choose difficulty</StyledTitle>
        <Levels>
          <LevelInput id="low" value="low" name="levelInput" onChange={() => setLevel('low')} checked={level === 'low'} text="low (5*2)" />
          <LevelInput id="medium" value="medium" name="levelInput" onChange={() => setLevel('medium')} checked={level === 'medium'} text="medium (6*3)" />
          <LevelInput id="high" value="high" name="levelInput" onChange={() => setLevel('high')} checked={level === 'high'} text="high (8*3)" />
        </Levels>
      </LevelContainer>
      <PlayButton>
        <Button onClick={startGame}>play</Button>
      </PlayButton>
      <LogoutButton>
        <Button onClick={logoutHandler}>logout</Button>
      </LogoutButton>
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
    "level skirts skirts play";
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

const StyledContainer = styled.div`
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RulesContainer = styled(StyledContainer)`
  background: yellowgreen;
  grid-area: rules;
`;

const SkirtsContainer = styled(StyledContainer)`
  background: olivedrab;
  grid-area: skirts;
`;

const Skirts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  width: 100%;
`;

const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;   
  align-items: center;
  padding: 20px 25px;
  background: #d2d2d2;
`;

const Levels = styled.div`
  display: flex;
  flex-direction: column;   
  align-items: center;
`;

const PlayButton = styled.div`
  grid-area: play;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoutButton = styled.div`
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
`;
