import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import { StatisticTitle, StatisticsList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </>
  );
};
