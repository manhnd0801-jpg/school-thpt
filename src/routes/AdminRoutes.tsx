import { Navigate, Route } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import AuthLayout from '@/layouts/AuthLayout';
import ProtectedRoute from './ProtectedRoute';

import LoginPage from '@/pages/auth/LoginPage';
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '@/pages/auth/ResetPasswordPage';
import ActivateAccountPage from '@/pages/auth/ActivateAccountPage';

import DashboardPage from '@/pages/admin/dashboard/DashboardPage';
import LeadListPage from '@/pages/admin/leads/LeadListPage';
import LeadCreatePage from '@/pages/admin/leads/LeadCreatePage';
import LeadDetailPage from '@/pages/admin/leads/LeadDetailPage';
import LeadEditPage from '@/pages/admin/leads/LeadEditPage';
import AppointmentListPage from '@/pages/admin/appointments/AppointmentListPage';
import AppointmentCreatePage from '@/pages/admin/appointments/AppointmentCreatePage';
import AppointmentEditPage from '@/pages/admin/appointments/AppointmentEditPage';
import CmsNewsListPage from '@/pages/admin/cms/news/CmsNewsListPage';
import CmsNewsCreatePage from '@/pages/admin/cms/news/CmsNewsCreatePage';
import CmsNewsEditPage from '@/pages/admin/cms/news/CmsNewsEditPage';
import BannerListPage from '@/pages/admin/cms/banners/BannerListPage';
import ProgramListPage from '@/pages/admin/cms/programs/ProgramListPage';
import TeacherListPage from '@/pages/admin/cms/teachers/TeacherListPage';
import TeacherCreatePage from '@/pages/admin/cms/teachers/TeacherCreatePage';
import TeacherEditPage from '@/pages/admin/cms/teachers/TeacherEditPage';
import GalleryPage from '@/pages/admin/cms/gallery/GalleryPage';
import FaqListPage from '@/pages/admin/cms/faqs/FaqListPage';
import TestimonialListPage from '@/pages/admin/cms/testimonials/TestimonialListPage';
import AdmissionInfoPage from '@/pages/admin/cms/admission-info/AdmissionInfoPage';
import UserListPage from '@/pages/admin/users/UserListPage';
import UserCreatePage from '@/pages/admin/users/UserCreatePage';
import UserDetailPage from '@/pages/admin/users/UserDetailPage';
import UserEditPage from '@/pages/admin/users/UserEditPage';
import RoleListPage from '@/pages/admin/roles/RoleListPage';
import SettingPage from '@/pages/admin/settings/SettingPage';
import AuditLogPage from '@/pages/admin/audit-logs/AuditLogPage';

export const adminRoutes = (
  <>
    <Route path='login' element={<Navigate to='/auth/login' replace />} />
    <Route path='forgot-password' element={<Navigate to='/auth/forgot-password' replace />} />
    <Route path='reset-password' element={<Navigate to='/auth/reset-password' replace />} />
    <Route path='activate-account' element={<Navigate to='/auth/activate-account' replace />} />

    <Route path='auth' element={<AuthLayout />}>
      <Route index element={<Navigate to='login' replace />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='forgot-password' element={<ForgotPasswordPage />} />
      <Route path='reset-password' element={<ResetPasswordPage />} />
      <Route path='activate-account' element={<ActivateAccountPage />} />

      <Route path='forgot' element={<Navigate to='../forgot-password' replace />} />
      <Route path='reset' element={<Navigate to='../reset-password' replace />} />
      <Route path='activate' element={<Navigate to='../activate-account' replace />} />
    </Route>

    <Route element={<ProtectedRoute />}>
      <Route path='admin' element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path='dashboard' element={<DashboardPage />} />

        <Route path='leads' element={<LeadListPage />} />
        <Route path='leads/create' element={<LeadCreatePage />} />
        <Route path='leads/:id' element={<LeadDetailPage />} />
        <Route path='leads/:id/edit' element={<LeadEditPage />} />

        <Route path='appointments' element={<AppointmentListPage />} />
        <Route path='appointments/create' element={<AppointmentCreatePage />} />
        <Route path='appointments/:id/edit' element={<AppointmentEditPage />} />

        <Route path='cms/news' element={<CmsNewsListPage />} />
        <Route path='cms/news/create' element={<CmsNewsCreatePage />} />
        <Route path='cms/news/:id/edit' element={<CmsNewsEditPage />} />
        <Route path='cms/banners' element={<BannerListPage />} />
        <Route path='cms/programs' element={<ProgramListPage />} />
        <Route path='cms/teachers' element={<TeacherListPage />} />
        <Route path='cms/teachers/create' element={<TeacherCreatePage />} />
        <Route path='cms/teachers/:id/edit' element={<TeacherEditPage />} />
        <Route path='cms/gallery' element={<GalleryPage />} />
        <Route path='cms/faqs' element={<FaqListPage />} />
        <Route path='cms/testimonials' element={<TestimonialListPage />} />
        <Route path='cms/admission-info' element={<AdmissionInfoPage />} />

        <Route path='users' element={<UserListPage />} />
        <Route path='users/create' element={<UserCreatePage />} />
        <Route path='users/:id' element={<UserDetailPage />} />
        <Route path='users/:id/edit' element={<UserEditPage />} />

        <Route path='roles' element={<RoleListPage />} />
        <Route path='settings' element={<SettingPage />} />
        <Route path='audit-logs' element={<AuditLogPage />} />
      </Route>
    </Route>
  </>
);
