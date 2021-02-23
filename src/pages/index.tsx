import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import { Section } from '../styles/pages/home.style';

export default function Home() {
  return (
    <>
      <ExperienceBar />

      <Section>
        <div>
          <Profile />
        </div>
      </Section>
    </>
  );
}
