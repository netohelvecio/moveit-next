import { useChallenges } from '../../contexts/ChallengesContext';

import { Container } from './styles';

export function Profile() {
  const { challengesStatus } = useChallenges();

  return (
    <Container>
      <img src="https://github.com/netoHelvecio.png" alt="Helvécio Neto" />

      <div>
        <strong>Helvécio Neto</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {challengesStatus.level}
        </p>
      </div>
    </Container>
  );
}
