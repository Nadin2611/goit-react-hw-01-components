import styled from 'styled-components';

export const FriendListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
`;
