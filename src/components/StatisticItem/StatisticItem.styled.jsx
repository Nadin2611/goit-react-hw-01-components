import styled from 'styled-components';
import randomColor from 'randomcolor';

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 50px;
  text-align: center;
  background: ${props => randomColor()};
  border: 1px solid ${props => props.theme.colors.gray};
  padding: ${props => props.theme.spacing(3)};
  box-shadow: ${props => props.theme.shadows.regular};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.white};
`;

export const StatisticType = styled.span``;

export const StatisticValue = styled.span``;
