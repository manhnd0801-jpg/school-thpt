import { useNavigate } from 'react-router-dom';
import ActivateAccountScreen from './ActivateAccountScreen';

export default function ActivateAccountPage() {
  const navigate = useNavigate();
  return <ActivateAccountScreen onNavigate={() => navigate('/auth/login')} />;
}
