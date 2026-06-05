import { Plus, Search, Trash2, Edit, ChevronDown, Monitor, CheckCircle, Settings, X, Save } from "lucide-react";
import { useState } from "react";


import { Button, Input, Select, Table, Textarea } from '@/components/ui';
export default function Faq() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<{ id?: string, question?: string, answer?: string, category?: string } | null>(null);

  const handleOpenModal = (faq: any = null) => {
    setEditingFaq(faq);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingFaq(null);
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto flex flex-col h-full bg-surface relative">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
           <nav className="flex items-center gap-1 text-on-surface-variant mb-2 text-xs">
            <span>Bảng điều khiển</span>
            <span>›</span>
            <span className="font-semibold text-navy-deep">Câu hỏi thường gặp</span>
          </nav>
          <h2 className="font-display font-semibold text-3xl text-navy-deep">Quản lý FAQ</h2>
        </div>
        <Button onClick={() => handleOpenModal()} className="bg-navy-deep text-white px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-md active:scale-95 justify-center">
          <Plus className="w-4 h-4" />
          Thêm câu hỏi mới
        </Button>
      </header>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 shrink-0">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/30 flex flex-col">
          <span className="text-on-surface-variant font-semibold text-xs uppercase tracking-wider mb-2">Tổng số câu hỏi</span>
          <div className="flex items-end justify-between mt-auto">
            <span className="font-display text-4xl text-navy-deep font-bold leading-none">128</span>
            <div className="px-2 py-0.5 bg-success/10 text-success rounded text-[11px] font-bold">+12%</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/30 flex flex-col">
          <span className="text-on-surface-variant font-semibold text-xs uppercase tracking-wider mb-2">Số danh mục</span>
          <div className="flex items-end justify-between mt-auto">
            <span className="font-display text-4xl text-navy-deep font-bold leading-none">8</span>
            <div className="px-2 py-0.5 bg-navy-deep/5 text-navy-deep rounded text-[11px] font-bold">Cố định</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/30 flex flex-col">
          <span className="text-on-surface-variant font-semibold text-xs uppercase tracking-wider mb-2">Lượt xem trung bình</span>
          <div className="flex items-end justify-between mt-auto">
            <span className="font-display text-4xl text-navy-deep font-bold leading-none">2.4k</span>
            <div className="px-2 py-0.5 bg-warning/10 text-warning rounded text-[11px] font-bold">Hot</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/30 flex flex-col">
          <span className="text-on-surface-variant font-semibold text-xs uppercase tracking-wider mb-2">Cần cập nhật</span>
          <div className="flex items-end justify-between mt-auto">
            <span className="font-display text-4xl text-error font-bold leading-none">3</span>
            <div className="px-2 py-0.5 bg-error/10 text-error rounded text-[11px] font-bold">Gấp</div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl shadow-sm border border-surface-variant flex flex-col flex-1 overflow-hidden min-h-[500px]">
        {/* Tabs & Search */}
        <div className="border-b border-surface-variant flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 pt-4 pb-0 bg-surface-container-low/30">
          <div className="flex gap-8">
            <Button className="pb-4 border-b-2 border-navy-deep text-navy-deep font-bold text-sm transition-all -mb-px">Danh sách câu hỏi</Button>
            <Button className="pb-4 border-b-2 border-transparent text-on-surface-variant hover:text-navy-deep font-semibold text-sm transition-all -mb-px">Quản lý danh mục</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 pb-4 w-full sm:w-auto">
            <div className="relative flex-grow sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
              <Input type="text" placeholder="Tìm kiếm câu hỏi..." className="w-full pl-9 pr-4 py-2 bg-surface border border-outline-variant rounded-lg focus:ring-1 focus:ring-navy-deep outline-none text-sm transition-all" />
            </div>
            <Select className="bg-surface border border-outline-variant rounded-lg py-2 pl-3 pr-8 text-sm focus:ring-1 focus:ring-navy-deep outline-none hover:bg-surface-container transition-colors cursor-pointer text-text-main">
              <option>Tất cả danh mục</option>
              <option>Tuyển sinh</option>
              <option>Học phí</option>
            </Select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto flex-1">
          <Table className="w-full text-left border-collapse">
            <thead>
               <tr className="bg-surface-container-lowest text-text-muted text-[11px] uppercase tracking-wider font-semibold border-b border-surface-variant">
                  <th className="px-6 py-4 w-20">Thứ tự</th>
                  <th className="px-6 py-4">Câu hỏi & Nội dung</th>
                  <th className="px-6 py-4 w-40">Danh mục</th>
                  <th className="px-6 py-4 w-32 text-center">Trạng thái</th>
                  <th className="px-6 py-4 w-24 text-right">Thao tác</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-surface-variant overflow-y-auto">
               <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="px-6 py-4 align-top">
                     <span className="inline-block bg-surface-container px-2 py-1 rounded text-xs font-bold text-navy-deep mt-1">01</span>
                  </td>
                  <td className="px-6 py-4">
                     <div className="font-semibold text-navy-deep mb-1 text-base">Hồ sơ tuyển sinh lớp 10 cần những giấy tờ gì?</div>
                     <div className="text-sm text-on-surface-variant line-clamp-2">Hồ sơ bao gồm: Đơn đăng ký theo mẫu của trường, Học bạ THCS bản sao công chứng, Giấy khai sinh bản sao, 4 ảnh 3x4...</div>
                  </td>
                  <td className="px-6 py-4 align-top pt-5">
                     <span className="px-2.5 py-1 bg-primary-container/10 text-primary-container rounded-full text-[11px] font-bold">Tuyển sinh</span>
                  </td>
                  <td className="px-6 py-4 align-top pt-5 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <Input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success border-2 border-transparent"></div>
                      <span className="ml-2 text-xs font-bold text-success">Hiện</span>
                    </label>
                  </td>
                  <td className="px-6 py-4 align-top pt-4 text-right">
                     <div className="flex items-center justify-end gap-1">
                        <Button onClick={() => handleOpenModal({ id: "1", question: "Hồ sơ tuyển sinh lớp 10 cần những giấy tờ gì?", answer: "Hồ sơ bao gồm: Đơn đăng ký theo mẫu của trường, Học bạ THCS bản sao công chứng, Giấy khai sinh bản sao, 4 ảnh 3x4...", category: "Tuyển sinh" })} className="p-1.5 hover:bg-surface-container text-navy-deep rounded transition-colors"><Edit className="w-4 h-4" /></Button>
                        <Button className="p-1.5 hover:bg-error-container hover:text-error text-outline-variant rounded transition-colors"><Trash2 className="w-4 h-4" /></Button>
                     </div>
                  </td>
               </tr>

                <tr className="hover:bg-surface-container-lowest transition-colors">
                  <td className="px-6 py-4 align-top">
                     <span className="inline-block bg-surface-container px-2 py-1 rounded text-xs font-bold text-navy-deep mt-1">02</span>
                  </td>
                  <td className="px-6 py-4">
                     <div className="font-semibold text-navy-deep mb-1 text-base">Mức học phí năm học 2024 - 2025?</div>
                     <div className="text-sm text-on-surface-variant line-clamp-2">Học phí cho khối THCS là 15,000,000đ/tháng và khối THPT là 18,000,000đ/tháng, đã bao gồm các chương trình ngoại khóa tiêu chuẩn.</div>
                  </td>
                  <td className="px-6 py-4 align-top pt-5">
                     <span className="px-2.5 py-1 bg-secondary-container/20 text-on-secondary-container rounded-full text-[11px] font-bold">Học phí</span>
                  </td>
                  <td className="px-6 py-4 align-top pt-5 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <Input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success border-2 border-transparent"></div>
                      <span className="ml-2 text-xs font-bold text-success">Hiện</span>
                    </label>
                  </td>
                  <td className="px-6 py-4 align-top pt-4 text-right">
                     <div className="flex items-center justify-end gap-1">
                        <Button onClick={() => handleOpenModal({ id: "2", question: "Mức học phí năm học 2024 - 2025?", answer: "Học phí cho khối THCS là 15,000,000đ/tháng và khối THPT là 18,000,000đ/tháng, đã bao gồm các chương trình ngoại khóa tiêu chuẩn.", category: "Học phí" })} className="p-1.5 hover:bg-surface-container text-navy-deep rounded transition-colors"><Edit className="w-4 h-4" /></Button>
                        <Button className="p-1.5 hover:bg-error-container hover:text-error text-outline-variant rounded transition-colors"><Trash2 className="w-4 h-4" /></Button>
                     </div>
                  </td>
               </tr>

                <tr className="hover:bg-surface-container-lowest transition-colors bg-surface-container-low/30">
                  <td className="px-6 py-4 align-top">
                     <span className="inline-block bg-surface-container px-2 py-1 rounded text-xs font-bold text-navy-deep mt-1">03</span>
                  </td>
                  <td className="px-6 py-4 opacity-70">
                     <div className="font-semibold text-navy-deep mb-1 text-base italic">Trường có xe đưa đón học sinh không?</div>
                     <div className="text-sm text-on-surface-variant line-clamp-2">Hiện tại trường cung cấp dịch vụ xe đưa đón tại 12 tuyến đường chính trong nội thành với chi phí hỗ trợ một phần...</div>
                  </td>
                  <td className="px-6 py-4 align-top pt-5 opacity-70">
                     <span className="px-2.5 py-1 bg-surface-variant text-on-surface-variant rounded-full text-[11px] font-bold">Cơ sở vật chất</span>
                  </td>
                  <td className="px-6 py-4 align-top pt-5 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <Input type="checkbox" className="sr-only peer" />
                      <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success border-2 border-transparent"></div>
                      <span className="ml-2 text-xs font-bold text-outline">Ẩn</span>
                    </label>
                  </td>
                  <td className="px-6 py-4 align-top pt-4 text-right">
                     <div className="flex items-center justify-end gap-1">
                        <Button onClick={() => handleOpenModal({ id: "3", question: "Trường có xe đưa đón học sinh không?", answer: "Hiện tại trường cung cấp dịch vụ xe đưa đón tại 12 tuyến đường chính trong nội thành với chi phí hỗ trợ một phần...", category: "Cơ sở vật chất" })} className="p-1.5 hover:bg-surface-container text-navy-deep rounded transition-colors"><Edit className="w-4 h-4" /></Button>
                        <Button className="p-1.5 hover:bg-error-container hover:text-error text-outline-variant rounded transition-colors"><Trash2 className="w-4 h-4" /></Button>
                     </div>
                  </td>
               </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-surface-variant">
              <h3 className="font-display font-semibold text-xl text-navy-deep">
                {editingFaq ? "Cập nhật FAQ" : "Thêm FAQ mới"}
              </h3>
              <Button onClick={handleCloseModal} className="p-2 hover:bg-surface-container rounded-full text-text-muted transition-colors">
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Câu hỏi</label>
                <Input 
                  type="text" 
                  defaultValue={editingFaq?.question || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
                  placeholder="Nhập nội dung câu hỏi..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Danh mục</label>
                <Select 
                  defaultValue={editingFaq?.category || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
                >
                  <option value="">Chọn danh mục</option>
                  <option value="Tuyển sinh">Tuyển sinh</option>
                  <option value="Học phí">Học phí</option>
                  <option value="Cơ sở vật chất">Cơ sở vật chất</option>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Câu trả lời</label>
                <Textarea 
                  rows={4}
                  defaultValue={editingFaq?.answer || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all resize-none"
                  placeholder="Nội dung câu trả lời chi tiết..."
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
