import Head from 'next/head';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import { Section } from '../styles/pages/home.style';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <Section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </Section>
      </CountdownProvider>
    </>
  );
}
