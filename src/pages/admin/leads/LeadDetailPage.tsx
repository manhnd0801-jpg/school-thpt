import { ChevronRight, Users, GraduationCap, FileText, StickyNote, History, Phone, Mail, Download, Calendar } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button, Textarea } from '@/components/ui';
export default function LeadDetail() {
  const { id } = useParams();

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <nav className="flex items-center gap-1 text-on-surface-variant mb-2">
            <span className="font-medium text-xs">Hệ thống</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-xs">Quản lý Lead</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-xs text-navy-deep">Chi tiết Lead {id || "LD-2026-0001"}</span>
          </nav>
          <div className="flex items-center gap-4">
             <h2 className="font-display font-semibold text-2xl text-navy-deep">{id || "LD-2026-0001"}</h2>
             <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold">Đang xử lý</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button className="flex items-center gap-2 px-4 py-2 border border-outline rounded-xl font-semibold text-sm text-navy-deep hover:bg-surface-container transition-all">
            <History className="w-4 h-4" />
            Cập nhật trạng thái
          </Button>
          <Button className="flex items-center gap-2 px-4 py-2 border border-outline rounded-xl font-semibold text-sm text-navy-deep hover:bg-surface-container transition-all">
            <Mail className="w-4 h-4" />
            Gửi email
          </Button>
           <Button className="flex items-center gap-2 px-4 py-2 border border-outline rounded-xl font-semibold text-sm text-navy-deep hover:bg-surface-container transition-all">
            <Phone className="w-4 h-4" />
            Gọi điện
          </Button>
          <Button className="flex items-center gap-2 px-4 py-2 bg-gold-accent text-navy-deep rounded-xl font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
            <Download className="w-4 h-4" />
            Xuất hồ sơ
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant">
            <div className="flex items-center gap-2 mb-6 border-b border-surface-variant pb-4">
              <Users className="w-6 h-6 text-navy-deep" />
              <h3 className="font-display font-semibold text-lg text-navy-deep">Thông tin phụ huynh</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-text-muted">Họ và tên</label>
                <p className="font-semibold text-text-main mt-1">Nguyễn Văn Hòa</p>
              </div>
               <div>
                <label className="text-sm text-text-muted">Số điện thoại</label>
                <p className="font-semibold text-text-main mt-1">090 123 4567</p>
              </div>
               <div>
                <label className="text-sm text-text-muted">Email liên hệ</label>
                <p className="font-semibold text-text-main mt-1">hoa.nguyen@example.com</p>
              </div>
               <div>
                <label className="text-sm text-text-muted">Khu vực cư trú</label>
                <p className="font-semibold text-text-main mt-1">Quận 7, TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant">
            <div className="flex items-center gap-2 mb-6 border-b border-surface-variant pb-4">
              <GraduationCap className="w-6 h-6 text-navy-deep" />
              <h3 className="font-display font-semibold text-lg text-navy-deep">Thông tin học sinh</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-text-muted">Họ và tên học sinh</label>
                <p className="font-semibold text-text-main mt-1">Nguyễn Minh Anh</p>
              </div>
               <div>
                <label className="text-sm text-text-muted">Năm sinh</label>
                <p className="font-semibold text-text-main mt-1">2010</p>
              </div>
               <div>
                <label className="text-sm text-text-muted">Lớp hiện tại</label>
                <p className="font-semibold text-text-main mt-1">Lớp 8</p>
              </div>
               <div>
                <label className="text-sm text-text-muted">Trường đang theo học</label>
                <p className="font-semibold text-text-main mt-1">THCS Quốc tế Á Châu</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant">
             <div className="flex items-center gap-2 mb-6 border-b border-surface-variant pb-4">
              <FileText className="w-6 h-6 text-navy-deep" />
              <h3 className="font-display font-semibold text-lg text-navy-deep">Nhu cầu tư vấn</h3>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-sm text-text-muted">Nội dung đăng ký</label>
                <p className="text-text-main bg-surface-container-low p-4 rounded-lg italic mt-2 text-sm">
                  "Tôi quan tâm đến chương trình song ngữ Cambridge của trường cho con vào năm học tới. Muốn tìm hiểu về quy trình xét tuyển và học phí."
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                   <label className="text-sm text-text-muted">Nguồn Lead</label>
                   <p className="font-semibold text-info mt-1">Facebook Ads</p>
                </div>
                 <div>
                   <label className="text-sm text-text-muted">Ngày đăng ký</label>
                   <p className="font-semibold text-text-main mt-1">15/05/2024 - 14:30</p>
                </div>
              </div>
            </div>
          </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant">
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <StickyNote className="w-6 h-6 text-navy-deep" />
                  <h3 className="font-display font-semibold text-lg text-navy-deep">Ghi chú nội bộ</h3>
                </div>
                <span className="text-xs text-text-muted italic">Tự động lưu vào lịch sử</span>
             </div>
             <Textarea 
                className="w-full h-32 p-4 rounded-xl border border-outline-variant focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none resize-none transition-all text-sm"
                placeholder="Nhập ghi chú mới sau mỗi lần tương tác với phụ huynh..."
              />
              <div className="mt-4 flex justify-end">
                <Button className="bg-navy-deep text-white px-6 py-2 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">
                  Lưu ghi chú
                </Button>
              </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant">
            <h3 className="font-semibold text-sm text-text-muted uppercase tracking-wider mb-4">Người phụ trách</h3>
            <div className="flex items-center gap-4 p-3 bg-surface-container-low rounded-xl">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                 <img src="https://i.pravatar.cc/150?u=ha" alt="Staff" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                 <p className="font-bold text-navy-deep text-sm">Trần Thu Hà</p>
                 <p className="text-xs text-text-muted">Chuyên viên Tuyển sinh</p>
              </div>
            </div>
          </div>

          <div className="bg-navy-deep p-6 rounded-xl shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm text-gold-accent uppercase tracking-wider">Hẹn sắp tới</h3>
              <span className="px-2 py-0.5 bg-gold-accent text-navy-deep rounded text-[10px] font-bold">KHẨN CẤP</span>
            </div>
            <div className="flex items-start gap-4">
               <div className="flex flex-col items-center justify-center bg-white/10 rounded-lg p-2 min-w-[60px]">
                  <span className="font-bold text-lg">20</span>
                  <span className="text-white/70 text-[10px] uppercase">Tháng 5</span>
               </div>
               <div>
                 <p className="font-semibold text-sm">Tham quan khuôn viên</p>
                 <p className="text-white/70 text-xs mt-1">09:00 AM - Khu A</p>
                 <div className="mt-3 flex gap-3">
                   <Button className="text-gold-accent text-xs font-semibold hover:underline">Nhắc nhở</Button>
                   <Button className="text-white/50 text-xs font-semibold hover:underline">Hủy</Button>
                 </div>
               </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant">
            <h3 className="font-semibold text-sm text-text-muted uppercase tracking-wider mb-6">Lịch sử chăm sóc</h3>
            <div className="relative space-y-6 before:absolute before:inset-y-2 before:left-[11px] before:w-[2px] before:bg-surface-variant">
              <div className="relative pl-8">
                 <span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-success flex items-center justify-center z-10 text-white">
                   <Phone className="w-3 h-3" />
                 </span>
                 <div className="bg-surface-container-low p-3 rounded-lg">
                   <p className="text-sm font-bold text-navy-deep">Cuộc gọi thành công</p>
                   <p className="text-xs text-text-muted">NV: Hà Trần</p>
                   <p className="text-xs italic mt-2">"Phụ huynh đồng ý tham quan vào thứ Hai tới."</p>
                   <span className="block text-[10px] text-text-muted mt-2 uppercase">Hôm nay, 10:15</span>
                 </div>
              </div>
               <div className="relative pl-8">
                 <span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-info flex items-center justify-center z-10 text-white">
                   <Mail className="w-3 h-3" />
                 </span>
                 <div className="p-2">
                   <p className="text-sm font-bold text-text-main">Gửi Email Brochure</p>
                   <span className="block text-[10px] text-text-muted mt-1 uppercase">15/05/2024, 15:00</span>
                 </div>
              </div>
               <div className="relative pl-8">
                 <span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center z-10 text-navy-deep">
                   <Users className="w-3 h-3" />
                 </span>
                 <div className="p-2">
                   <p className="text-sm font-bold text-text-main">Lead mới được tạo</p>
                   <span className="block text-[10px] text-text-muted mt-1 uppercase">15/05/2024, 14:30</span>
                 </div>
              </div>
            </div>
            <Button className="w-full mt-6 text-center py-2 text-sm font-semibold text-navy-deep hover:bg-surface-container-low rounded-lg transition-colors">
              Xem tất cả lịch sử
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
