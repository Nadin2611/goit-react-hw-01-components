import {
  StatisticBox,
  StatisticType,
  StatisticValue,
} from './StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <StatisticBox>
      <StatisticType>{label}</StatisticType>
      <StatisticValue>{percentage}%</StatisticValue>
    </StatisticBox>
  );
};
