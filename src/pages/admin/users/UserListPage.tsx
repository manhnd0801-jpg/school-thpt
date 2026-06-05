import { useNavigate } from 'react-router-dom';
import UsersScreen from './UsersScreen';

export default function UserListPage() {
  const navigate = useNavigate();
  return <UsersScreen onNavigate={() => navigate('/admin/users/create')} />;
}
