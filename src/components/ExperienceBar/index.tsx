import { useMemo } from 'react';

import { useChallenges } from '../../contexts/ChallengesContext';

import { Header, LevelProgress, CurrentExperience } from './styles';

export function ExperienceBar() {
  const { challengesStatus, experienceToNextLevel } = useChallenges();

  const percentToNextLevel = useMemo(
    () =>
      Math.round(
        (challengesStatus.currentExperience * 100) / experienceToNextLevel,
      ),
    [challengesStatus, experienceToNextLevel],
  );

  return (
    <Header>
      <span>0 XP</span>

      <div>
        <LevelProgress width={percentToNextLevel} />

        <CurrentExperience left={percentToNextLevel}>
          {challengesStatus.currentExperience} xp
        </CurrentExperience>
      </div>

      <span>{experienceToNextLevel} XP</span>
    </Header>
  );
}
