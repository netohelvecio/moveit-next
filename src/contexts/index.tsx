import { ReactNode } from 'react';

import { ChallengesProvider } from './ChallengesContext';

interface ICRootContextProps {
  children: ReactNode;
}

export function RootContext({ children }: ICRootContextProps) {
  return <ChallengesProvider>{children}</ChallengesProvider>;
}
