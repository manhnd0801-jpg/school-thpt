import { 
  Save, 
  Image as ImageIcon,
  Search,
  Settings,
  Tag,
  Calendar,
  Trash2,
  ChevronRight
} from "lucide-react";


import { Button, Input, Textarea } from '@/components/ui';
export default function CreatePost() {
  return (
    <div className="p-6 md:p-8 space-y-6 max-w-[1280px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <nav className="flex items-center gap-1 text-on-surface-variant mb-2 text-xs">
            <span>Hệ thống CMS</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Quản lý nội dung</span>
          </nav>
          <h1 className="font-display font-semibold text-3xl text-navy-deep">Tạo bài viết mới</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button className="px-6 py-2 rounded-xl border border-outline text-navy-deep font-semibold text-sm hover:bg-surface-container transition-all active:scale-95">
            Lưu nháp
          </Button>
          <Button className="px-6 py-2 rounded-xl bg-gold-accent text-navy-deep font-semibold text-sm shadow-sm hover:shadow transition-all active:scale-95">
            Xuất bản ngay
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Editor & Content */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-surface-variant p-6 space-y-4">
            <div>
              <label className="block font-semibold text-sm text-navy-deep mb-2">Tiêu đề bài viết</label>
              <Input 
                type="text" 
                placeholder="Nhập tiêu đề hấp dẫn..." 
                className="w-full font-display font-semibold text-2xl p-4 rounded-lg border-2 border-surface-variant focus:border-navy-deep outline-none transition-colors placeholder:text-outline-variant"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm text-navy-deep mb-2">Tóm tắt ngắn (Excerpt)</label>
              <Textarea 
                placeholder="Mô tả ngắn gọn nội dung bài viết..." 
                rows={3}
                className="w-full p-4 rounded-lg border border-surface-variant focus:border-navy-deep outline-none transition-colors resize-none text-sm"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm text-navy-deep mb-2">Nội dung bài viết</label>
              <div className="border border-surface-variant rounded-lg overflow-hidden flex flex-col">
                {/* Fake Toolbar */}
                <div className="bg-surface-container-low p-2 flex flex-wrap gap-2 border-b border-surface-variant text-on-surface-variant">
                   <Button className="p-1.5 hover:bg-surface-variant rounded transition-colors"><span className="material-symbols-outlined text-[20px]">format_bold</span></Button>
                   <Button className="p-1.5 hover:bg-surface-variant rounded transition-colors"><span className="material-symbols-outlined text-[20px]">format_italic</span></Button>
                   <Button className="p-1.5 hover:bg-surface-variant rounded transition-colors"><span className="material-symbols-outlined text-[20px]">format_underlined</span></Button>
                   <div className="w-[1px] h-6 bg-outline-variant mx-1 self-center" />
                   <Button className="p-1.5 hover:bg-surface-variant rounded transition-colors"><span className="material-symbols-outlined text-[20px]">format_list_bulleted</span></Button>
                   <Button className="p-1.5 hover:bg-surface-variant rounded transition-colors"><span className="material-symbols-outlined text-[20px]">format_list_numbered</span></Button>
                   <div className="w-[1px] h-6 bg-outline-variant mx-1 self-center" />
                   <Button className="p-1.5 hover:bg-surface-variant rounded transition-colors"><span className="material-symbols-outlined text-[20px]">link</span></Button>
                   <Button className="p-1.5 hover:bg-surface-variant rounded transition-colors"><span className="material-symbols-outlined text-[20px]">image</span></Button>
                   <Button className="p-1.5 hover:bg-surface-variant rounded transition-colors ml-auto"><span className="material-symbols-outlined text-[20px]">fullscreen</span></Button>
                </div>
                {/* Editor Area */}
                <div className="min-h-[400px] p-6 outline-none text-sm text-on-surface-variant bg-white">
                  Bắt đầu viết nội dung tại đây...
                </div>
              </div>
            </div>
          </div>

          {/* SEO Configuration */}
          <div className="bg-white rounded-xl shadow-sm border border-surface-variant p-6">
            <div className="flex items-center gap-2 mb-6">
              <Search className="w-5 h-5 text-navy-deep" />
              <h2 className="font-display font-semibold text-lg text-navy-deep">Cấu hình SEO</h2>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold text-sm text-navy-deep mb-2">SEO Title</label>
                  <Input type="text" placeholder="Tiêu đề hiển thị trên Google" className="w-full p-2.5 rounded-lg border border-surface-variant focus:border-navy-deep outline-none text-sm" />
                  <p className="text-xs text-outline-variant mt-1.5">Đề xuất: 50-60 ký tự</p>
                </div>
                <div>
                  <label className="block font-semibold text-sm text-navy-deep mb-2">Slug (URL)</label>
                  <div className="flex items-center border border-surface-variant rounded-lg overflow-hidden focus-within:border-navy-deep">
                    <span className="bg-surface-container-low px-3 py-2.5 text-xs text-on-surface-variant border-r border-surface-variant">/tin-tuc/</span>
                    <Input type="text" placeholder="tieu-de-bai-viet" className="flex-grow p-2.5 outline-none text-sm" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block font-semibold text-sm text-navy-deep mb-2">Meta Description</label>
                <Textarea rows={2} placeholder="Mô tả nội dung cho công cụ tìm kiếm..." className="w-full p-2.5 rounded-lg border border-surface-variant focus:border-navy-deep outline-none resize-none text-sm" />
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-4 mt-2">
                <h3 className="font-semibold text-xs text-navy-deep mb-2">Xem trước kết quả tìm kiếm</h3>
                <div className="space-y-1">
                  <p className="text-[#1a0dab] text-[18px] hover:underline cursor-pointer truncate">Tiêu đề bài viết hiển thị trên Google...</p>
                  <p className="text-[#006621] text-[13px] truncate">chuyen-ha-nam.edu.vn &gt; tin-tuc &gt; tieu-de-bai-viet</p>
                  <p className="text-[#545454] text-[13px] line-clamp-2 leading-snug">Mô tả nội dung cho công cụ tìm kiếm hiển thị ở đây để người dùng dễ dàng nắm bắt thông tin sơ bộ trước khi click...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Options */}
        <div className="lg:col-span-4 space-y-6">
          {/* Thumbnail Upload */}
          <div className="bg-white rounded-xl shadow-sm border border-surface-variant p-6">
             <label className="block font-semibold text-sm text-navy-deep mb-4">Ảnh đại diện (Thumbnail)</label>
             <div className="group cursor-pointer border-2 border-dashed border-outline-variant rounded-xl overflow-hidden hover:border-navy-deep transition-all aspect-video flex flex-col items-center justify-center bg-surface-container-low">
               <ImageIcon className="w-10 h-10 text-outline-variant mb-2 group-hover:scale-110 transition-transform" />
               <p className="font-semibold text-sm text-on-surface-variant">Click để tải ảnh lên</p>
               <p className="text-xs text-outline-variant mt-1">Kích thước khuyên dùng: 1200x630px</p>
             </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-sm border border-surface-variant p-6">
             <h3 className="font-semibold text-sm text-navy-deep mb-4">Chuyên mục</h3>
             <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <Input type="checkbox" className="rounded text-navy-deep focus:ring-navy-deep border-outline-variant w-4 h-4" />
                  <span className="text-sm text-on-surface group-hover:text-navy-deep transition-colors">Tin tức & Sự kiện</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <Input type="checkbox" defaultChecked className="rounded text-navy-deep focus:ring-navy-deep border-outline-variant w-4 h-4" />
                  <span className="text-sm font-semibold text-navy-deep">Thông báo từ nhà trường</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <Input type="checkbox" className="rounded text-navy-deep focus:ring-navy-deep border-outline-variant w-4 h-4" />
                  <span className="text-sm text-on-surface group-hover:text-navy-deep transition-colors">Góc học tập</span>
                </label>
             </div>
             <Button className="mt-4 flex items-center gap-1 text-info font-medium text-sm hover:underline">
               <span className="material-symbols-outlined text-[18px]">add</span>
               Thêm chuyên mục mới
             </Button>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-xl shadow-sm border border-surface-variant p-6">
             <h3 className="font-semibold text-sm text-navy-deep mb-4">Thẻ bài viết (Tags)</h3>
             <div className="space-y-3">
               <div className="flex flex-wrap gap-2">
                 <span className="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded-full text-xs text-on-surface font-medium">
                   #tuyen-sinh
                   <Button className="hover:text-error transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></Button>
                 </span>
                 <span className="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded-full text-xs text-on-surface font-medium">
                   #thpt-chuyen
                   <Button className="hover:text-error transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></Button>
                 </span>
               </div>
               <div className="relative">
                 <Input type="text" placeholder="Thêm tag..." className="w-full p-2 pl-3 pr-8 rounded-lg border border-surface-variant focus:border-navy-deep outline-none text-sm" />
                 <Tag className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant" />
               </div>
               <p className="text-xs text-outline-variant italic">Gợi ý: Nhấn Enter để thêm tag</p>
             </div>
          </div>

          {/* Status & Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-surface-variant p-6">
             <h3 className="font-semibold text-sm text-navy-deep mb-4">Trạng thái & Lịch đăng</h3>
             <div className="space-y-4">
               <div className="flex justify-between items-center text-sm">
                 <span className="text-on-surface-variant">Trạng thái:</span>
                 <span className="font-semibold text-warning bg-warning/10 px-2 py-1 rounded">Bản nháp</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                 <span className="text-on-surface-variant">Công khai:</span>
                 <span className="font-semibold text-navy-deep">Ngay bây giờ</span>
               </div>
               <div className="pt-3 border-t border-surface-variant">
                 <label className="flex items-center gap-2 cursor-pointer">
                  <Input type="checkbox" className="rounded text-navy-deep focus:ring-navy-deep border-outline-variant w-4 h-4" />
                  <span className="text-sm text-on-surface">Lên lịch đăng bài</span>
                </label>
               </div>
               <div className="pt-3">
                 <Button className="w-full flex items-center justify-center gap-2 py-2 text-error font-medium text-sm hover:bg-error/5 rounded-lg transition-colors">
                   <Trash2 className="w-4 h-4" />
                   Bỏ vào thùng rác
                 </Button>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

