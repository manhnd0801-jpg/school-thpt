import { Outlet } from 'react-router-dom';
import { Header as LandingHeader } from '../components/landing/LandingHeader';
import { Footer as LandingFooter } from '../components/landing/LandingFooter';

export default function PublicLayout() {
  return (
    <div className='flex min-h-screen flex-col bg-surface text-on-surface font-sans'>
      <LandingHeader />
      <main className='flex-1'>
        <Outlet />
      </main>
      <LandingFooter />
    </div>
  );
}
