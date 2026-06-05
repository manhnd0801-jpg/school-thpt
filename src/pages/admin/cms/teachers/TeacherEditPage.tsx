import { useNavigate } from 'react-router-dom';
import TeacherFormScreen from './TeacherFormScreen';

export default function TeacherEditPage() {
  const navigate = useNavigate();
  return <TeacherFormScreen onNavigate={() => navigate('/admin/cms/teachers')} />;
}
