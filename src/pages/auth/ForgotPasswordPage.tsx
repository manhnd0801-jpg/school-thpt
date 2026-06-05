import { useNavigate } from 'react-router-dom';
import LoginScreen from './LoginScreen';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  return (
    <LoginScreen
      initialView='forgot'
      onLogin={() => navigate('/admin')}
      onNavigate={(route) => {
        if (route === 'activate') navigate('/auth/activate-account');
        if (route === 'reset') navigate('/auth/reset-password');
      }}
    />
  );
}
