import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { useContext, useEffect } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import AppContext from '../../context/AppContext';
import useScreenSize from '../../hooks/useScreenSize';

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const { isAuth, actions } = useContext(AppContext);

  const screenSize = useScreenSize();
  const handleLogout = () => {
    actions.logout();
  };

  const handleLoginWindowOpen = () => {
    setIsMenuOpen(false);
    actions.setIsLoginOpen(true);
  };

  const closeSidebar = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (screenSize !== 's' && screenSize !== 'xs') {
      closeSidebar();
    }
  }, [screenSize]);

  return (
    <Modal
      className={styles.modal}
      footer={null}
      onCancel={closeSidebar}
      closable={true}
      open={isMenuOpen}
      keyboard={true}
      closeIcon={<CloseOutlined className={styles.closeIcon} />}
    >
      <div className={styles.sidebar}>
        <div className={styles.navItem}>
          <NavLink to="movies" onClick={closeSidebar}>
            Фільми
          </NavLink>
        </div>
        <div className={styles.navItem}>
          <NavLink to="serials" onClick={closeSidebar}>
            Серіали
          </NavLink>
        </div>
        <div className={styles.navItem}>
          <NavLink to="schedule" onClick={closeSidebar}>
            Розклад
          </NavLink>
        </div>
        <div className={styles.navItem}>
          <NavLink to="about" onClick={closeSidebar}>
            Про нас
          </NavLink>
        </div>
        <div className={styles.navItem}>
          <NavLink to="contacts" onClick={closeSidebar}>
            Контакти
          </NavLink>
        </div>
        <Button onClick={() => (isAuth ? handleLogout() : handleLoginWindowOpen())} className={styles.sidebar__button}>
          {isAuth ? 'Вийти' : 'Увійти'}
        </Button>
        <div className={styles.navItem}></div>
      </div>
    </Modal>
  );
};

export default Sidebar;
