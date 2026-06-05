import { useNavigate } from 'react-router-dom';
import UserFormScreen from './UserFormScreen';

export default function UserDetailPage() {
  const navigate = useNavigate();
  return <UserFormScreen onNavigate={() => navigate('/admin/users')} />;
}
