import { useChallenges } from '../../contexts/ChallengesContext';

import { Container } from './styles';

export function CompletedChallenges() {
  const { challengesStatus } = useChallenges();

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesStatus.challengesCompleted}</span>
    </Container>
  );
}
