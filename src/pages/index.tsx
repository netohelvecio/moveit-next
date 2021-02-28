import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { useChallenges } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { IChallengesStatus } from '../utils/interfaces';

import { Section } from '../styles/pages/home.style';

interface IHomeProps {
  challengesStatus: IChallengesStatus;
}

export default function Home({ challengesStatus }: IHomeProps) {
  const { setChallengesStatus } = useChallenges();

  useEffect(() => {
    setChallengesStatus(challengesStatus);
  }, [challengesStatus, setChallengesStatus]);

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

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { challengesStatus } = ctx.req.cookies;

  return {
    props: {
      challengesStatus: JSON.parse(challengesStatus),
    },
  };
};
