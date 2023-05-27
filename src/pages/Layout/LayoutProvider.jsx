import Layout from './Layout';
import { useMutation, useQuery } from '@tanstack/react-query';
import { UserAPI } from '../../services/userAPI';
import setUserData from '../../utils/user/setUserData';
import DataResolver from './DataResolver';
import AppContext from '../../context/AppContext';
import { useEffect, useState } from 'react';
import getUserData from '../../utils/user/getUserData';
import setToken from '../../utils/user/setToken';
import checkResponseError from '../../utils/checkRespoonseError';
import { Alert } from 'antd';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import { MoviesApi as MoviesAPI } from '../../services/moviesAPI';
import { NewMoviesApi } from '../../services/newMovies';
import { SerialsApi } from '../../services/serialsAPI';
import { SlidersApi } from '../../services/slidersAPI';

const LayoutProvider = () => {
  let id;
  const parsedUserData = getUserData();
  if (parsedUserData) {
    id = parsedUserData.id;
  }

  const [alert, setAlert] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleCloseAlert = () => {
    setAlert(null);
  };

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['user', { id }],
    enabled: false,
    initialData: () => {
      return null;
    },
    onSuccess: (data) => {
      setUserData(data, true);
    },
    onError: (error) => {
      UserAPI.logout();
    },
    queryFn: async () => {
      const response = await UserAPI.getUserById(id);
      checkResponseError(response);
      return response.data;
    },
  });

  const login = useMutation({
    mutationKey: ['login'],
    onSuccess: (data) => {
      // refetch(['user', { id: data.userData.id }]);
      setToken(data.token);
      setIsLoginOpen(false);
      setAlert({ type: 'success', message: 'Ви успішно авторизувались' });
    },
    onError: (error) => {
      const errorMessage = error.toString();
      setAlert({ type: 'error', message: errorMessage });
    },
    mutationFn: async (values) => {
      const response = await UserAPI.login(values);
      checkResponseError(response);
      return response.data;
    },
  });

  const logout = () => {
    UserAPI.logout();
  };

  const register = useMutation({
    mutationKey: ['registration'],
    onSuccess: () => {
      setIsLoginOpen(false);
      setShowRegisterModal(false);
    },
    onError: (error) => {
      const errorMessage = error.toString();
      setAlert({ type: 'error', message: errorMessage });
    },
    mutationFn: async (values) => {
      const response = await UserAPI.register(values);
      checkResponseError(response);
      if (response.status === 201) {
        login.mutate({ email: values.email, password: values.password });
      }
      return response.data;
    },
  });

  const getMovies = useQuery({
    queryKey: ['movies'],
    enabled: false,
    onError: (error) => {
      setAlert({ type: 'error', message: error.toString() });
    },
    queryFn: async () => {
      const response = await MoviesAPI.getMovies();
      checkResponseError(response);
      return response.data;
    },
  });

  const getNewMovies = useQuery({
    queryKey: ['newMovies'],
    enabled: false,
    onError: (error) => {
      setAlert({ type: 'error', message: error.toString() });
    },
    queryFn: async () => {
      const response = await NewMoviesApi.getNewMovies();
      checkResponseError(response);
      return response.data;
    },
  });

  const getSerials = useQuery({
    queryKey: ['serials'],
    enabled: false,
    onError: (error) => {
      setAlert({ type: 'error', message: error.toString() });
    },
    queryFn: async () => {
      const response = await SerialsApi.getSerials();
      checkResponseError(response);
      return response.data;
    },
  });

  const getSliders = useQuery({
    queryKey: ['sliders'],
    enabled: false,
    onError: (error) => {
      setAlert({ type: 'error', message: error.toString() });
    },
    queryFn: async () => {
      const response = await SlidersApi.getSliders();
      checkResponseError(response);
      return response.data;
    },
  });

  const contextValue = {
    user: data,
    error,
    isLoading,
    isAuth: JSON.parse(localStorage.getItem('isAuth')),
    token: localStorage.getItem('token'),
    isLoginOpen,
    isMenuOpen,
    showRegisterModal,
    actions: {
      setAlert,
      getMovies,
      getNewMovies,
      getSerials,
      getSliders,
      setIsLoginOpen,
      setIsMenuOpen,
      setShowRegisterModal,
      login,
      logout,
      register,
    },
  };

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  // useEffect(() => {
  //   if (id) {
  //     refetch(['user', { id }]);
  //   }
  // }, []);

  useEffect(() => {
    let timeoutId = null;

    if (alert) {
      timeoutId = setTimeout(() => {
        setAlert(null);
      }, 7000);
    } else {
      clearTimeout(timeoutId);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [alert]);

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <DataResolver data={data} error={error} loading={isLoading}>
          <Layout />
        </DataResolver>
      </AppContext.Provider>
      {alert && (
        <div style={{ position: 'fixed', top: '100px', left: '20px', maxWidth: '300px' }}>
          <Alert message={alert.message} type={alert.type} closable showIcon afterClose={handleCloseAlert} />
        </div>
      )}
      {showRegisterModal && (
        <RegisterModal
          register={register}
          setShowRegisterModal={setShowRegisterModal}
          showRegisterModal={showRegisterModal}
        />
      )}
    </>
  );
};

export default LayoutProvider;
