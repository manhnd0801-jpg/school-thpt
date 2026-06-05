import React from 'react';
import { ArrowLeft, Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { Button, Input, Select, Textarea } from '@/components/ui';
export default function AppointmentForm({ onNavigate }: { onNavigate: (route: string) => void }) {
  return (
    <div className="p-4 md:p-8 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-highest pb-6">
        <div className="flex items-center gap-4">
          <Button onClick={() => onNavigate('appointments')} className="p-2 hover:bg-surface-low rounded-full transition-colors shrink-0">
            <ArrowLeft size={24} className="text-navy" />
          </Button>
          <div>
            <h1 className="font-display text-2xl font-bold text-navy">Thông tin lịch hẹn</h1>
            <p className="text-xs text-text-muted mt-1">Tạo mới / Cập nhật lịch hẹn tư vấn</p>
          </div>
        </div>
        <div className="flex w-full sm:w-auto gap-3">
          <Button onClick={() => onNavigate('appointments')} className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl border border-surface-highest text-navy font-semibold hover:bg-surface-low transition-colors text-sm">Hủy</Button>
          <Button className="flex-1 sm:flex-none px-6 py-2.5 bg-navy text-white rounded-xl shadow-lg hover:bg-navy/90 font-semibold transition-all active:scale-95 text-sm">Lưu lịch hẹn</Button>
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-surface-highest overflow-hidden">
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Section 1 */}
          <div>
            <h2 className="text-sm border-b border-surface-highest pb-3 font-semibold text-navy uppercase tracking-wider mb-6">1. Thông tin thời gian</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Ngày hẹn</label>
                <div className="relative">
                  <CalendarIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <Input type="date" className="w-full pl-11 pr-4 py-3 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white outline-none text-sm text-navy font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Giờ hẹn</label>
                <div className="relative">
                  <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <Input type="time" className="w-full pl-11 pr-4 py-3 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white outline-none text-sm text-navy font-medium" />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-navy">Loại lịch hẹn</label>
                <Select className="w-full px-4 py-3 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white outline-none text-sm text-navy font-medium cursor-pointer">
                  <option>Tư vấn tuyển sinh trực tiếp</option>
                  <option>Tham quan cơ sở vật chất</option>
                  <option>Tư vấn qua điện thoại/Zalo</option>
                  <option>Nộp hồ sơ trúng tuyển</option>
                </Select>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-sm border-b border-surface-highest pb-3 font-semibold text-navy uppercase tracking-wider mb-6">2. Thông tin khách hàng (Phụ huynh)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Họ và Tên</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <Input type="text" placeholder="Nhập tên phụ huynh" className="w-full pl-11 pr-4 py-3 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy outline-none text-sm text-navy font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Số điện thoại</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <Input type="tel" placeholder="09xxxxxxx" className="w-full pl-11 pr-4 py-3 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy outline-none text-sm text-navy font-medium" />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-navy">Tên học sinh (Nếu có)</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted opacity-50" />
                  <Input type="text" placeholder="Nhập tên học sinh" className="w-full pl-11 pr-4 py-3 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy outline-none text-sm text-navy font-medium" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-sm border-b border-surface-highest pb-3 font-semibold text-navy uppercase tracking-wider mb-6">3. Thông tin nội bộ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Chuyên viên phụ trách</label>
                <Select className="w-full px-4 py-3 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy outline-none text-sm text-navy font-medium cursor-pointer">
                  <option>Minh Admin</option>
                  <option>Nguyễn Văn A</option>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Trạng thái lịch hẹn</label>
                <Select className="w-full px-4 py-3 bg-warning/10 text-warning border border-warning/20 rounded-xl focus:ring-1 focus:ring-warning outline-none text-sm font-bold cursor-pointer">
                  <option>Chờ xác nhận</option>
                  <option>Đã xác nhận</option>
                  <option>Đã hoàn thành</option>
                  <option>Đã hủy</option>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-navy">Ghi chú thêm</label>
                <Textarea rows={4} className="w-full px-4 py-3 bg-surface border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy outline-none text-sm text-navy font-medium" placeholder="Các lưu ý đặc biệt, nhu cầu của phụ huynh..."></Textarea>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
