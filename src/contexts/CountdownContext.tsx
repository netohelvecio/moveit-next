import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useChallenges } from './ChallengesContext';

interface ICountdownProviderProps {
  children: ReactNode;
}

interface ICountdownStatus {
  time: number;
  isActive: boolean;
  hasFinished: boolean;
}

interface ICountdownContext {
  countdownStatus: ICountdownStatus;
  startCountdown: () => void;
  resetCountdown: () => void;
}

const CountdownContext = createContext<ICountdownContext>(
  {} as ICountdownContext,
);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: ICountdownProviderProps) {
  const { startNewChallenge } = useChallenges();

  const [countdownStatus, setCountdownStatus] = useState<ICountdownStatus>({
    hasFinished: false,
    isActive: false,
    time: 0.1 * 60,
  });

  useEffect(() => {
    if (countdownStatus.isActive && countdownStatus.time > 0) {
      countdownTimeout = setTimeout(() => {
        setCountdownStatus({
          ...countdownStatus,
          time: countdownStatus.time - 1,
        });
      }, 1000);
    } else if (countdownStatus.isActive && countdownStatus.time === 0) {
      setCountdownStatus({
        ...countdownStatus,
        hasFinished: true,
        isActive: false,
      });

      startNewChallenge();
    }
  }, [countdownStatus]);

  function startCountdown() {
    setCountdownStatus({
      ...countdownStatus,
      isActive: true,
    });
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setCountdownStatus({
      ...countdownStatus,
      isActive: false,
      time: 0.1 * 60,
    });
  }

  return (
    <CountdownContext.Provider
      value={{ countdownStatus, startCountdown, resetCountdown }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

export function useCountdown() {
  const { countdownStatus, startCountdown, resetCountdown } = useContext(
    CountdownContext,
  );

  return { countdownStatus, startCountdown, resetCountdown };
}
