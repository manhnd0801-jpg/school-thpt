import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 shadow-sm transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-surface-container-lowest'}`}>
      <nav className="flex justify-between items-center px-lg py-sm max-w-container-max mx-auto h-16 md:h-20">
        <div className="flex items-center">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-navy-deep hover:opacity-90 transition-opacity">
            VIET ACADEMY
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-lg">
          <Link to="/" className={`font-body-md text-body-md transition-colors duration-200 ${isActive('/') ? 'text-primary font-bold border-b-2 border-secondary-container pb-1' : 'text-on-surface-variant hover:text-secondary-container'}`}>
            Trang chủ
          </Link>
          <Button onClick={() => scrollToSection('gioi-thieu')} className="text-on-surface-variant font-body-md text-body-md hover:text-secondary-container transition-colors duration-200 cursor-pointer">
            Giới thiệu
          </Button>
          <Button onClick={() => scrollToSection('chuong-trinh-hoc')} className="text-on-surface-variant font-body-md text-body-md hover:text-secondary-container transition-colors duration-200 cursor-pointer">
            Chương trình học
          </Button>
          <Button onClick={() => scrollToSection('tuyen-sinh')} className="text-on-surface-variant font-body-md text-body-md hover:text-secondary-container transition-colors duration-200 cursor-pointer">
            Tuyển sinh
          </Button>
          <Link to="/news" className={`font-body-md text-body-md transition-colors duration-200 ${location.pathname.startsWith('/news') ? 'text-primary font-bold border-b-2 border-secondary-container pb-1' : 'text-on-surface-variant hover:text-secondary-container'}`}>
            Tin tức
          </Link>
          <Button onClick={() => scrollToSection('lien-he')} className="text-on-surface-variant font-body-md text-body-md hover:text-secondary-container transition-colors duration-200 cursor-pointer">
            Liên hệ
          </Button>
        </div>

        <div className="flex items-center gap-md">
          <Button onClick={() => scrollToSection('lien-he')} className="bg-navy-deep md:bg-gold-accent text-white md:text-navy-deep px-lg py-sm rounded-lg md:rounded font-label-md text-label-md shadow-sm hover:opacity-90 transition-opacity cursor-pointer">
            Nộp hồ sơ
          </Button>
          <Button className="md:hidden text-navy-deep">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
