import { useNavigate } from 'react-router-dom';
import LoginScreen from './LoginScreen';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <LoginScreen
      onLogin={() => navigate('/admin')}
      onNavigate={(route) => {
        if (route === 'activate') navigate('/auth/activate-account');
        if (route === 'reset') navigate('/auth/reset-password');
      }}
    />
  );
}
