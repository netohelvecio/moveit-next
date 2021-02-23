import Head from 'next/head';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import { Section } from '../styles/pages/home.style';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <Section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
      </Section>
    </>
  );
}
