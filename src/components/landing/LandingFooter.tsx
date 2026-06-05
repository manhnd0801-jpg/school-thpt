import { Facebook, MessageCircle, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-navy-deep text-on-primary w-full">
      <div className="max-w-container-max mx-auto px-lg py-xl grid grid-cols-1 md:grid-cols-4 gap-gutter">
        
        {/* Column 1 */}
        <div className="space-y-md">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-gold-accent block">
            VIET ACADEMY
          </Link>
          <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
            Kiến tạo tương lai, nâng tầm tri thức. Chúng tôi tự hào là nơi nuôi dưỡng những tài năng tương lai của đất nước.
          </p>
          <div className="flex gap-md">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-accent hover:text-navy-deep transition-all transform hover:translate-x-1">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-accent hover:text-navy-deep transition-all transform hover:translate-x-1">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-accent hover:text-navy-deep transition-all transform hover:translate-x-1">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h5 className="font-label-md text-gold-accent font-bold mb-md uppercase tracking-widest text-on-primary-fixed-variant md:text-gold-accent">Liên kết nhanh</h5>
          <ul className="space-y-sm">
            <li><a href="#" className="font-body-sm text-body-sm text-on-primary-container hover:text-gold-accent hover:translate-x-1 underline transition-all inline-block">Quy định chung</a></li>
            <li><a href="#" className="font-body-sm text-body-sm text-on-primary-container hover:text-gold-accent hover:translate-x-1 underline transition-all inline-block">Chính sách bảo mật</a></li>
            <li><a href="#" className="font-body-sm text-body-sm text-on-primary-container hover:text-gold-accent hover:translate-x-1 underline transition-all inline-block">Sơ đồ trang web</a></li>
            <li><a href="#" className="font-body-sm text-body-sm text-on-primary-container hover:text-gold-accent hover:translate-x-1 underline transition-all inline-block">Hướng dẫn nộp hồ sơ</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h5 className="font-label-md text-gold-accent font-bold mb-md uppercase tracking-widest text-on-primary-fixed-variant md:text-gold-accent">Hỗ trợ</h5>
          <ul className="space-y-sm">
            <li><a href="#" className="font-body-sm text-body-sm text-on-primary-container hover:text-gold-accent hover:translate-x-1 underline transition-all inline-block">Quy định chung</a></li>
            <li><a href="#" className="font-body-sm text-body-sm text-on-primary-container hover:text-gold-accent hover:translate-x-1 underline transition-all inline-block">Chính sách bảo mật</a></li>
            <li><a href="#" className="font-body-sm text-body-sm text-on-primary-container hover:text-gold-accent hover:translate-x-1 underline transition-all inline-block">Sơ đồ trang web</a></li>
            <li><a href="#" className="font-body-sm text-body-sm text-on-primary-container hover:text-gold-accent hover:translate-x-1 underline transition-all inline-block">Hướng dẫn nộp hồ sơ</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h5 className="font-label-md text-gold-accent font-bold mb-md uppercase tracking-widest text-on-primary-fixed-variant md:text-gold-accent">Liên hệ</h5>
          <div className="space-y-sm font-body-sm text-body-sm text-on-primary-container flex flex-col gap-sm">
            <p className="flex items-center gap-xs">Số 123 Đường Sáng Tạo, Quận 1, TP. HCM</p>
            <p className="flex items-center gap-xs">Hotline: (028) 3844 5566</p>
            <p className="flex items-center gap-xs">Email: info@vietacademy.edu.vn</p>
          </div>
        </div>

      </div>
      
      <div className="border-t border-on-primary-container/20 py-md px-lg text-center font-body-sm text-body-sm text-on-primary-container">
        © 2024 VIET ACADEMY. Tất cả quyền được bảo lưu.
      </div>
    </footer>
  );
}

export default Footer;
