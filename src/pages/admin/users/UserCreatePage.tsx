import { useNavigate } from 'react-router-dom';
import UserFormScreen from './UserFormScreen';

export default function UserCreatePage() {
  const navigate = useNavigate();
  return <UserFormScreen onNavigate={() => navigate('/admin/users')} />;
}
