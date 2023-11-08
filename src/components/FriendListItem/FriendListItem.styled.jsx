import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing(1)};
  width: 300px;
  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(2)};
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;

export const Status = styled.span`
  display: none;
`;

export const Avatar = styled.img`
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
`;

export const Name = styled.p`
  text-align: center;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.dark};
`;
