import { useEffect, useState } from 'react';
import { getMinutesAndSeconds } from '../../utils/getMinutesAndSeconds';
import { IMinutesAndSeconds } from '../../utils/interfaces';

import {
  Container,
  CountContainer,
  NumbersContainer,
  CountButton,
} from './styles';

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [timeValues, setTimeValues] = useState<IMinutesAndSeconds>(
    {} as IMinutesAndSeconds,
  );
  const [active, setActive] = useState(false);

  useEffect(() => {
    const values = getMinutesAndSeconds(time);

    setTimeValues(values);
  }, [time]);

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(currState => currState - 1);
      }, 1000);
    }
  }, [active, time]);

  function onClickCountButton() {
    setActive(currState => !currState);
  }

  const { minutesLeft, minutesRight, secondsLeft, secondsRight } = timeValues;

  return (
    <>
      <CountContainer>
        <NumbersContainer>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </NumbersContainer>

        <span>:</span>

        <NumbersContainer>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </NumbersContainer>
      </CountContainer>

      <CountButton onClick={onClickCountButton}>Iniciar ciclo</CountButton>
    </>
  );
}
