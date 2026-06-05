import { Plus, Image as ImageIcon, Eye, Power, Trash2, Edit, X, Save, Upload } from "lucide-react";
import { useState } from "react";
import { Button, Input, Select, Table } from '@/components/ui';
export default function Banners() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<{ id?: string, title?: string, link?: string, location?: string } | null>(null);

  const handleOpenModal = (banner: any = null) => {
    setEditingBanner(banner);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingBanner(null);
  };

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-[1280px] mx-auto w-full relative">
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-2">
        <div>
          <nav className="flex items-center gap-1 text-on-surface-variant mb-2 text-xs">
             <span>Hệ thống CMS</span>
             <span>›</span>
             <span className="font-semibold text-navy-deep">Quản lý Banner quảng cáo</span>
          </nav>
          <h2 className="font-display font-semibold text-2xl text-navy-deep">Danh sách Banner</h2>
        </div>
        <Button onClick={() => handleOpenModal()} className="bg-navy-deep text-white px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
          <Plus className="w-4 h-4" />
          Tải Banner Mới
        </Button>
      </header>

      {/* Warning/Info Box */}
      <div className="bg-info/10 border border-info/20 text-info p-4 rounded-xl flex items-start gap-3">
        <span className="material-symbols-outlined shrink-0 mt-0.5">info</span>
        <div>
           <p className="font-bold text-sm">Hướng dẫn kích thước tiêu chuẩn</p>
           <p className="text-xs mt-1 opacity-90">Banner trang chủ (Hero Banner): 1920x800px. Banner sidebar: 600x600px. Dung lượng mỗi ảnh không quá 2MB để đảm bảo tốc độ tải trang.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-surface-variant overflow-hidden">
         <div className="overflow-x-auto">
           <Table className="w-full text-left">
              <thead className="bg-surface-container-low border-b border-surface-variant">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Hình ảnh (Review)</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Chi tiết hiển thị</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-center">Vị trí</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-center">Trạng thái</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant">
                <tr className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-6 py-4 w-64">
                    <div className="aspect-[21/9] bg-surface-container rounded overflow-hidden border border-surface-variant relative">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80" alt="banner" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <Eye className="w-5 h-5 text-white" />
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                     <p className="font-bold text-navy-deep text-sm mb-1">Banner Tuyển sinh Lớp 10 Khóa 2024</p>
                     <p className="text-xs text-text-muted mb-2 line-clamp-1">Link: https://chuyen-ha-nam.edu.vn/tuyen-sinh</p>
                     <span className="text-[10px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-mono">1920x800 • 1.2MB</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-primary-container/10 text-primary-container border border-primary-container/20 rounded-full text-[11px] font-bold uppercase">Trang Chủ (Slider)</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                     <label className="relative inline-flex items-center cursor-pointer">
                        <Input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success border-2 border-transparent"></div>
                     </label>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button onClick={() => handleOpenModal({ id: "1", title: "Banner Tuyển sinh Lớp 10 Khóa 2024", link: "https://chuyen-ha-nam.edu.vn/tuyen-sinh", location: "Trang Chủ (Slider)" })} className="p-2 text-outline hover:text-navy-deep hover:bg-surface-container rounded transition-colors"><Edit className="w-4 h-4" /></Button>
                      <Button className="p-2 text-outline hover:text-error hover:bg-error/10 rounded transition-colors"><Trash2 className="w-4 h-4" /></Button>
                    </div>
                  </td>
                </tr>

                 <tr className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-6 py-4 w-64">
                    <div className="aspect-[21/9] bg-surface-container rounded overflow-hidden border border-surface-variant relative">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80" alt="banner" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <Eye className="w-5 h-5 text-white" />
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                     <p className="font-bold text-navy-deep text-sm mb-1">Cơ sở vật chất - Thư viện mở</p>
                     <p className="text-xs text-text-muted mb-2 line-clamp-1">Link: Không có</p>
                     <span className="text-[10px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-mono">1920x800 • 850KB</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-primary-container/10 text-primary-container border border-primary-container/20 rounded-full text-[11px] font-bold uppercase">Trang Chủ (Slider)</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                     <label className="relative inline-flex items-center cursor-pointer">
                        <Input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success border-2 border-transparent"></div>
                     </label>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button onClick={() => handleOpenModal({ id: "2", title: "Cơ sở vật chất - Thư viện mở", link: "Không có", location: "Trang Chủ (Slider)" })} className="p-2 text-outline hover:text-navy-deep hover:bg-surface-container rounded transition-colors"><Edit className="w-4 h-4" /></Button>
                      <Button className="p-2 text-outline hover:text-error hover:bg-error/10 rounded transition-colors"><Trash2 className="w-4 h-4" /></Button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-lowest transition-colors group opacity-70">
                  <td className="px-6 py-4 w-64">
                    <div className="aspect-[1/1] max-w-[120px] bg-surface-container rounded overflow-hidden border border-surface-variant relative mx-auto">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img src="https://images.unsplash.com/photo-1543843073-455b8098cc12?w=300&q=60" alt="banner" className="w-full h-full object-cover grayscale" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                     <p className="font-bold text-navy-deep text-sm mb-1">Pop-up Đăng ký tham quan (Đã đóng)</p>
                     <p className="text-xs text-text-muted mb-2 line-clamp-1">Link: https://chuyen-ha-nam.edu.vn/tham-quan</p>
                     <span className="text-[10px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-mono">600x600 • 320KB</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-secondary-container/20 text-on-secondary-container border border-secondary-container/30 rounded-full text-[11px] font-bold uppercase">Sidebar Quảng Cáo</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                     <label className="relative inline-flex items-center cursor-pointer">
                        <Input type="checkbox" className="sr-only peer" />
                        <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success border-2 border-transparent"></div>
                     </label>
                  </td>
                  <td className="px-6 py-4 text-right">
                     <div className="flex items-center justify-end gap-1">
                      <Button onClick={() => handleOpenModal({ id: "3", title: "Pop-up Đăng ký tham quan (Đã đóng)", link: "https://chuyen-ha-nam.edu.vn/tham-quan", location: "Sidebar Quảng Cáo" })} className="p-2 text-outline hover:text-navy-deep hover:bg-surface-container rounded transition-colors"><Edit className="w-4 h-4" /></Button>
                      <Button className="p-2 text-outline hover:text-error hover:bg-error/10 rounded transition-colors"><Trash2 className="w-4 h-4" /></Button>
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
                {editingBanner ? "Cập nhật Banner" : "Thêm Banner mới"}
              </h3>
              <Button onClick={handleCloseModal} className="p-2 hover:bg-surface-container rounded-full text-text-muted transition-colors">
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Tên Banner</label>
                <Input 
                  type="text" 
                  defaultValue={editingBanner?.title || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
                  placeholder="Tiêu đề banner..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Upload Hình ảnh</label>
                <div className="mt-1 border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center bg-surface hover:bg-surface-container transition-colors cursor-pointer group">
                  <div className="p-3 bg-white rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6 text-navy-deep" />
                  </div>
                  <p className="text-sm font-semibold text-navy-deep">Kéo thả hoặc nhấn để chọn ảnh</p>
                  <p className="text-xs text-text-muted mt-1 text-center">PNG, JPG, WEBP lên đến 2MB<br/>Kích thước đề xuất: 1920x800</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Vị trí hiển thị</label>
                <Select 
                  defaultValue={editingBanner?.location || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
                >
                  <option value="">Chọn vị trí</option>
                  <option value="Trang Chủ (Slider)">Trang Chủ (Slider)</option>
                  <option value="Sidebar Quảng Cáo">Sidebar Quảng Cáo</option>
                  <option value="Pop-up Khuyến Mãi">Pop-up Khuyến Mãi</option>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy-deep mb-1">Đường dẫn mởi trỏ đến (Link)</label>
                <Input 
                  type="text" 
                  defaultValue={editingBanner?.link || ""}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
                  placeholder="https://..."
                />
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 p-6 border-t border-surface-variant bg-surface-container-lowest">
              <Button onClick={handleCloseModal} className="px-4 py-2 text-sm font-medium text-text-muted hover:text-navy-deep transition-colors">
                Hủy bỏ
              </Button>
              <Button onClick={handleCloseModal} className="px-4 py-2 bg-navy-deep text-white rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                <Save className="w-4 h-4" />
                Lưu Banner
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
