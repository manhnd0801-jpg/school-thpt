import React from 'react';
import { ShieldCheck, ArrowRight, GraduationCap } from 'lucide-react';
import { Button, Input } from '@/components/ui';
export default function ActivateAccount({ onNavigate }: { onNavigate: (route: string) => void }) {
  return (
    <div className="min-h-screen bg-navy flex items-stretch overflow-hidden">
      {/* Left Branding Panel */}
      <div className="hidden lg:flex w-[55%] xl:w-[60%] relative flex-col justify-between p-16 overflow-hidden">
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
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-surface flex items-center justify-center p-6 md:p-12 xl:p-20 relative z-20 rounded-l-3xl lg:rounded-none">
        
        <div className="absolute top-8 left-8 flex lg:hidden items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shadow-md">
            <GraduationCap className="text-white" size={20} />
          </div>
          <span className="font-display font-bold text-navy tracking-wide">VANGUARD</span>
        </div>

        <div className="w-full max-w-sm">
          <div className="mb-8">
            <div className="w-16 h-16 bg-success/10 text-success rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={32} />
            </div>
            <h1 className="font-display text-3xl font-bold text-navy mb-2 tracking-tight">Kích hoạt tài khoản</h1>
            <p className="text-text-muted text-sm leading-relaxed">Chào mừng Minh Quân. Vui lòng thiết lập mật khẩu bảo mật để hoàn tất quá trình kích hoạt tài khoản của bạn.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onNavigate('login'); }} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-navy">Mật khẩu mới</label>
              <Input type="password" placeholder="••••••••" className="w-full px-4 py-3.5 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white focus:outline-none transition-all text-sm font-medium text-navy" required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-navy">Xác nhận mật khẩu</label>
              <Input type="password" placeholder="••••••••" className="w-full px-4 py-3.5 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white focus:outline-none transition-all text-sm font-medium text-navy" required />
            </div>

            <div className="space-y-3 bg-white p-4 rounded-xl border border-surface-highest mt-6">
               <label className="flex items-center gap-2 text-xs font-semibold text-text-muted"><span className="w-4 h-4 rounded-full bg-surface-highest flex items-center justify-center text-[10px] text-text-muted/50">✗</span> Ít nhất 8 ký tự</label>
               <label className="flex items-center gap-2 text-xs font-semibold text-text-muted"><span className="w-4 h-4 rounded-full bg-surface-highest flex items-center justify-center text-[10px] text-text-muted/50">✗</span> Có chữ hoa và số</label>
            </div>

            <Button type="submit" className="w-full mt-6 py-4 bg-navy text-white rounded-xl font-bold text-sm hover:bg-navy/90 border border-navy shadow-md shadow-navy/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
              KÍCH HOẠT TÀI KHOẢN <ArrowRight size={18} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
