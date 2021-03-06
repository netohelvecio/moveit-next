import { styled } from '../../styles/theme';

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.font.rajdhani};
  font-weight: 600px;
  color: ${props => props.theme.colors.title};

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const NumbersContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;

  span {
    flex: 1;

    &:first-child {
      border-right: 1px solid #f0f1f3;
    }

    &:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`;

export const CountButtonStart = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.blueDark};
  }
`;

export const CountButtonActive = styled(CountButtonStart)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.title};

  &:hover {
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
  }
`;

export const CountButtonFinished = styled(CountButtonStart)`
  cursor: not-allowed;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.white};

  &:hover {
    background-color: ${props => props.theme.colors.white};
  }
`;
