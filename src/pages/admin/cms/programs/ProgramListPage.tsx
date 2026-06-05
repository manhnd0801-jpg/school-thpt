import { BookOpen, Users, Clock, Plus, Search, Edit2, X, Save } from "lucide-react";
import { useState } from "react";


import { Button, Input, Textarea } from '@/components/ui';
export default function Programs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<{ id?: string, name?: string, desc?: string, classes?: string, output?: string } | null>(null);

  const handleOpenModal = (program: any = null) => {
    setEditingProgram(program);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProgram(null);
  };

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-[1280px] mx-auto w-full relative">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <nav className="flex items-center gap-1 text-on-surface-variant mb-2 text-xs">
            <span>Hệ thống đào tạo</span>
            <span>›</span>
            <span className="font-semibold text-navy-deep">Chương trình học</span>
          </nav>
          <h2 className="font-display font-semibold text-2xl text-navy-deep">Quản lý Chương trình Cốt lõi</h2>
        </div>
        <Button onClick={() => handleOpenModal()} className="bg-navy-deep text-white px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
          <Plus className="w-4 h-4" />
          Tạo phân hệ mới
        </Button>
      </header>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-6 rounded-xl border border-surface-variant flex items-center gap-4">
           <div className="bg-primary-container text-on-primary-container p-3 rounded-xl">
             <BookOpen className="w-6 h-6" />
           </div>
           <div>
             <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Tổng chương trình</p>
             <h3 className="font-display font-bold text-2xl text-navy-deep mt-1">4 Hệ Đào Tạo</h3>
           </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-surface-variant flex items-center gap-4">
           <div className="bg-secondary-container text-on-secondary-container p-3 rounded-xl">
             <Users className="w-6 h-6" />
           </div>
           <div>
             <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Học sinh theo học</p>
             <h3 className="font-display font-bold text-2xl text-navy-deep mt-1">1,250</h3>
           </div>
        </div>
         <div className="bg-surface-container-low p-6 rounded-xl border border-surface-variant flex items-center gap-4">
           <div className="bg-tertiary-container text-on-tertiary-container p-3 rounded-xl">
             <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
           </div>
           <div>
             <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Chất lượng kiểm định</p>
             <h3 className="font-display font-bold text-2xl text-navy-deep mt-1">100% Đạt Chuẩn</h3>
           </div>
        </div>
      </div>

      {/* Program Blocks */}
      <h3 className="font-display font-semibold text-xl text-navy-deep pt-6 border-t border-surface-variant">Chi tiết lộ trình đào tạo</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Program 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-surface-variant overflow-hidden flex flex-col group">
          <div className="h-32 bg-navy-deep relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
             <h4 className="font-display font-bold text-2xl text-white relative z-10 uppercase tracking-widest text-center px-4">
               Hệ Tiêu Chuẩn<br/><span className="text-gold-accent text-lg">Quốc gia</span>
             </h4>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">
              Chương trình đào tạo tuân thủ chặt chẽ theo khung chương trình của Bộ GD&ĐT, kết hợp tăng cường Tiếng Anh và các hoạt động giáo dục kỹ năng mềm thiết yếu.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
               <div>
                  <p className="text-[11px] font-bold text-outline uppercase tracking-wider mb-1">Khối lớp áp dụng</p>
                  <p className="font-semibold text-sm text-navy-deep">Khối 10, 11, 12</p>
               </div>
               <div>
                  <p className="text-[11px] font-bold text-outline uppercase tracking-wider mb-1">Chuẩn đầu ra</p>
                  <p className="font-semibold text-sm text-navy-deep">Bằng Tốt Nghiệp THPT</p>
               </div>
               <div className="col-span-2 space-y-2 mt-2">
                 <div className="flex justify-between text-[11px] font-semibold">
                   <span>Sĩ số dự kiến</span>
                   <span>850 / 900</span>
                 </div>
                 <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                   <div className="bg-navy-deep h-full w-[94%]"></div>
                 </div>
               </div>
            </div>
            <Button onClick={() => handleOpenModal({ id: "1", name: "Hệ Tiêu Chuẩn", desc: "Chương trình đào tạo tuân thủ chặt chẽ theo khung chương trình của Bộ GD&ĐT, kết hợp tăng cường Tiếng Anh và các hoạt động giáo dục kỹ năng mềm thiết yếu.", classes: "Khối 10, 11, 12", output: "Bằng Tốt Nghiệp THPT" })} className="w-full py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm font-semibold text-navy-deep hover:bg-surface-container transition-colors flex justify-center items-center gap-2">
               <Edit2 className="w-4 h-4" /> Cập nhật khung chương trình
            </Button>
          </div>
        </div>

        {/* Program 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-surface-variant overflow-hidden flex flex-col group border-t-4 border-t-gold-accent">
          <div className="h-32 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden flex items-center justify-center">
             <div className="absolute top-2 right-2 bg-gold-accent text-navy-deep text-[10px] font-bold px-2 py-0.5 rounded uppercase shadow-sm z-20">Nổi Bật</div>
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
             <h4 className="font-display font-bold text-2xl text-white relative z-10 uppercase tracking-widest text-center px-4">
               Hệ Song Ngữ<br/><span className="text-gold-accent text-lg">Cambridge</span>
             </h4>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">
              Chương trình tích hợp giữa hệ THPT Quốc gia và hệ thống giáo dục chuẩn quốc tế Cambridge. 100% giáo viên bản ngữ giảng dạy các môn Khoa học.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
               <div>
                  <p className="text-[11px] font-bold text-outline uppercase tracking-wider mb-1">Khối lớp áp dụng</p>
                  <p className="font-semibold text-sm text-navy-deep">Khối 10, 11 (IGCSE, A-Level)</p>
               </div>
               <div>
                  <p className="text-[11px] font-bold text-outline uppercase tracking-wider mb-1">Chuẩn đầu ra</p>
                  <p className="font-semibold text-sm text-navy-deep">Chứng chỉ A-Level + THPT</p>
               </div>
                <div className="col-span-2 space-y-2 mt-2">
                 <div className="flex justify-between text-[11px] font-semibold">
                   <span>Sĩ số dự kiến</span>
                   <span className="text-success">280 / 300</span>
                 </div>
                 <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                   <div className="bg-success h-full w-[93%]"></div>
                 </div>
               </div>
            </div>
            <Button onClick={() => handleOpenModal({ id: "2", name: "Hệ Song Ngữ", desc: "Chương trình tích hợp giữa hệ THPT Quốc gia và hệ thống giáo dục chuẩn quốc tế Cambridge. 100% giáo viên bản ngữ giảng dạy các môn Khoa học.", classes: "Khối 10, 11 (IGCSE, A-Level)", output: "Chứng chỉ A-Level + THPT" })} className="w-full py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm font-semibold text-navy-deep hover:bg-surface-container transition-colors flex justify-center items-center gap-2">
               <Edit2 className="w-4 h-4" /> Cập nhật khung chương trình
            </Button>
          </div>
        </div>
      </div>

      {/* Program Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-surface-variant">
              <h3 className="font-display font-semibold text-xl text-navy-deep">
                {editingProgram ? "Cập nhật Phân hệ" : "Thêm Phân hệ mới"}
              </h3>
              <Button onClick={handleCloseModal} className="p-2 hover:bg-surface-container rounded-full text-text-muted transition-colors">
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Tên phân hệ</label>
                <Input 
                  type="text" 
                  defaultValue={editingProgram?.name || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
                  placeholder="Ví dụ: Hệ Tiêu Chuẩn"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Khối lớp áp dụng</label>
                <Input 
                  type="text" 
                  defaultValue={editingProgram?.classes || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
                  placeholder="Ví dụ: Khối 10, 11, 12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Chuẩn đầu ra</label>
                <Input 
                  type="text" 
                  defaultValue={editingProgram?.output || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
                  placeholder="Ví dụ: Bằng Tốt Nghiệp THPT"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Mô tả chương trình</label>
                <Textarea 
                  rows={3}
                  defaultValue={editingProgram?.desc || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all resize-none"
                  placeholder="Mô tả tóm tắt về phân hệ..."
                ></Textarea>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 p-6 border-t border-surface-variant bg-surface-container-lowest">
              <Button onClick={handleCloseModal} className="px-4 py-2 text-sm font-medium text-text-muted hover:text-navy-deep transition-colors">
                Hủy bỏ
              </Button>
              <Button onClick={handleCloseModal} className="px-4 py-2 bg-navy-deep text-white rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
                <Save className="w-4 h-4" />
                Lưu thông tin
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
