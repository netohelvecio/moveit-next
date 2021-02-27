import React from 'react';

import { useChallenges } from '../../contexts/ChallengesContext';

import {
  Container,
  ChallengeActive,
  ChallengeInfo,
  FailedButton,
  SucceededButton,
  ChallengeNotActive,
} from './styles';

export function ChallengeBox() {
  const { challengesStatus, resetChallenge } = useChallenges();

  return (
    <Container>
      {challengesStatus.currentChallenge ? (
        <ChallengeActive>
          <header>Ganhe {challengesStatus.currentChallenge.amount} XP</header>

          <ChallengeInfo>
            <img
              src={`icons/${challengesStatus.currentChallenge.type}.svg`}
              alt="Body"
            />
            <strong>Novo desafio</strong>
            <p>{challengesStatus.currentChallenge.description}</p>
          </ChallengeInfo>

          <footer>
            <FailedButton onClick={resetChallenge}>Falhei</FailedButton>

            <SucceededButton>Completei</SucceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
}
