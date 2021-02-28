export interface IMinutesAndSeconds {
  minutesLeft: string;
  minutesRight: string;
  secondsLeft: string;
  secondsRight: string;
}

export interface IChallenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

export interface IChallengesStatus {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  currentChallenge: IChallenge | null;
}
