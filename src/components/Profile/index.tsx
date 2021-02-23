import React from 'react';

import { Container } from './styles';

export function Profile() {
  return (
    <Container>
      <img src="https://github.com/netoHelvecio.png" alt="Helvécio Neto" />

      <div>
        <strong>Helvécio Neto</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </Container>
  );
}
