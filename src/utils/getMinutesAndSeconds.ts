import { IMinutesAndSeconds } from './interfaces';

export function getMinutesAndSeconds(time: number): IMinutesAndSeconds {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesLeft, minutesRight] = String(minutes)
    .padStart(2, '0')
    .split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  return { minutesLeft, minutesRight, secondsLeft, secondsRight };
}
