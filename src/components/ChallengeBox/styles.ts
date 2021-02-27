import { styled } from '../../styles/theme';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;
`;

export const ChallengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    color: ${props => props.theme.colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.grayLine};
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const ChallengeInfo = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme.colors.title};
    margin: 1.5rem 0 1rem;
  }

  p {
    line-height: 1.5rem;
    font-size: 1rem;
  }
`;

export const FailedButton = styled.button`
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 5px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.red};

  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SucceededButton = styled(FailedButton)`
  background-color: ${props => props.theme.colors.green};
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
    font-size: 1rem;

    img {
      margin-bottom: 1rem;
    }
  }
`;
