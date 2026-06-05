import { useNavigate } from 'react-router-dom';
import TeachersScreen from './TeachersScreen';

export default function TeacherListPage() {
  const navigate = useNavigate();
  return <TeachersScreen onNavigate={() => navigate('/admin/cms/teachers/create')} />;
}
