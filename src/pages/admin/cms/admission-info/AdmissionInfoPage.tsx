import { Info, Banknote, FileText, Megaphone, Edit, Edit2, PlayCircle, Eye, Save } from "lucide-react";
import { Link } from "react-router-dom";


import { Button, Input, Select } from '@/components/ui';
export default function AdmissionsSettings() {
  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-text-muted mb-2 text-xs">
            <span>Hệ thống quản lý</span>
            <span>›</span>
            <span className="text-navy-deep font-semibold">Quản lý Tuyển sinh</span>
          </nav>
          <h1 className="font-display font-semibold text-2xl text-navy-deep">Cấu hình Tuyển sinh</h1>
        </div>
        <div className="flex gap-4">
          <Button className="px-6 py-2 border border-navy-deep text-navy-deep rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-navy-deep hover:text-white transition-all">
            <Eye className="w-4 h-4" />
            Xem trước
          </Button>
          <Button className="px-6 py-2 bg-gold-accent text-navy-deep rounded-xl font-semibold text-sm flex items-center gap-2 shadow-sm active:scale-95 transition-all">
            <Save className="w-4 h-4" />
            Lưu thay đổi
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Core Settings */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* General Info Card */}
          <section className="bg-white rounded-xl p-6 shadow-sm border border-surface-variant">
            <h3 className="font-display font-semibold text-lg text-navy-deep mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-gold-accent" />
              Thông tin cơ bản
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-semibold text-sm text-navy-deep block">Năm học tuyển sinh</label>
                <Select className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest p-3 text-sm focus:ring-2 focus:ring-navy-deep outline-none">
                  <option>2024 - 2025</option>
                  <option>2025 - 2026</option>
                  <option>2026 - 2027</option>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="font-semibold text-sm text-navy-deep block">Chỉ tiêu tổng cộng</label>
                <div className="relative">
                  <Input type="number" defaultValue="450" className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest p-3 text-sm focus:ring-2 focus:ring-navy-deep outline-none" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-xs">Học sinh</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <label className="font-semibold text-sm text-navy-deep block">Giai đoạn nhận hồ sơ</label>
              <div className="flex items-center gap-4">
                <div className="flex-grow">
                  <Input type="date" defaultValue="2024-03-01" className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest p-3 text-sm focus:ring-2 focus:ring-navy-deep outline-none" />
                </div>
                <span className="text-text-muted text-sm">đến</span>
                <div className="flex-grow">
                  <Input type="date" defaultValue="2024-06-30" className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest p-3 text-sm focus:ring-2 focus:ring-navy-deep outline-none" />
                </div>
              </div>
            </div>
          </section>

          {/* Tuition & Fees Card */}
          <section className="bg-white rounded-xl p-6 shadow-sm border border-surface-variant">
            <h3 className="font-display font-semibold text-lg text-navy-deep mb-6 flex items-center gap-2">
              <Banknote className="w-5 h-5 text-gold-accent" />
              Học phí dự kiến
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-navy-deep text-white rounded-lg">
                    <Banknote className="w-4 h-4" />
                  </div>
                  <div>
                     <p className="font-semibold text-sm text-navy-deep">Học phí chính khóa</p>
                     <p className="text-xs text-text-muted mt-0.5">Áp dụng cho toàn bộ năm học</p>
                  </div>
                </div>
                <div className="text-right flex items-end">
                   <Input type="text" defaultValue="120,000,000" className="font-display font-semibold text-lg text-right bg-transparent border-b-2 border-dashed border-outline-variant focus:border-navy-deep outline-none w-32 px-1" />
                   <span className="font-semibold text-navy-deep ml-2 text-sm pb-1">VNĐ</span>
                </div>
              </div>

               <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary-container text-white rounded-lg">
                    {/* Utensils substitute */}
                    <span className="material-symbols-outlined text-sm">restaurant</span>
                  </div>
                  <div>
                     <p className="font-semibold text-sm text-navy-deep">Phí bán trú & Dinh dưỡng</p>
                     <p className="text-xs text-text-muted mt-0.5">Tiêu chuẩn quốc tế</p>
                  </div>
                </div>
                <div className="text-right flex items-end">
                   <Input type="text" defaultValue="35,000,000" className="font-display font-semibold text-lg text-right bg-transparent border-b-2 border-dashed border-outline-variant focus:border-navy-deep outline-none w-32 px-1" />
                   <span className="font-semibold text-navy-deep ml-2 text-sm pb-1">VNĐ</span>
                </div>
              </div>
              
              <Button className="w-full py-3 border-2 border-dashed border-outline-variant rounded-xl text-text-muted hover:border-navy-deep hover:text-navy-deep transition-all flex items-center justify-center gap-2 text-sm font-semibold">
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                Thêm danh mục phí khác
              </Button>
            </div>
          </section>
        </div>

        {/* Right Column: Assets & Status */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <section className="bg-navy-deep text-white rounded-xl p-6 shadow-md">
            <h3 className="font-display font-semibold text-lg mb-4">Trạng thái tuyển sinh</h3>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
              <span className="text-success text-xs font-bold uppercase tracking-widest">Đang mở đăng ký</span>
            </div>
            
            <div className="p-4 bg-white/10 rounded-xl mb-6">
              <div className="flex justify-between text-xs mb-2">
                <span>Hồ sơ đã nhận</span>
                <span className="font-semibold">312 / 450</span>
              </div>
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gold-accent h-full w-[70%]" />
              </div>
            </div>

            <Button className="w-full py-2.5 bg-white text-navy-deep rounded-xl font-semibold text-sm hover:bg-gold-accent transition-colors">
              Đóng cổng
            </Button>
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm border border-surface-variant">
             <h3 className="font-display font-semibold text-lg text-navy-deep mb-6 flex items-center gap-2">
               <FileText className="w-5 h-5 text-gold-accent" />
               Tài liệu Brochure
             </h3>
             <div className="group relative">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-outline-variant bg-surface-container relative">
                   <div className="absolute inset-0 bg-surface-dim flex items-center justify-center">
                      <FileText className="w-16 h-16 text-outline-variant" />
                   </div>
                   <div className="absolute inset-0 bg-navy-deep/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                     <span className="material-symbols-outlined text-white text-[40px] mb-4">upload_file</span>
                     <p className="text-white font-semibold text-sm">Thay đổi file mới</p>
                     <p className="text-white/70 text-xs mt-1">PDF, JPG, PNG (Tối đa 10MB)</p>
                   </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-navy-deep">Brochure_2024.pdf</p>
                    <p className="text-xs text-text-muted mt-0.5">Cập nhật: 12/02/2024</p>
                  </div>
                  <Button className="p-2 hover:bg-error/10 text-error rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </Button>
                </div>
             </div>
          </section>
        </div>
      </div>
      
      {/* Visual Timeline (Simulated bottom section) */}
      <section className="mt-12">
        <h3 className="font-display font-semibold text-xl text-navy-deep mb-8">Lộ trình Tuyển sinh Chi tiết</h3>
        <div className="relative py-8">
           <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2" />
           <div className="grid grid-cols-4 gap-6 relative">
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-navy-deep text-white flex items-center justify-center mb-4 ring-8 ring-surface">
                  <Megaphone className="w-5 h-5" />
                </div>
                <p className="font-semibold text-sm text-navy-deep">Công bố thông tin</p>
                <p className="text-xs text-text-muted mt-1">15/01/2024</p>
              </div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-gold-accent text-navy-deep flex items-center justify-center mb-4 ring-8 ring-surface shadow-sm">
                  <span className="material-symbols-outlined">edit_document</span>
                </div>
                <p className="font-semibold text-sm text-navy-deep">Mở cổng đăng ký</p>
                <p className="text-xs text-text-muted mt-1">01/03/2024</p>
              </div>
               <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center mb-4 ring-8 ring-surface">
                  <span className="material-symbols-outlined">quiz</span>
                </div>
                <p className="font-semibold text-sm text-navy-deep">Phỏng vấn & Khảo sát</p>
                <p className="text-xs text-text-muted mt-1">Dự kiến tháng 07</p>
              </div>
               <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center mb-4 ring-8 ring-surface">
                  <span className="material-symbols-outlined">fact_check</span>
                </div>
                <p className="font-semibold text-sm text-navy-deep">Thông báo kết quả</p>
                <p className="text-xs text-text-muted mt-1">Tháng 08/2024</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
