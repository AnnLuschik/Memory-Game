import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import recordsImg from '../../assets/cup.png';
import { back1, back2, back3 } from '../../assets';

export function MainPage() {
  return (
    <StyledWrapper>
      <RulesContainer>
        <StyledTitle>Rules</StyledTitle>
        <ol>
          <li>Select two cards to try match the flag and country name.</li>
          <li>If you match the pictures, the cards disappear.</li>
          <li>If they do not match, the cards turn over.</li>
          <li>Time is limited.</li>
          <li>Have fun!</li>
        </ol>
      </RulesContainer>
      <SkirtsContainer>
        <StyledTitle>Choose card skirt</StyledTitle>
        <Box>
          <StyledSkirt style={{ backgroundImage: `url(${back1})` }} />
          <StyledSkirt style={{ backgroundImage: `url(${back2})` }} />
          <StyledSkirt style={{ backgroundImage: `url(${back3})` }} />
        </Box>
      </SkirtsContainer>
      <LevelContainer>
        <StyledTitle>Choose difficulty</StyledTitle>
        <LevelButton onClick={() => null}>low (5*2)</LevelButton>
        <LevelButton onClick={() => null}>medium (6*3)</LevelButton>
        <LevelButton onClick={() => null}>hight (8*3)</LevelButton>
      </LevelContainer>
      <PlayButton>
        <Button onClick={() => null}>play</Button>
      </PlayButton>
      <LogoutButton>
        <Button onClick={() => null}>logout</Button>
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

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  width: 100%;
`;

const StyledSkirt = styled.div`
  width: 120px;
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const LevelContainer = styled(StyledContainer)`
  background: #d2d2d2;
  grid-area: level;
`;

const LevelButton = styled(Button)`
  min-width: 45px;
  text-transform: capitalize;
  background-color: #cdcdcd;
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
