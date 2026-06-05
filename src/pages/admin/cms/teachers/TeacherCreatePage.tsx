import { useNavigate } from 'react-router-dom';
import TeacherFormScreen from './TeacherFormScreen';

export default function TeacherCreatePage() {
  const navigate = useNavigate();
  return <TeacherFormScreen onNavigate={() => navigate('/admin/cms/teachers')} />;
}
