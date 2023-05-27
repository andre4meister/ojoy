import styles from './SchedulePage.module.scss';
import PageTitle from '../../components/PageTitle/PageTitle';
import MainListItem from '../../components/MainListItem/MainListItem';

const SchedulePage = ({ schedule }) => {
  const filteredSchedule = schedule.filter((day) => day.items.length > 0);

  return (
    <div className={styles.container}>
      <PageTitle title="Розклад" />
      <div className={styles.schedule}>
        {filteredSchedule.map((scheduleDay) => (
          <div className={styles.schedule__day} key={scheduleDay.id}>
            <div className={styles.day__title}>
              <h4>{scheduleDay.title}</h4>
            </div>
            <ul className={styles.day__list}>
              {scheduleDay.items.map((movie) => (
                <MainListItem item={movie} showType={true} key={movie.id} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
