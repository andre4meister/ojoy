import React, { useContext } from 'react';
import SchedulePage from './SchedulePage';
import AppContext from '../../context/AppContext';
import DataResolver from '../Layout/DataResolver';

const SchedulePageProvider = () => {
  const { actions } = useContext(AppContext);
  const { isLoading, error, data, refetch } = actions.getSerials;

  const serials = [...data].sort((a, b) => +a.createdAt.split(' ')[1] - +b.createdAt.split(' ')[1]).slice(0, 9);

  const schedule = [
    {
      id: 1,
      title: 'Понеділок',
      items: serials.slice(0, 3),
    },
    {
      id: 2,
      title: 'Вівторок',
      items: serials.slice(3, 6),
    },
    {
      id: 3,
      title: 'Середа',
      items: serials.slice(6, 9),
    },
    {
      id: 4,
      title: 'Четвер',
      items: [],
    },
    {
      id: 5,
      title: "П'ятниця",
      items: [],
    },
  ];

  return (
    <DataResolver data={data} loading={isLoading} error={error}>
      <SchedulePage schedule={schedule} />
    </DataResolver>
  );
};

export default SchedulePageProvider;
