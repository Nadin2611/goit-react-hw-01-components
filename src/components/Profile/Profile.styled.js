import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background: ${props => props.theme.colors.white};
  padding-top: ${props => props.theme.spacing(10)};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  height: 270px;
  width: 100%;
  margin: 0 auto;
  box-shadow: ${props => props.theme.shadows.regular};
`;

export const DescriptionContainer = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: ${props => props.theme.spacing(20)};
  height: ${props => props.theme.spacing(20)};
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.gray};
  padding: ${props => props.theme.spacing(1)};
  margin: 0 auto;
`;

export const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: bold;
  margin-top: ${props => props.theme.spacing(4)};
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const Tag = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.gray};
`;

export const Location = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.gray};
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0;
  margin-top: auto;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.greyBlue};
  height: 60px;
  font-size: ${props => props.theme.fontSizes.xs};
  flex: 1;
  align-items: center;
  &:not(:last-child) {
    border-right: 1px solid #bec9ed;
  }
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.gray};
`;

export const Quantity = styled.span`
  color: ${props => props.theme.colors.dark};
  font-weight: bold;
`;
