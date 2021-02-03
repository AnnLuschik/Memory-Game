import React from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { astronautImg } from '../../assets';

export const NotFoundPage = () => {
  const history = useHistory();

  return (
    <Container>
      <Moon />
      <Crater1 />
      <Crater2 />
      <Crater3 />
      <Star style={{ top: '200px', right: '200px', animationDelay: '0.5s' }} />
      <Star style={{ top: '125px', left: '45%', animationDelay: '2s' }} />
      <Star style={{ top: '700px', right: '400px', animationDelay: '1s' }} />
      <Star style={{ top: '300px', right: '700px' }} />
      <Star style={{ top: '500px', left: '50%', animationDelay: '2s' }} />
      <Star style={{ bottom: '150px', left: '40%', animationDelay: '1.5s' }} />
      <ErrorText>
        <Title>404</Title>
        <Subtitle>Hmmm...</Subtitle>
        <Description>It looks like you are lost</Description>
        <HomeButton onClick={() => history.push('/game')}>Home</HomeButton>
      </ErrorText>
      <Astronaut image={astronautImg} />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #2f3640 23%, #181b20 100%);
`;

const Moon = styled.div`
  content: '';
  position: absolute;
  top: -50px;
  left: -250px;
  width: 900px;
  height: 900px;
  background: linear-gradient(90deg, rgba(208,208,208,1) 48%, rgba(145,145,145,1) 100%);
  border-radius: 100%;
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
`;

const Crater = styled.div`
  content: '';
  position: absolute;
  background: linear-gradient(90deg, #7a7a7a 38%, #c3c3c3 100%);
  border-radius: 100%;
  opacity: 0.6;
`;

const Crater1 = styled(Crater)`
  top: 25px;
  left: 100px;
  width: 65px;
  height: 120px;
  transform: rotate(250deg);
`;

const Crater2 = styled(Crater)`
  top: 300px;
  left: 500px;
  width: 65px;
  height: 180px;
`;

const Crater3 = styled(Crater)`
  top: 700px;
  left: 300px;
  width: 50px;
  height: 90px;
  transform: rotate(60deg);
`;

const ErrorText = styled.div`
  position: absolute;
  top: 300px;
  left: 100px;
  font-family: 'Righteous', cursive;
  color: #363e49;
`;

const Title = styled.p`
  margin-bottom: 20px;
  font-size: 10em;
`;

const Subtitle = styled.p`
  margin-bottom: 10px;
  font-size: 2em;
`;

const Description = styled.p`
  opacity: 0.6;
`;

const HomeButton = styled.button`
  min-width: 7em;
  margin-top: 3em;
  margin-right: 0.5em;
  padding: 0.5em 2em;
  color: #ffffff;
  text-transform: uppercase;
  background: #f75263;
  border: 2px solid #f75263;
  border-radius: 5em;
  outline: none;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
`;

const Rotate = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
`;

const Star = styled.div`
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background: #e0dcdc;
  opacity: 0.4;
  animation: ${Rotate} 2s alternate infinite; 
`;

const Astronaut = styled.div<{image: string}>`
  position: absolute;
  top: 40%;
  left: 60%;
  width: 250px;
  height: 365px;
  ${(props) => `background: url(${props.image}) center no-repeat;`}
  background-size: contain;
  transform: scale(1.2);
`;
