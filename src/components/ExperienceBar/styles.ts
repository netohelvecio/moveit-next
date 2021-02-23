import { styled } from '../../styles/theme';

interface ILeveLevelProgressProps {
  width: number;
}

interface ICurrentExperienceProps {
  left: number;
}

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;
  }
`;

export const LevelProgress = styled.div<ILeveLevelProgressProps>`
  width: ${props => `${props.width}%`};
  height: 4px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.green};
`;

export const CurrentExperience = styled.span<ICurrentExperienceProps>`
  position: absolute;
  top: 12px;
  left: ${props => `${props.left}%`};
  transform: translateX(-50%);
`;
