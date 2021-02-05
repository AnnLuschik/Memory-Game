import React, { useCallback } from 'react';
import styled from 'styled-components';
import { IImage } from '../../../../assets';

interface IProps {
  data: IImage
  back: string
  onClick: (arg: IImage) => void
  isFlipped: boolean
  isFound: boolean
}

export const Card = React.memo(({
  data, back, onClick, isFlipped, isFound,
}: IProps) => {
  const onClickHandler = useCallback(() => {
    if (!isFlipped && !isFound) {
      onClick(data);
    }
  }, [onClick, data, isFound, isFlipped]);

  return (
    <Container onClick={onClickHandler} isFound={isFound}>
      <Inner isFlipped={isFlipped}>
        <Front bcg={back} />
        <Back bcg={data.path} />
      </Inner>
    </Container>
  );
});

const Container = styled.div<{isFound: boolean}>`
  width: 175px;
  height: 100px;
  perspective: 1000px;
  ${(props) => (props.isFound ? 'visibility: hidden;' : null)}
`;

const Inner = styled.div<{isFlipped: boolean}>`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #000000;
  transition: all 0.8s;
  transform-style: preserve-3d;
  ${(props) => (props.isFlipped ? 'transform: rotateY(180deg);' : null)}
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const Front = styled(CardSide)<{bcg: string}>`
  ${(props) => `background: url(${props.bcg}) no-repeat center;`}
  background-size: cover;
`;

const Back = styled(CardSide)<{bcg: string}>`
  ${(props) => `background: url(${props.bcg}) no-repeat center;`}
  background-size: cover;
  transform: rotateY(180deg);
`;
