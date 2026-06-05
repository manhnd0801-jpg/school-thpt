import React from 'react';
import { Upload, Shield, Link as LinkIcon, Bold, Italic, List, Star, Trash2 } from 'lucide-react';


import { Button, Input, Select, Textarea } from '@/components/ui';
export default function TeacherForm({ onNavigate }: { onNavigate: (route: string) => void }) {
  return (
    <div className="p-4 md:p-8 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy">Tạo hồ sơ Giáo viên</h2>
          <p className="text-text-muted text-sm mt-1">Học thuật / Đội ngũ giảng dạy</p>
        </div>
        <div className="flex w-full sm:w-auto gap-3">
          <Button 
            onClick={() => onNavigate('teachers')}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl border border-surface-highest text-navy font-semibold hover:bg-surface-low transition-colors text-sm"
          >
            Hủy bỏ
          </Button>
          <Button className="flex-1 sm:flex-none px-6 py-2.5 bg-navy text-white rounded-xl shadow-lg hover:bg-navy/90 font-semibold transition-all active:scale-95 text-sm">
            Lưu thông tin
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col */}
        <div className="col-span-1 lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-highest text-center">
             <h3 className="text-xs font-bold text-text-muted mb-6 text-left uppercase tracking-wider">Ảnh đại diện</h3>
             <div className="relative w-48 h-48 mx-auto mb-4 group cursor-pointer">
               <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop" className="w-full h-full object-cover rounded-2xl border-4 border-surface shadow-sm" alt="Avatar" />
               <div className="absolute inset-0 bg-navy/40 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <Upload size={24} className="mb-2" />
                  <span className="text-sm font-semibold">Tải ảnh lên</span>
               </div>
             </div>
             <p className="text-xs text-text-muted italic">Định dạng JPG, PNG. Tối đa 2MB. Tỷ lệ 1:1.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-highest">
            <h3 className="text-xs font-bold text-text-muted mb-4 uppercase tracking-wider">Trạng thái hiển thị</h3>
            <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-surface-highest">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-success" />
                <span className="text-sm font-semibold text-navy">Hiển thị trên Web</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <Input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-surface-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
              </label>
            </div>
            <p className="text-[11px] text-text-muted mt-3 leading-relaxed">Khi bật, hồ sơ giáo viên sẽ xuất hiện trong danh sách Đội ngũ tại trang chủ.</p>
          </div>
        </div>

        {/* Right Col */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-surface-highest">
            <h3 className="text-lg font-display font-bold text-navy mb-6 border-b border-surface-highest pb-4">Thông tin cơ bản</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-navy">Họ và Tên <span className="text-error">*</span></label>
                <Input type="text" defaultValue="Nguyễn Văn Anh" className="w-full px-4 py-3 rounded-xl border border-surface-highest bg-white focus:ring-1 focus:ring-navy focus:border-navy outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Bộ môn giảng dạy <span className="text-error">*</span></label>
                <Select className="w-full px-4 py-3 rounded-xl border border-surface-highest bg-white focus:ring-1 focus:ring-navy focus:border-navy outline-none transition-all cursor-pointer">
                  <option>Toán học</option>
                  <option>Ngữ văn</option>
                  <option>Tiếng Anh</option>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Học vị cao nhất <span className="text-error">*</span></label>
                <Select className="w-full px-4 py-3 rounded-xl border border-surface-highest bg-white focus:ring-1 focus:ring-navy focus:border-navy outline-none transition-all cursor-pointer">
                  <option>Thạc sĩ</option>
                  <option>Tiến sĩ</option>
                  <option>Cử nhân</option>
                </Select>
              </div>
              <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-navy">Kinh nghiệm giảng dạy</label>
                <Textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-surface-highest bg-white focus:ring-1 focus:ring-navy focus:border-navy outline-none transition-all" defaultValue="Hơn 15 năm kinh nghiệm giảng dạy tại các trường chuyên trọng điểm. Từng là tổ trưởng bộ môn."></Textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-surface-highest">
            <h3 className="text-lg font-display font-bold text-navy mb-6 border-b border-surface-highest pb-4">Thành tích & Chứng chỉ</h3>
            <div className="space-y-4">
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl border border-surface-highest group transition-colors">
                  <Star size={18} className="text-gold fill-gold shrink-0" />
                  <Input type="text" defaultValue="Giáo viên dạy giỏi cấp Thành phố năm 2020" className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none font-medium text-navy" />
                  <Button className="text-text-muted hover:text-error opacity-0 group-hover:opacity-100 transition-opacity p-1"><Trash2 size={16}/></Button>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl border border-surface-highest group transition-colors">
                  <Star size={18} className="text-gold fill-gold shrink-0" />
                  <Input type="text" defaultValue="Huân chương vì sự nghiệp giáo dục" className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none font-medium text-navy" />
                  <Button className="text-text-muted hover:text-error opacity-0 group-hover:opacity-100 transition-opacity p-1"><Trash2 size={16}/></Button>
                </div>
              </div>

              <Button className="text-info text-sm font-semibold flex items-center gap-1 hover:underline pt-2">
                + Thêm thành tích mới
              </Button>

              <div className="pt-8">
                <label className="text-xs font-bold text-text-muted mb-3 block uppercase tracking-wider">Giới thiệu chi tiết</label>
                <div className="border border-surface-highest rounded-xl overflow-hidden focus-within:border-navy focus-within:ring-1 focus-within:ring-navy transition-all">
                  {/* WYSIWYG Header Mock */}
                  <div className="bg-surface-low p-2 flex gap-1 border-b border-surface-highest overflow-x-auto">
                    <Button className="p-1.5 hover:bg-surface-highest rounded text-navy"><Bold size={16}/></Button>
                    <Button className="p-1.5 hover:bg-surface-highest rounded text-navy"><Italic size={16}/></Button>
                    <Button className="p-1.5 hover:bg-surface-highest rounded text-navy"><List size={16}/></Button>
                    <div className="w-px h-6 bg-surface-highest mx-2 self-center"></div>
                    <Button className="p-1.5 hover:bg-surface-highest rounded text-navy"><LinkIcon size={16}/></Button>
                  </div>
                  <Textarea rows={6} className="w-full p-4 bg-white border-none outline-none text-sm text-text-main" placeholder="Nhập tiểu sử chi tiết, triết lý giảng dạy..."></Textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
