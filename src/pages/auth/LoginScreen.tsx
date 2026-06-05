import React, { useState } from 'react';
import { GraduationCap, ArrowRight, BookOpen, Clock, AlertCircle } from 'lucide-react';
import { Button, Input } from '@/components/ui';
type AuthView = 'login' | 'forgot';

export default function Login({ onLogin, onNavigate, initialView = 'login' }: { onLogin: () => void, onNavigate?: (route: string) => void, initialView?: AuthView }) {
  const [view, setView] = useState<AuthView>(initialView);

  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     if(view === 'login') onLogin();
     if(view === 'forgot' && onNavigate) onNavigate('reset');
  };

  const renderForm = () => {
    switch(view) {
      case 'forgot':
        return (
          <>
            <div className="mb-8">
              <h1 className="font-display text-3xl font-bold text-navy mb-2 tracking-tight">Quên mật khẩu?</h1>
              <p className="text-text-muted text-sm leading-relaxed">Nhập email liên kết với tài khoản hệ thống của bạn để nhận liên kết đặt lại mật khẩu bảo mật.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Email tài khoản</label>
                <div className="relative">
                   <Input type="email" placeholder="admin@vanguard.edu.vn" className="w-full px-4 py-3.5 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white focus:outline-none transition-all font-medium text-sm text-navy" required />
                </div>
              </div>
              <Button className="w-full mt-2 py-4 px-6 bg-navy text-white rounded-xl font-bold text-sm hover:bg-navy/90 border border-navy shadow-md shadow-navy/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                GỬI LIÊN KẾT XÁC NHẬN <ArrowRight size={18} />
              </Button>
              <Button type="button" onClick={() => setView('login')} className="w-full mt-4 text-sm font-semibold text-text-muted hover:text-navy transition-colors text-center block">Quay lại đăng nhập</Button>
            </form>
          </>
        );
      default:
        // Login View
        return (
          <>
            <div className="mb-8">
              <h1 className="font-display text-4xl font-bold text-navy mb-2 tracking-tight">Chào mừng<br/>trở lại.</h1>
              <p className="text-text-muted text-sm max-w-[280px] leading-relaxed">Đăng nhập vào hệ thống quản trị <span className="font-bold text-navy">Vanguard Secondary</span> để liên tục kết nối.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Tên đăng nhập</label>
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="UID hoặc Email"
                    className="w-full pl-4 pr-32 py-3.5 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white focus:outline-none transition-all font-medium text-sm text-navy"
                    defaultValue="admin"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-text-muted bg-surface-highest px-3 py-1.5 rounded-lg pointer-events-none">@vanguard.edu.vn</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-navy">Mật khẩu</label>
                  <Button type="button" onClick={() => setView('forgot')} className="text-xs font-semibold text-navy hover:text-gold transition-colors focus:outline-none">Quên mật khẩu?</Button>
                </div>
                <Input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-4 py-3.5 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white focus:outline-none transition-all text-sm font-medium text-navy tracking-widest"
                  defaultValue="password"
                />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full py-4 px-6 bg-navy text-white rounded-xl font-bold text-sm hover:bg-navy/90 border border-navy shadow-md shadow-navy/20 transition-all active:scale-95 flex items-center justify-center gap-2 group cursor-pointer focus:ring-4 focus:ring-navy/20 focus:outline-none">
                  TRUY CẬP HỆ THỐNG
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2">
                 <Button type="button" onClick={() => onNavigate && onNavigate('activate')} className="text-xs font-semibold text-text-muted hover:text-navy transition-colors focus:outline-none">Khởi tạo tài khoản</Button>
              </div>

              <p className="text-center text-xs text-text-muted font-medium pt-4 flex justify-center items-center gap-2">
                Phiên bản hệ thống <span className="font-mono bg-surface-highest px-2 py-1 rounded-md text-navy text-[10px] uppercase font-bold tracking-wider">v2.4.1</span>
              </p>
            </form>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-stretch overflow-hidden">
      {/* Left Branding Panel */}
      <div className="hidden lg:flex w-[55%] xl:w-[60%] relative flex-col justify-between p-16 overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-transparent"></div>
        <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-gold rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16 hover:opacity-90 transition-opacity cursor-pointer w-fit">
            <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
              <GraduationCap className="text-navy" size={28} />
            </div>
            <div>
              <h1 className="font-display font-bold text-white text-2xl tracking-wide leading-none mb-1">VANGUARD</h1>
              <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold">Secondary School</span>
            </div>
          </div>

          <div className="space-y-6 max-w-xl">
            <h2 className="font-display text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Vững bước <br/>
              <span className="text-gold mt-2 block">Tương lai.</span>
            </h2>
            <p className="text-white/70 text-base xl:text-lg leading-relaxed max-w-md font-medium">Hệ thống quản trị giáo dục toàn diện dành riêng cho hội đồng học thuật và ban quản lý nhà trường.</p>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-6 max-w-lg mt-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <BookOpen className="text-gold mb-4" size={24} />
            <h3 className="text-white font-bold text-sm mb-1.5 tracking-wide">Kiểm soát giáo án</h3>
            <p className="text-white/50 text-xs leading-relaxed">Phân phối và theo dõi tiến độ học thuật chuyên sâu.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <Clock className="text-gold mb-4" size={24} />
            <h3 className="text-white font-bold text-sm mb-1.5 tracking-wide">Thời gian thực</h3>
            <p className="text-white/50 text-xs leading-relaxed">Cập nhật dữ liệu từ các lớp học một cách tức thì.</p>
          </div>
        </div>
      </div>

      {/* Right Login Panel */}
      <div className="flex-1 bg-surface flex items-center justify-center p-6 md:p-12 xl:p-20 relative shadow-[-20px_0_40px_-20px_rgba(0,0,0,0.4)] z-20 rounded-l-3xl lg:rounded-none">
        
        {/* Mobile Logo */}
        <div className="absolute top-8 left-8 flex lg:hidden items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shadow-md">
            <GraduationCap className="text-white" size={20} />
          </div>
          <span className="font-display font-bold text-navy tracking-wide">VANGUARD</span>
        </div>

        <div className="w-full max-w-sm">
          {renderForm()}
        </div>
      </div>
    </div>
  );
}
