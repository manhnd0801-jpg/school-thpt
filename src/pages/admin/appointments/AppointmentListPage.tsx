import { useNavigate } from 'react-router-dom';
import AppointmentsScreen from './AppointmentsScreen';

export default function AppointmentListPage() {
  const navigate = useNavigate();
  return <AppointmentsScreen onNavigate={() => navigate('/admin/appointments/create')} />;
}
