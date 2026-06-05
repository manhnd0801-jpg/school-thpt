import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Image as ImageIcon
} from "lucide-react";
import { Link } from "react-router-dom";


import { Button, Input, Select } from '@/components/ui';
export default function NewsList() {
  return (
    <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <nav className="flex items-center gap-1 text-on-surface-variant mb-2">
            <span className="font-medium text-xs">Hệ thống</span>
            <span className="text-xs mx-1">›</span>
            <span className="font-medium text-xs">Nội dung</span>
            <span className="text-xs mx-1">›</span>
            <span className="font-semibold text-xs text-navy-deep">Quản lý tin tức</span>
          </nav>
          <h2 className="font-display font-semibold text-2xl text-navy-deep">Quản lý tin tức</h2>
        </div>
        <Link to="/news/create" className="flex items-center gap-2 px-6 py-2.5 bg-navy-deep text-white rounded-xl font-semibold text-sm hover:opacity-90 shadow-sm transition-all sm:w-auto w-full justify-center active:scale-95">
          <Plus className="w-4 h-4" />
          Viết bài mới
        </Link>
      </div>

      {/* Filters & Actions */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-variant flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap items-center gap-2 border border-outline-variant p-1 rounded-lg w-full md:w-auto">
          <Button className="flex-1 md:flex-none px-4 py-1.5 text-sm font-semibold bg-surface-container-low rounded text-navy-deep">Tất cả</Button>
          <Button className="flex-1 md:flex-none px-4 py-1.5 text-sm font-medium text-text-muted hover:text-navy-deep rounded transition-colors">Đã xuất bản</Button>
          <Button className="flex-1 md:flex-none px-4 py-1.5 text-sm font-medium text-text-muted hover:text-navy-deep rounded transition-colors">Bản nháp</Button>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <Select className="px-3 py-2 border border-outline-variant rounded-lg text-sm bg-white focus:border-navy-deep outline-none text-text-main">
             <option>Tất cả danh mục</option>
             <option>Sự kiện</option>
             <option>Thông báo</option>
             <option>Tuyển sinh</option>
          </Select>
          <div className="relative flex-grow md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <Input 
              type="text" 
              placeholder="Tìm kiếm bài viết..." 
              className="w-full pl-9 pr-4 py-2 border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Data Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Article Card 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-surface-variant overflow-hidden group hover:shadow-md transition-shadow flex flex-col">
          <div className="relative h-48 bg-surface-container overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <Link to="/news/post-1">
               <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" alt="News thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
             </Link>
             <div className="absolute top-3 right-3 flex gap-2">
                <span className="bg-success text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-sm">Đã xuất bản</span>
             </div>
             <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button className="p-1.5 bg-white/90 backdrop-blur text-navy-deep rounded hover:bg-white transition-colors" title="Chỉnh sửa"><Edit className="w-4 h-4" /></Button>
                <Button className="p-1.5 bg-white/90 backdrop-blur text-error rounded hover:bg-error hover:text-white transition-colors" title="Xóa"><Trash2 className="w-4 h-4" /></Button>
             </div>
          </div>
          <div className="p-5 flex-grow flex flex-col">
            <div className="flex items-center gap-2 text-[11px] text-text-muted font-semibold uppercase tracking-wider mb-2 border-l-2 border-gold-accent pl-2">
              <span>Sự kiện</span>
            </div>
            <Link to="/news/post-1">
              <h3 className="font-display font-semibold text-lg text-navy-deep mb-2 line-clamp-2 leading-tight group-hover:text-gold-accent transition-colors">
                Lễ khai giảng năm học 2024-2025: Hành trình mới, khát vọng mới
              </h3>
            </Link>
            <p className="text-sm text-text-muted line-clamp-2 mb-4 flex-grow">
              Sáng nay, học sinh toàn trường đã cùng nhau tham dự lễ khai giảng chào đón năm học mới với nhiều hoạt động sôi nổi và ý nghĩa.
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-variant text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                 <Calendar className="w-3.5 h-3.5" />
                 <span>24/10/2023</span>
              </div>
              <div className="flex items-center gap-1.5">
                 <Eye className="w-3.5 h-3.5" />
                 <span>1.2k lượt xem</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Card 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-surface-variant overflow-hidden group hover:shadow-md transition-shadow flex flex-col">
          <div className="relative h-48 bg-surface-container overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <Link to="/news/post-2">
               <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80" alt="News thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
             </Link>
             <div className="absolute top-3 right-3 flex gap-2">
                <span className="bg-success text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-sm">Đã xuất bản</span>
             </div>
             <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button className="p-1.5 bg-white/90 backdrop-blur text-navy-deep rounded hover:bg-white transition-colors" title="Chỉnh sửa"><Edit className="w-4 h-4" /></Button>
                <Button className="p-1.5 bg-white/90 backdrop-blur text-error rounded hover:bg-error hover:text-white transition-colors" title="Xóa"><Trash2 className="w-4 h-4" /></Button>
             </div>
          </div>
          <div className="p-5 flex-grow flex flex-col">
            <div className="flex items-center gap-2 text-[11px] text-text-muted font-semibold uppercase tracking-wider mb-2 border-l-2 border-info pl-2">
              <span>Thông báo</span>
            </div>
            <Link to="/news/post-2">
              <h3 className="font-display font-semibold text-lg text-navy-deep mb-2 line-clamp-2 leading-tight group-hover:text-info transition-colors">
                Chính sách tuyển sinh và học bổng đợt 2 năm học 2024
              </h3>
            </Link>
            <p className="text-sm text-text-muted line-clamp-2 mb-4 flex-grow">
              Nhà trường chính thức công bố các chính sách ưu đãi học bổng dành cho những học sinh có thành tích xuất sắc khi đăng ký nhập học đợt 2.
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-variant text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                 <Calendar className="w-3.5 h-3.5" />
                 <span>20/10/2023</span>
              </div>
              <div className="flex items-center gap-1.5">
                 <Eye className="w-3.5 h-3.5" />
                 <span>856 lượt xem</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Card 3 */}
        <div className="bg-white rounded-xl shadow-sm border border-surface-variant overflow-hidden group hover:shadow-md transition-shadow flex flex-col">
          <div className="relative h-48 bg-surface-container overflow-hidden flex items-center justify-center border-b border-surface-variant">
             <ImageIcon className="w-12 h-12 text-outline-variant" />
             <div className="absolute top-3 right-3 flex gap-2">
                <span className="bg-surface-variant text-text-muted text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-sm">Bản nháp</span>
             </div>
             <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button className="p-1.5 bg-white/90 backdrop-blur text-navy-deep rounded hover:bg-white transition-colors" title="Chỉnh sửa"><Edit className="w-4 h-4" /></Button>
                <Button className="p-1.5 bg-white/90 backdrop-blur text-error rounded hover:bg-error hover:text-white transition-colors" title="Xóa"><Trash2 className="w-4 h-4" /></Button>
             </div>
          </div>
          <div className="p-5 flex-grow flex flex-col">
            <div className="flex items-center gap-2 text-[11px] text-text-muted font-semibold uppercase tracking-wider mb-2 border-l-2 border-error pl-2">
              <span>Tuyển sinh</span>
            </div>
            <h3 className="font-display font-semibold text-lg text-navy-deep mb-2 line-clamp-2 leading-tight group-hover:text-error transition-colors">
              Ngày hội Thông tin: Khám phá môi trường học tập Quốc tế
            </h3>
            <p className="text-sm text-text-muted line-clamp-2 mb-4 flex-grow">
              Đăng ký ngay để tham gia trải nghiệm lớp học mẫu và tham quan cơ sở vật chất chuẩn quốc tế của trường vào cuối tuần này.
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-variant text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                 <Calendar className="w-3.5 h-3.5" />
                 <span>Cập nhật 2 giờ trước</span>
              </div>
              <div className="flex items-center gap-1.5">
                 <span className="text-orange-500 font-semibold">• Đang soạn thảo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Load More */}
      <div className="flex justify-center mt-8">
        <Button className="px-6 py-2.5 bg-surface-container-low text-navy-deep font-semibold text-sm rounded-xl hover:bg-surface-container transition-colors border border-outline-variant">
          Tải thêm bài viết
        </Button>
      </div>
    </div>
  );
}
