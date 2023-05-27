import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LayoutProvider from './pages/Layout/LayoutProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import './styles/fonts.css';
import Loader from './components/Loader/Loader';

const MoviePageProvider = lazy(() => import('./pages/MoviePage/MoviePageProvider'));
const MoviesPageProvider = lazy(() => import('./pages/MoviesPage/MoviesPageProvider'));
const SerialsPageProvider = lazy(() => import('./pages/SerialsPage/SerialsPageProvider'));
const SchedulePageProvider = lazy(() => import('./pages/SchedulePage/SchedulePageProvider'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const MainPageProvider = lazy(() => import('./pages/MainPage/MainPageProvider'));
const queryClient = new QueryClient();

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutProvider />}>
      <Route
        path="movie/:id"
        element={
          <Suspense fallback={<Loader />}>
            {' '}
            <MoviePageProvider />{' '}
          </Suspense>
        }
      />
      <Route
        path="serial/:id"
        element={
          <Suspense fallback={<Loader />}>
            {' '}
            <MoviePageProvider />{' '}
          </Suspense>
        }
      />
      <Route
        path="movies/"
        element={
          <Suspense fallback={<Loader />}>
            {' '}
            <MoviesPageProvider />{' '}
          </Suspense>
        }
      />
      <Route
        path="serials/"
        element={
          <Suspense fallback={<Loader />}>
            {' '}
            <SerialsPageProvider />{' '}
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<Loader />}>
            {' '}
            <AboutUs />{' '}
          </Suspense>
        }
      />
      <Route
        path="schedule"
        element={
          <Suspense fallback={<Loader />}>
            {' '}
            <SchedulePageProvider />{' '}
          </Suspense>
        }
      />
      <Route
        path="contacts"
        element={
          <Suspense fallback={<Loader />}>
            {' '}
            <Contacts />{' '}
          </Suspense>
        }
      />
      <Route
        index
        element={
          <Suspense fallback={<Loader />}>
            {' '}
            <MainPageProvider />{' '}
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            {' '}
            <NotFoundPage />{' '}
          </Suspense>
        }
      />
    </Route>,
  ),
);

const App = () => (
  <ConfigProvider>
    <div id="app">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  </ConfigProvider>
);

export default App;
