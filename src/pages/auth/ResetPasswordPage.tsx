import { useNavigate } from 'react-router-dom';
import ResetPasswordScreen from './ResetPasswordScreen';

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  return <ResetPasswordScreen onNavigate={() => navigate('/auth/login')} />;
}
