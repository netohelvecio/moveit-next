import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Cookies from 'js-cookie';

import { IChallenge, IChallengesStatus } from '../utils/interfaces';

import challenges from '../../challenges.json';

interface IChallengeProviderProps {
  children: ReactNode;
}

interface IChallengeContext {
  challengesStatus: IChallengesStatus;
  experienceToNextLevel: number;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  setChallengesStatus: (status: IChallengesStatus) => void;
}

const ChallengesContext = createContext<IChallengeContext>(
  {} as IChallengeContext,
);

export function ChallengesProvider({ children }: IChallengeProviderProps) {
  const [challengesStatus, setChallengesStatus] = useState<IChallengesStatus>({
    challengesCompleted: 0,
    currentExperience: 0,
    level: 1,
    currentChallenge: null,
  });

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('challengesStatus', challengesStatus);
  }, [challengesStatus]);

  const experienceToNextLevel = useMemo(
    () => Math.pow((challengesStatus.level + 1) * 4, 2),
    [challengesStatus],
  );

  function startNewChallenge() {
    const randomChallenge = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallenge] as IChallenge;

    setChallengesStatus({
      ...challengesStatus,
      currentChallenge: challenge,
    });

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }

  function resetChallenge() {
    setChallengesStatus({
      ...challengesStatus,
      currentChallenge: null,
    });
  }

  function completeChallenge() {
    if (!challengesStatus.currentChallenge) {
      return;
    }

    const { amount } = challengesStatus.currentChallenge;

    let finalExperience = challengesStatus.currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;

      setChallengesStatus({
        currentExperience: finalExperience,
        currentChallenge: null,
        challengesCompleted: challengesStatus.challengesCompleted + 1,
        level: challengesStatus.level + 1,
      });

      return;
    }

    setChallengesStatus({
      ...challengesStatus,
      currentExperience: finalExperience,
      currentChallenge: null,
      challengesCompleted: challengesStatus.challengesCompleted + 1,
    });
  }

  return (
    <ChallengesContext.Provider
      value={{
        challengesStatus,
        startNewChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        setChallengesStatus,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export function useChallenges() {
  const {
    challengesStatus,
    experienceToNextLevel,
    startNewChallenge,
    resetChallenge,
    completeChallenge,
    setChallengesStatus,
  } = useContext(ChallengesContext);

  return {
    challengesStatus,
    startNewChallenge,
    resetChallenge,
    experienceToNextLevel,
    completeChallenge,
    setChallengesStatus,
  };
}
