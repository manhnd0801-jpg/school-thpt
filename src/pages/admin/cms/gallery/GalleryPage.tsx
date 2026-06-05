import { 
  CloudUpload, 
  Search, 
  Trash2, 
  Eye, 
  Edit,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button, Input } from '@/components/ui';
export default function Gallery() {
  return (
    <div className="p-6 md:p-8 space-y-6 max-w-[1280px] mx-auto w-full">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-semibold text-2xl text-navy-deep">Quản lý Thư viện ảnh (Gallery)</h2>
          <p className="text-sm text-text-muted mt-1">Lưu trữ và phân loại các hình ảnh sự kiện, cơ sở vật chất.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
            <Input 
              type="text" 
              placeholder="Tìm kiếm ảnh, tag..." 
              className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-outline-variant focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none text-sm transition-all"
            />
          </div>
          <Button className="whitespace-nowrap bg-gold-accent hover:bg-yellow-400 text-navy-deep px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors shadow-sm">
            <CloudUpload className="w-4 h-4" />
            Tải ảnh lên
          </Button>
        </div>
      </header>

      {/* Filters & Bulk Actions */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex bg-surface-container-low p-1 rounded-xl overflow-x-auto max-w-full custom-scrollbar">
          <Button className="px-4 py-1.5 rounded-lg bg-white text-navy-deep font-semibold text-sm shadow-sm whitespace-nowrap">Tất cả</Button>
          <Button className="px-4 py-1.5 rounded-lg text-on-surface-variant font-medium text-sm hover:text-navy-deep hover:bg-white/50 transition-colors whitespace-nowrap">Phòng học</Button>
          <Button className="px-4 py-1.5 rounded-lg text-on-surface-variant font-medium text-sm hover:text-navy-deep hover:bg-white/50 transition-colors whitespace-nowrap">Thư viện</Button>
          <Button className="px-4 py-1.5 rounded-lg text-on-surface-variant font-medium text-sm hover:text-navy-deep hover:bg-white/50 transition-colors whitespace-nowrap">Sân thể thao</Button>
          <Button className="px-4 py-1.5 rounded-lg text-on-surface-variant font-medium text-sm hover:text-navy-deep hover:bg-white/50 transition-colors whitespace-nowrap">Hoạt động</Button>
          <Button className="px-4 py-1.5 rounded-lg text-on-surface-variant font-medium text-sm hover:text-navy-deep hover:bg-white/50 transition-colors whitespace-nowrap">Sự kiện</Button>
        </div>
        
        <div className="flex items-center gap-4 w-full lg:w-auto mt-2 lg:mt-0">
          <div className="text-sm text-outline px-4 border-r border-outline-variant">
            Đã chọn: <span className="font-bold text-navy-deep">0/124</span>
          </div>
          <Button className="text-on-surface-variant hover:text-error flex items-center gap-1.5 text-sm font-semibold opacity-50 cursor-not-allowed">
            <Trash2 className="w-4 h-4" />
            Xóa hàng loạt
          </Button>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Photo Card 1 */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-surface-variant transition-all flex flex-col">
          <div className="relative aspect-video overflow-hidden bg-surface-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1543843073-455b8098cc12?w=600&q=80" alt="Lớp học hiện đại" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <div className="flex gap-2 w-full">
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Eye className="w-4 h-4" /></Button>
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Edit className="w-4 h-4" /></Button>
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-error/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
            <Input type="checkbox" className="absolute top-3 left-3 w-4 h-4 rounded text-navy-deep focus:ring-navy-deep border-white/50 bg-white/20 backdrop-blur-md" />
            <span className="absolute top-3 right-3 bg-secondary-container text-navy-deep text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm">Phòng học</span>
          </div>
          <div className="p-4 flex-1">
            <h4 className="font-semibold text-sm text-navy-deep line-clamp-1 mb-2">Phòng học Stem Lab 01</h4>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-outline">24 Th10, 2024</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="text-[11px] text-on-surface-variant font-medium">Đang hiển thị</span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Card 2 */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-surface-variant transition-all flex flex-col">
          <div className="relative aspect-video overflow-hidden bg-surface-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80" alt="Thư viện" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <div className="flex gap-2 w-full">
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Eye className="w-4 h-4" /></Button>
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Edit className="w-4 h-4" /></Button>
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-error/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
            <Input type="checkbox" className="absolute top-3 left-3 w-4 h-4 rounded text-navy-deep focus:ring-navy-deep border-white/50 bg-white/20 backdrop-blur-md" />
            <span className="absolute top-3 right-3 bg-secondary-container text-navy-deep text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm">Thư viện</span>
          </div>
          <div className="p-4 flex-1">
            <h4 className="font-semibold text-sm text-navy-deep line-clamp-1 mb-2">Không gian tự học Tầng 2</h4>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-outline">22 Th10, 2024</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="text-[11px] text-on-surface-variant font-medium">Đang hiển thị</span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Card 3 - Hidden */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-surface-variant transition-all flex flex-col opacity-80">
          <div className="relative aspect-video overflow-hidden bg-surface-container">
            <div className="absolute inset-0 bg-navy-deep/30 z-10 pointer-events-none flex items-center justify-center">
              <Eye className="w-8 h-8 text-white/50" />
              {/* slash across eye usually implied for hidden, but using Eye is okay to signify visibility state */}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80" alt="Sân thể thao" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 grayscale-[50%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end p-3">
              <div className="flex gap-2 w-full">
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Eye className="w-4 h-4" /></Button>
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Edit className="w-4 h-4" /></Button>
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-error/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
            <Input type="checkbox" className="absolute top-3 left-3 w-4 h-4 rounded text-navy-deep focus:ring-navy-deep border-white/50 bg-white/20 backdrop-blur-md z-20" />
            <span className="absolute top-3 right-3 bg-outline-variant text-navy-deep text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm z-20">Sân thể thao</span>
          </div>
          <div className="p-4 flex-1 bg-surface-container-low/50">
            <h4 className="font-semibold text-sm text-navy-deep line-clamp-1 mb-2 text-outline">Sân bóng đá liên hợp</h4>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-outline">18 Th10, 2024</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-outline" />
                <span className="text-[11px] text-outline font-medium">Đã ẩn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Card 4 */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-surface-variant transition-all flex flex-col">
          <div className="relative aspect-video overflow-hidden bg-surface-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80" alt="Hoạt động" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <div className="flex gap-2 w-full">
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Eye className="w-4 h-4" /></Button>
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Edit className="w-4 h-4" /></Button>
                <Button className="flex-1 bg-white/20 backdrop-blur-md hover:bg-error/40 text-white p-1.5 rounded-lg transition-colors flex justify-center"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
            <Input type="checkbox" className="absolute top-3 left-3 w-4 h-4 rounded text-navy-deep focus:ring-navy-deep border-white/50 bg-white/20 backdrop-blur-md" />
            <span className="absolute top-3 right-3 bg-secondary-container text-navy-deep text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm">Sự kiện</span>
          </div>
          <div className="p-4 flex-1">
            <h4 className="font-semibold text-sm text-navy-deep line-clamp-1 mb-2">Giao lưu văn hóa mùa Hè</h4>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-outline">15 Th10, 2024</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="text-[11px] text-on-surface-variant font-medium">Đang hiển thị</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline-variant pt-6">
        <div className="text-sm text-on-surface-variant">
          Hiển thị <span className="font-bold text-navy-deep">1 - 8</span> của <span className="font-bold text-navy-deep">124</span> hình ảnh
        </div>
        <div className="flex items-center gap-1.5">
          <Button className="p-2 rounded-lg hover:bg-white text-outline hover:text-navy-deep transition-all">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button className="w-8 h-8 rounded-lg bg-navy-deep text-white font-semibold text-sm flex items-center justify-center">1</Button>
          <Button className="w-8 h-8 rounded-lg hover:bg-white text-navy-deep font-semibold text-sm flex items-center justify-center transition-colors">2</Button>
          <Button className="w-8 h-8 rounded-lg hover:bg-white text-navy-deep font-semibold text-sm flex items-center justify-center transition-colors">3</Button>
          <span className="px-1 text-outline">...</span>
          <Button className="w-8 h-8 rounded-lg hover:bg-white text-navy-deep font-semibold text-sm flex items-center justify-center transition-colors">16</Button>
          <Button className="p-2 rounded-lg hover:bg-white text-outline hover:text-navy-deep transition-all">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

