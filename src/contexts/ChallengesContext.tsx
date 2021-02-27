import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { IChallenge } from '../utils/interfaces';

import challenges from '../../challenges.json';

interface IChallengeProviderProps {
  children: ReactNode;
}

interface IChallengesStatus {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  currentChallenge: IChallenge | null;
}

interface IChallengeContext {
  challengesStatus: IChallengesStatus;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
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

  const experienceToNextLevel = useMemo(
    () => Math.pow((challengesStatus.level + 1) * 4, 2),
    [challengesStatus.level],
  );

  function levelUp() {
    setChallengesStatus({
      ...challengesStatus,
      level: challengesStatus.level + 1,
    });
  }

  function startNewChallenge() {
    const randomChallenge = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallenge] as IChallenge;

    setChallengesStatus({
      ...challengesStatus,
      currentChallenge: challenge,
    });
  }

  function resetChallenge() {
    setChallengesStatus({
      ...challengesStatus,
      currentChallenge: null,
    });
  }

  return (
    <ChallengesContext.Provider
      value={{
        challengesStatus,
        levelUp,
        startNewChallenge,
        resetChallenge,
        experienceToNextLevel,
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
    levelUp,
    startNewChallenge,
    resetChallenge,
  } = useContext(ChallengesContext);

  return {
    challengesStatus,
    levelUp,
    startNewChallenge,
    resetChallenge,
    experienceToNextLevel,
  };
}
