import React from 'react';

import {
  Container,
  ChallengeActive,
  ChallengeInfo,
  FailedButton,
  SucceededButton,
  ChallengeNotActive,
} from './styles';

const hasActiveChallenge = true;

export function ChallengeBox() {
  return (
    <Container>
      {hasActiveChallenge ? (
        <ChallengeActive>
          <header>Ganhe 400XP</header>

          <ChallengeInfo>
            <img src="icons/body.svg" alt="Body" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminha de 3 minutos.</p>
          </ChallengeInfo>

          <footer>
            <FailedButton>Falhei</FailedButton>

            <SucceededButton>Falhei</SucceededButton>
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
