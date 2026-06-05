import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './PublicRoutes';
import { adminRoutes } from './AdminRoutes';

export function AppRoutes() {
  return (
    <Routes>
      {publicRoutes}
      {adminRoutes}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}
