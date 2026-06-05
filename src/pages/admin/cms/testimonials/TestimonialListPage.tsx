import { MessageSquareQuote, Search, Plus, Star, Edit, Trash2, MoreVertical, X, Save } from "lucide-react";
import { useState } from "react";
import { Button, Input, Textarea } from '@/components/ui';
export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<{ id?: string, name?: string, role?: string, content?: string } | null>(null);

  const handleOpenModal = (testimonial: any = null) => {
    setEditingTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTestimonial(null);
  };

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-[1280px] mx-auto w-full relative">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <nav className="flex items-center gap-1 text-on-surface-variant mb-2 text-xs">
             <span>Nội dung</span>
             <span>›</span>
             <span className="font-semibold text-navy-deep">Cảm nhận học viên</span>
          </nav>
          <h2 className="font-display font-semibold text-2xl text-navy-deep">Cảm nhận Phụ huynh & Học viên</h2>
        </div>
        <Button onClick={() => handleOpenModal()} className="whitespace-nowrap bg-navy-deep text-white px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
          <Plus className="w-4 h-4" />
          Thêm cảm nhận
        </Button>
      </header>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-variant flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex bg-surface-container-low p-1 rounded-xl">
          <Button className="px-4 py-1.5 rounded-lg bg-white text-navy-deep font-semibold text-sm shadow-sm whitespace-nowrap">Tất cả</Button>
          <Button className="px-4 py-1.5 rounded-lg text-on-surface-variant font-medium text-sm hover:text-navy-deep hover:bg-white/50 transition-colors whitespace-nowrap">Phụ huynh</Button>
          <Button className="px-4 py-1.5 rounded-lg text-on-surface-variant font-medium text-sm hover:text-navy-deep hover:bg-white/50 transition-colors whitespace-nowrap">Cựu học sinh</Button>
        </div>
        
        <div className="relative w-full md:w-64">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
           <Input 
             type="text" 
             placeholder="Tìm kiếm người đánh giá..." 
             className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-outline-variant focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none text-sm transition-all"
           />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant flex flex-col relative">
          <MessageSquareQuote className="absolute top-6 right-6 w-8 h-8 text-surface-container-high opacity-50" />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://i.pravatar.cc/150?u=a" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-navy-deep">Anh Nguyễn Phúc Anh</h4>
              <p className="text-xs text-text-muted">Phụ huynh em Nguyễn Phúc Khang (Lớp 12A1)</p>
            </div>
          </div>
          <div className="flex gap-1 mb-3">
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
          </div>
          <p className="text-sm text-on-surface-variant italic mb-6 flex-grow leading-relaxed">
            "Môi trường học tập rất tuyệt vời. Các thầy cô luôn quan tâm sát sao đến tình hình học tập và tâm lý của các con. Gia đình rất yên tâm khi gửi gắm cháu tại trường."
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-surface-variant mt-auto">
             <label className="relative inline-flex items-center cursor-pointer">
                <Input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success border-2 border-transparent"></div>
                <span className="ml-2 text-xs font-semibold text-success">Đang hiển thị</span>
             </label>
             <div className="flex gap-1">
                <Button onClick={() => handleOpenModal({ id: "1", name: "Anh Nguyễn Phúc Anh", role: "Phụ huynh em Nguyễn Phúc Khang (Lớp 12A1)", content: "Môi trường học tập rất tuyệt vời. Các thầy cô luôn quan tâm sát sao đến tình hình học tập và tâm lý của các con. Gia đình rất yên tâm khi gửi gắm cháu tại trường." })} className="p-1.5 hover:bg-surface-container text-navy-deep rounded transition-colors"><Edit className="w-4 h-4" /></Button>
                <Button className="p-1.5 hover:bg-error/10 text-error rounded transition-colors"><Trash2 className="w-4 h-4" /></Button>
             </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant flex flex-col relative">
          <MessageSquareQuote className="absolute top-6 right-6 w-8 h-8 text-surface-container-high opacity-50" />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://i.pravatar.cc/150?u=b" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-navy-deep">Chị Lê Hoàng Lan</h4>
              <p className="text-xs text-text-muted">Cựu học sinh (Niên khóa 2018-2021)</p>
            </div>
          </div>
          <div className="flex gap-1 mb-3">
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 text-outline-variant" />
          </div>
          <p className="text-sm text-on-surface-variant italic mb-6 flex-grow leading-relaxed">
            "Những năm tháng học cấp 3 tại trường là quãng thời gian đẹp nhất. Kiến thức và kỹ năng mềm mà nhà trường trang bị đã giúp em tự tin giật học bổng du học Mỹ."
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-surface-variant mt-auto">
             <label className="relative inline-flex items-center cursor-pointer">
                <Input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success border-2 border-transparent"></div>
                <span className="ml-2 text-xs font-semibold text-success">Đang hiển thị</span>
             </label>
             <div className="flex gap-1">
                <Button onClick={() => handleOpenModal({ id: "2", name: "Chị Lê Hoàng Lan", role: "Cựu học sinh (Niên khóa 2018-2021)", content: "Những năm tháng học cấp 3 tại trường là quãng thời gian đẹp nhất. Kiến thức và kỹ năng mềm mà nhà trường trang bị đã giúp em tự tin giật học bổng du học Mỹ." })} className="p-1.5 hover:bg-surface-container text-navy-deep rounded transition-colors"><Edit className="w-4 h-4" /></Button>
                <Button className="p-1.5 hover:bg-error/10 text-error rounded transition-colors"><Trash2 className="w-4 h-4" /></Button>
             </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-variant flex flex-col relative opacity-80">
          <MessageSquareQuote className="absolute top-6 right-6 w-8 h-8 text-surface-container-high opacity-50" />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container flex items-center justify-center text-on-surface-variant font-bold text-lg">
              T
            </div>
            <div>
              <h4 className="font-semibold text-sm text-navy-deep">Anh Trần Minh Tuấn</h4>
              <p className="text-xs text-text-muted">Phụ huynh em Trần Tuấn Kiệt</p>
            </div>
          </div>
          <div className="flex gap-1 mb-3">
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
             <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
          </div>
          <p className="text-sm text-on-surface-variant italic mb-6 flex-grow leading-relaxed">
            "Cơ sở vật chất khang trang, chất lượng bữa ăn bán trú rất tốt. Con tôi thay đổi tích cực và tự lập hơn chỉ sau 1 học kỳ."
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-surface-variant mt-auto">
             <label className="relative inline-flex items-center cursor-pointer">
                <Input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success border-2 border-transparent"></div>
                <span className="ml-2 text-xs font-semibold text-outline">Đã ẩn</span>
             </label>
             <div className="flex gap-1">
                <Button onClick={() => handleOpenModal({ id: "3", name: "Anh Trần Minh Tuấn", role: "Phụ huynh em Trần Tuấn Kiệt", content: "Cơ sở vật chất khang trang, chất lượng bữa ăn bán trú rất tốt. Con tôi thay đổi tích cực và tự lập hơn chỉ sau 1 học kỳ." })} className="p-1.5 hover:bg-surface-container text-navy-deep rounded transition-colors"><Edit className="w-4 h-4" /></Button>
                <Button className="p-1.5 hover:bg-error/10 text-error rounded transition-colors"><Trash2 className="w-4 h-4" /></Button>
             </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-surface-variant">
              <h3 className="font-display font-semibold text-xl text-navy-deep">
                {editingTestimonial ? "Cập nhật Cảm nhận" : "Thêm Cảm nhận mới"}
              </h3>
              <Button onClick={handleCloseModal} className="p-2 hover:bg-surface-container rounded-full text-text-muted transition-colors">
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Họ và tên</label>
                <Input 
                  type="text" 
                  defaultValue={editingTestimonial?.name || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
                  placeholder="Nhập họ tên người đánh giá..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Vai trò</label>
                <Input 
                  type="text" 
                  defaultValue={editingTestimonial?.role || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
                  placeholder="Ví dụ: Phụ huynh em..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Nội dung cảm nhận</label>
                <Textarea 
                  rows={4}
                  defaultValue={editingTestimonial?.content || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all resize-none"
                  placeholder="Nội dung đánh giá..."
                ></Textarea>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 p-6 border-t border-surface-variant bg-surface-container-lowest">
              <Button onClick={handleCloseModal} className="px-4 py-2 text-sm font-medium text-text-muted hover:text-navy-deep transition-colors">
                Hủy bỏ
              </Button>
              <Button onClick={handleCloseModal} className="px-4 py-2 bg-navy-deep text-white rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
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
