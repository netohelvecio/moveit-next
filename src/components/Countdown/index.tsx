import { useEffect, useState } from 'react';

import { useChallenges } from '../../contexts/ChallengesContext';
import { getMinutesAndSeconds } from '../../utils/getMinutesAndSeconds';
import { IMinutesAndSeconds } from '../../utils/interfaces';

import {
  CountContainer,
  NumbersContainer,
  CountButtonStart,
  CountButtonActive,
  CountButtonFinished,
} from './styles';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60);
  const [timeValues, setTimeValues] = useState<IMinutesAndSeconds>(
    {} as IMinutesAndSeconds,
  );
  const [active, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { startNewChallenge } = useChallenges();

  useEffect(() => {
    const values = getMinutesAndSeconds(time);

    setTimeValues(values);
  }, [time]);

  useEffect(() => {
    if (active && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(currState => currState - 1);
      }, 1000);
    } else if (active && time === 0) {
      setHasFinished(true);
      setActive(false);
      startNewChallenge();
    }
  }, [active, time]);

  function onClickCountButton() {
    setActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setActive(false);
    setTime(0.1 * 60);
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

      {hasFinished ? (
        <CountButtonFinished disabled>Ciclo encerrado</CountButtonFinished>
      ) : (
        <>
          {active ? (
            <CountButtonActive onClick={resetCountdown}>
              Abandonar ciclo
            </CountButtonActive>
          ) : (
            <CountButtonStart onClick={onClickCountButton}>
              Iniciar ciclo
            </CountButtonStart>
          )}
        </>
      )}
    </>
  );
}
