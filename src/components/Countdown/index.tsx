import { useEffect, useState } from 'react';

import { useCountdown } from '../../contexts/CountdownContext';
import { getMinutesAndSeconds } from '../../utils/getMinutesAndSeconds';
import { IMinutesAndSeconds } from '../../utils/interfaces';

import {
  CountContainer,
  NumbersContainer,
  CountButtonStart,
  CountButtonActive,
  CountButtonFinished,
} from './styles';

export function Countdown() {
  const { countdownStatus, resetCountdown, startCountdown } = useCountdown();

  const [timeValues, setTimeValues] = useState<IMinutesAndSeconds>(
    {} as IMinutesAndSeconds,
  );

  useEffect(() => {
    const values = getMinutesAndSeconds(countdownStatus.time);

    setTimeValues(values);
  }, [countdownStatus]);

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

      {countdownStatus.hasFinished ? (
        <CountButtonFinished disabled>Ciclo encerrado</CountButtonFinished>
      ) : (
        <>
          {countdownStatus.isActive ? (
            <CountButtonActive onClick={resetCountdown}>
              Abandonar ciclo
            </CountButtonActive>
          ) : (
            <CountButtonStart onClick={startCountdown}>
              Iniciar ciclo
            </CountButtonStart>
          )}
        </>
      )}
    </>
  );
}
