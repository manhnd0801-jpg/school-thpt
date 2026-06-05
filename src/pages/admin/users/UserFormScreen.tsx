import React from 'react';
import { ArrowLeft, Save, User, Mail, Phone, Fingerprint, Shield, GraduationCap, Users as UsersIcon, Camera, AlertTriangle } from 'lucide-react';
import { Button, Input } from '@/components/ui';
export default function UserForm({ onNavigate }: { onNavigate: (route: string) => void }) {
  return (
    <div className="p-4 md:p-8 space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-surface-highest pb-6 mb-6 gap-4">
        <div className="flex items-center gap-4">
          <Button onClick={() => onNavigate('users')} className="p-2 hover:bg-surface-low rounded-full transition-colors shrink-0">
            <ArrowLeft size={24} className="text-navy" />
          </Button>
          <div>
            <h1 className="font-display text-2xl font-bold text-navy">Thông tin người dùng</h1>
            <p className="text-xs text-text-muted mt-1">Tạo mới / Chỉnh sửa hệ thống</p>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-xs text-text-muted italic hidden md:block">Cập nhật lần cuối: 10 phút trước</span>
          <Button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-navy text-white rounded-xl font-semibold shadow-lg hover:bg-navy/90 transition-all active:scale-95 text-sm">
            <Save size={18} /> Lưu thay đổi
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Col (8) */}
        <div className="md:col-span-8 space-y-8">
          {/* Basic Info */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-surface-highest">
            <h2 className="font-display text-xl font-bold text-navy mb-6 pb-4 border-b border-surface-highest flex items-center gap-2">
              <User className="text-navy" size={20}/> Thông tin cơ bản
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Họ và tên</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <Input type="text" defaultValue="Lê Minh Quân" className="w-full pl-11 pr-4 py-3.5 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white transition-all outline-none font-medium text-navy text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Email liên hệ</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <Input type="email" defaultValue="quan.lm@vanguard.edu.vn" className="w-full pl-11 pr-4 py-3.5 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white transition-all outline-none font-medium text-navy text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Số điện thoại</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <Input type="tel" defaultValue="0988 123 456" className="w-full pl-11 pr-4 py-3.5 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white transition-all outline-none font-medium text-navy text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Mã nhân viên / Học sinh</label>
                <div className="relative">
                  <Fingerprint size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <Input type="text" defaultValue="VA-2024-001" className="w-full pl-11 pr-4 py-3.5 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white transition-all outline-none font-medium text-navy text-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Role */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-surface-highest">
            <h2 className="font-display text-xl font-bold text-navy mb-6 pb-4 border-b border-surface-highest flex items-center gap-2">
              <Shield className="text-navy" size={20}/> Phân quyền & Truy cập
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="relative flex items-start gap-3 p-4 bg-surface rounded-xl border-2 border-navy cursor-pointer">
                <Input type="radio" name="role" defaultChecked className="hidden" />
                <Shield size={20} className="text-navy mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm text-navy">Quản trị viên</p>
                  <p className="text-[11px] text-text-muted mt-1 leading-tight">Toàn quyền hệ thống</p>
                </div>
                <div className="absolute top-2 right-2 flex items-center justify-center w-5 h-5 rounded-full bg-navy text-white text-xs font-bold">✓</div>
              </label>
              
              <label className="relative flex items-start gap-3 p-4 bg-surface rounded-xl border-2 border-transparent hover:border-surface-highest cursor-pointer opacity-70 hover:opacity-100 transition-all group">
                <Input type="radio" name="role" className="hidden" />
                <GraduationCap size={20} className="text-text-muted mt-0.5 shrink-0 group-hover:text-navy transition-colors" />
                <div>
                  <p className="font-bold text-sm text-navy">Giảng viên</p>
                  <p className="text-[11px] text-text-muted mt-1 leading-tight">Quản lý lớp & điểm</p>
                </div>
              </label>

              <label className="relative flex items-start gap-3 p-4 bg-surface rounded-xl border-2 border-transparent hover:border-surface-highest cursor-pointer opacity-70 hover:opacity-100 transition-all group">
                <Input type="radio" name="role" className="hidden" />
                <UsersIcon size={20} className="text-text-muted mt-0.5 shrink-0 group-hover:text-navy transition-colors" />
                <div>
                  <p className="font-bold text-sm text-navy">Phụ huynh</p>
                  <p className="text-[11px] text-text-muted mt-1 leading-tight">Theo dõi tiến độ</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Col (4) */}
        <div className="md:col-span-4 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-highest">
            <h2 className="font-display text-lg font-bold text-navy mb-4 border-b border-surface-highest pb-3">Trạng thái</h2>
            <div className="bg-success/10 border border-success/20 p-4 rounded-xl flex items-center justify-between mb-6">
               <div className="flex items-center gap-2">
                 <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse"></span>
                 <span className="text-sm font-bold text-success">Đang hoạt động</span>
               </div>
               <Button className="text-xs font-semibold text-navy underline hover:text-gold transition-colors">Thay đổi</Button>
            </div>
            
            <div className="flex items-center justify-between border-t border-surface-highest pt-4">
               <div>
                 <p className="text-sm font-bold text-navy">Gửi email kích hoạt</p>
                 <p className="text-xs text-text-muted mt-0.5">Gửi link xác thực tài khoản</p>
               </div>
               <label className="relative inline-flex items-center cursor-pointer">
                <Input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-10 h-5 bg-surface-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-navy"></div>
              </label>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-highest text-center">
            <h2 className="font-display text-lg font-bold text-navy mb-6 border-b border-surface-highest pb-3 text-left">Ảnh đại diện</h2>
            <div className="relative w-32 h-32 mx-auto mb-6 group cursor-pointer">
               <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&w=300&h=300&fit=crop" className="w-full h-full object-cover rounded-full border-4 border-surface shadow-sm" alt="Avatar" />
               <div className="absolute inset-0 bg-navy/40 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <Camera size={24} />
               </div>
            </div>
            <p className="text-[11px] text-text-muted mb-4 px-2 leading-relaxed">Tải lên file PNG, JPG hoặc WEBP. Tối đa 5MB.</p>
            <Button className="w-full py-2.5 border-2 border-dashed border-surface-highest text-text-muted font-semibold rounded-xl hover:border-navy hover:text-navy hover:bg-surface-low transition-colors text-sm">
              Chọn ảnh mới
            </Button>
          </div>

          <div className="bg-error/5 border border-error/20 p-5 rounded-2xl">
             <div className="flex items-start gap-3">
               <AlertTriangle className="text-error mt-0.5 shrink-0" size={20} />
               <div className="min-w-0">
                 <p className="text-sm font-bold text-error">Vùng nguy hiểm</p>
                 <p className="text-[11px] text-error/80 mt-1 mb-4 leading-relaxed pr-2">Xóa tài khoản này sẽ gỡ bỏ toàn bộ quyền truy cập và dữ liệu. Không thể hoàn tác.</p>
                 <Button className="bg-error hover:bg-[#dc2626] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors shadow-sm">
                   Xóa người dùng
                 </Button>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
