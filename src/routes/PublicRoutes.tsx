import { Route } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import HomePage from '@/pages/public/home/HomePage';
import NewsListPage from '@/pages/public/news/NewsListPage';
import NewsDetailPage from '@/pages/public/news/NewsDetailPage';
import AdmissionPage from '@/pages/public/admission/AdmissionPage';

export const publicRoutes = (
  <Route element={<PublicLayout />}>
    <Route index element={<HomePage />} />
    <Route path='news' element={<NewsListPage />} />
    <Route path='news/:id' element={<NewsDetailPage />} />
    <Route path='admission' element={<AdmissionPage />} />
  </Route>
);
