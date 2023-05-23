import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MoviePageProvider from './pages/MoviePage/MoviePageProvider';
import LayoutProvider from './pages/Layout/LayoutProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import './styles/fonts.css';
import AboutUs from './pages/AboutUs/AboutUs';
import Contacts from './pages/Contacts/Contacts';
import MainPageProvider from './pages/MainPage/MainPageProvider';
import MoviesPageProvider from './pages/MoviesPage/MoviesPageProvider';
import SerialsPageProvider from './pages/SerialsPage/SerialsPageProvider';
import SchedulePageProvider from './pages/SchedulePage/SchedulePageProvider';

const queryClient = new QueryClient();

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutProvider />}>
      <Route path="movie/:id" element={<MoviePageProvider />} />
      <Route path="movies/" element={<MoviesPageProvider />} />
      <Route path="serials/" element={<SerialsPageProvider/>} />
      <Route path="about" element={<AboutUs />} />
      <Route path="schedule" element={<SchedulePageProvider />} />
      <Route path="contacts" element={<Contacts />} />
      <Route index element={<MainPageProvider />} />
      <Route path="*" element={<NotFoundPage />} />
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
