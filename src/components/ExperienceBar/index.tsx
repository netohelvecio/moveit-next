import { Header, LevelProgress, CurrentExperience } from './styles';

export function ExperienceBar() {
  return (
    <Header>
      <span>0 XP</span>

      <div>
        <LevelProgress width={50} />

        <CurrentExperience left={50}>300px</CurrentExperience>
      </div>

      <span>600 XP</span>
    </Header>
  );
}
