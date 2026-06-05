import { 
  Phone,
  Mail,
  ChevronRight,
  PhoneCall
} from "lucide-react";


import { Button, Input, Select, Textarea } from '@/components/ui';
export default function CreateLead() {
  return (
    <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <nav className="flex items-center gap-1 text-on-surface-variant mb-2">
            <span className="font-medium text-xs">Hệ thống</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-xs">Lead</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-xs text-navy-deep">Tạo Lead mới</span>
          </nav>
          <h2 className="font-display font-semibold text-2xl text-navy-deep">Thông tin Lead mới</h2>
        </div>
        <div className="flex gap-4">
          <Button className="px-6 py-2 border border-outline rounded-xl font-semibold text-sm text-navy-deep hover:bg-surface-container transition-all active:scale-95">
            Hủy bỏ
          </Button>
          <Button className="px-8 py-2 bg-navy-deep text-white rounded-xl font-semibold text-sm hover:opacity-90 shadow-sm transition-all active:scale-95">
            Lưu thông tin
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Form Fields */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section: Parent Information */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant">
            <div className="flex items-center gap-2 mb-6 border-b border-surface-variant pb-4">
              {/* @ts-ignore - Lucide icon names can vary, using string mapping if needed, but direct import is better */}
              <svg className="w-6 h-6 text-navy-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="font-display font-semibold text-lg text-navy-deep">Thông tin phụ huynh</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5 md:col-span-2">
                <label className="font-semibold text-sm text-navy-deep">Họ và tên phụ huynh *</label>
                <Input 
                  type="text" 
                  placeholder="Nhập đầy đủ họ tên" 
                  className="w-full p-3 border border-outline-variant rounded-xl focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-semibold text-sm text-navy-deep">Số điện thoại *</label>
                <div className="relative">
                  <Phone className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <Input 
                    type="tel" 
                    placeholder="09xx xxx xxx" 
                    className="w-full pl-10 p-3 border border-outline-variant rounded-xl focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="font-semibold text-sm text-navy-deep">Email liên hệ</label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <Input 
                    type="email" 
                    placeholder="example@email.com" 
                    className="w-full pl-10 p-3 border border-outline-variant rounded-xl focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Student Information */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant">
            <div className="flex items-center gap-2 mb-6 border-b border-surface-variant pb-4">
              <svg className="w-6 h-6 text-navy-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="font-display font-semibold text-lg text-navy-deep">Thông tin học sinh</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1.5 md:col-span-3">
                <label className="font-semibold text-sm text-navy-deep">Họ và tên học sinh *</label>
                <Input 
                  type="text" 
                  placeholder="Nhập đầy đủ họ tên học sinh" 
                  className="w-full p-3 border border-outline-variant rounded-xl focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-semibold text-sm text-navy-deep">Năm sinh</label>
                <Select className="w-full p-3 border border-outline-variant rounded-xl focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all text-sm bg-white">
                  <option>Chọn năm sinh</option>
                  <option>2008</option>
                  <option>2009</option>
                  <option>2010</option>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="font-semibold text-sm text-navy-deep">Lớp hiện tại</label>
                <Select className="w-full p-3 border border-outline-variant rounded-xl focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all text-sm bg-white">
                  <option>Chọn lớp</option>
                  <option>Lớp 9</option>
                  <option>Lớp 10</option>
                  <option>Lớp 11</option>
                  <option>Lớp 12</option>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="font-semibold text-sm text-navy-deep">Trường đang theo học</label>
                <Input 
                  type="text" 
                  placeholder="Tên trường THCS/THPT" 
                  className="w-full p-3 border border-outline-variant rounded-xl focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section: Consultation Needs */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant">
            <div className="flex items-center gap-2 mb-6 border-b border-surface-variant pb-4">
              <svg className="w-6 h-6 text-navy-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 className="font-display font-semibold text-lg text-navy-deep">Nhu cầu tư vấn</h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-1.5">
                <label className="font-semibold text-sm text-navy-deep">Nội dung nhu cầu tư vấn</label>
                <Textarea 
                  rows={4} 
                  placeholder="Mô tả chi tiết nguyện vọng của phụ huynh và học sinh..." 
                  className="w-full p-3 border border-outline-variant rounded-xl focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all text-sm resize-none"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <Input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-navy-deep focus:ring-navy-deep" />
                  <span className="text-sm text-text-main group-hover:text-navy-deep transition-colors">Tư vấn tuyển sinh lớp 10</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <Input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-navy-deep focus:ring-navy-deep" />
                  <span className="text-sm text-text-main group-hover:text-navy-deep transition-colors">Học bổng tài năng</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <Input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-navy-deep focus:ring-navy-deep" />
                  <span className="text-sm text-text-main group-hover:text-navy-deep transition-colors">Chương trình quốc tế</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Status & Metadata */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant sticky top-24">
            <div className="flex items-center gap-2 mb-6 border-b border-surface-variant pb-4">
              <svg className="w-6 h-6 text-navy-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="font-display font-semibold text-lg text-navy-deep">Quản lý Trạng thái</h3>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-semibold text-sm text-navy-deep block mb-2">Trạng thái hiện tại</label>
                <div className="grid grid-cols-1 gap-2">
                  <label className="flex items-center justify-between p-3 border border-outline-variant rounded-xl cursor-pointer hover:border-info transition-all has-[:checked]:border-info has-[:checked]:bg-info/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-info/10 flex items-center justify-center text-info">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                      </div>
                      <span className="font-semibold text-sm">Lead Mới</span>
                    </div>
                    <Input type="radio" name="status" className="w-4 h-4 text-info focus:ring-info" defaultChecked />
                  </label>
                  
                  <label className="flex items-center justify-between p-3 border border-outline-variant rounded-xl cursor-pointer hover:border-warning transition-all has-[:checked]:border-warning has-[:checked]:bg-warning/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center text-warning">
                        <PhoneCall className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-sm">Đang liên hệ</span>
                    </div>
                    <Input type="radio" name="status" className="w-4 h-4 text-warning focus:ring-warning" />
                  </label>
                  
                  <label className="flex items-center justify-between p-3 border border-outline-variant rounded-xl cursor-pointer hover:border-success transition-all has-[:checked]:border-success has-[:checked]:bg-success/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <span className="font-semibold text-sm">Đã chốt</span>
                    </div>
                    <Input type="radio" name="status" className="w-4 h-4 text-success focus:ring-success" />
                  </label>
                  
                  <label className="flex items-center justify-between p-3 border border-outline-variant rounded-xl cursor-pointer hover:border-error transition-all has-[:checked]:border-error has-[:checked]:bg-error/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center text-error">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <span className="font-semibold text-sm">Tạm ngưng</span>
                    </div>
                    <Input type="radio" name="status" className="w-4 h-4 text-error focus:ring-error" />
                  </label>
                </div>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-surface-variant">
                <label className="font-semibold text-sm text-navy-deep">Nguồn Lead</label>
                <Select className="w-full p-3 border border-outline-variant rounded-xl focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all text-sm bg-white">
                  <option>Facebook Ads</option>
                  <option>Website</option>
                  <option>Hotline</option>
                  <option>Sự kiện trường</option>
                  <option>Giới thiệu</option>
                </Select>
              </div>

              <div className="pt-4 border-t border-surface-variant">
                <div className="flex items-center gap-1.5 mb-2">
                  <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="font-medium text-xs text-text-muted italic">Thông tin lưu trữ</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Người tạo:</span>
                    <span className="text-navy-deep font-semibold">Admin_Nguyen</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Ngày tạo:</span>
                    <span className="text-navy-deep font-semibold">24/10/2023 09:45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
