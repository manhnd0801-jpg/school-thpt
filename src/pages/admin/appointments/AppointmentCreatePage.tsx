import { useNavigate } from 'react-router-dom';
import AppointmentFormScreen from './AppointmentFormScreen';

export default function AppointmentCreatePage() {
  const navigate = useNavigate();
  return <AppointmentFormScreen onNavigate={() => navigate('/admin/appointments')} />;
}
