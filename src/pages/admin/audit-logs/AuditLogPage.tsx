import { Search, Calendar, Filter } from "lucide-react";
import { Button, Input, Select, Table } from '@/components/ui';
export default function ActivityLog() {
  return (
    <div className="p-6 md:p-8 flex flex-col h-[calc(100vh-4rem)] max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8 shrink-0">
        <h2 className="font-display font-semibold text-3xl text-navy-deep mb-2">Nhật ký hoạt động</h2>
        <p className="text-on-surface-variant text-sm max-w-2xl">
          Theo dõi và giám sát các thao tác của người dùng trên hệ thống nhằm đảm bảo tính bảo mật và minh bạch của dữ liệu.
        </p>
      </div>

      {/* Filters Bento Grid */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant mb-6 shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2">
            <label className="block text-xs font-bold text-outline uppercase mb-1.5 tracking-wider">Tìm kiếm</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
              <Input 
                type="text" 
                placeholder="Nội dung thao tác, IP..." 
                className="w-full pl-9 pr-4 py-2 bg-surface text-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-navy-deep focus:border-navy-deep transition-all outline-none" 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-bold text-outline uppercase mb-1.5 tracking-wider">Người thực hiện</label>
            <Select className="w-full px-3 py-2 bg-surface text-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-navy-deep outline-none cursor-pointer">
              <option>Tất cả nhân viên</option>
              <option>Nguyễn Văn A</option>
              <option>Lê Thị B</option>
            </Select>
          </div>
          
          <div>
            <label className="block text-xs font-bold text-outline uppercase mb-1.5 tracking-wider">Hành động</label>
            <Select className="w-full px-3 py-2 bg-surface text-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-navy-deep outline-none cursor-pointer">
              <option>Tất cả hành động</option>
              <option>Thêm mới</option>
              <option>Chỉnh sửa</option>
              <option>Xóa</option>
            </Select>
          </div>
          
          <div>
            <label className="block text-xs font-bold text-outline uppercase mb-1.5 tracking-wider">Thời gian</label>
            <div className="relative">
              <Input 
                type="date" 
                className="w-full px-3 py-2 bg-surface text-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-navy-deep outline-none" 
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-outline uppercase tracking-wider mr-2">Mô-đun:</span>
          <Button className="px-4 py-1.5 bg-navy-deep text-white rounded-full text-xs font-semibold shadow-sm transition-colors">Tất cả</Button>
          <Button className="px-4 py-1.5 bg-surface-container text-on-surface-variant hover:bg-surface-variant rounded-full text-xs font-medium transition-colors border border-transparent">Tiềm năng</Button>
          <Button className="px-4 py-1.5 bg-surface-container text-on-surface-variant hover:bg-surface-variant rounded-full text-xs font-medium transition-colors border border-transparent">Tin tức</Button>
          <Button className="px-4 py-1.5 bg-surface-container text-on-surface-variant hover:bg-surface-variant rounded-full text-xs font-medium transition-colors border border-transparent">Giảng viên</Button>
          <Button className="px-4 py-1.5 bg-surface-container text-on-surface-variant hover:bg-surface-variant rounded-full text-xs font-medium transition-colors border border-transparent">Cấu hình</Button>
        </div>
      </section>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-surface-variant flex flex-col flex-1 overflow-hidden min-h-[400px]">
        <div className="overflow-x-auto flex-1">
          <Table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-surface-variant sticky top-0 z-10">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-navy-deep uppercase tracking-wider">Thời gian</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-deep uppercase tracking-wider">Người thực hiện</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-deep uppercase tracking-wider text-center">Hành động</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-deep uppercase tracking-wider">Mô-đun</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-deep uppercase tracking-wider">Nội dung chi tiết</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-deep uppercase tracking-wider">IP / Thiết bị</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-variant text-sm">
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4">
                  <p className="font-semibold text-navy-deep">24/10/2026</p>
                  <p className="text-xs text-text-muted mt-0.5">10:24:55</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed text-xs font-bold">NH</div>
                    <div>
                      <p className="font-semibold text-text-main">Nguyễn Huy</p>
                      <p className="text-[10px] text-text-muted">huy.n@vietacademy.edu.vn</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-block px-3 py-1 bg-warning/10 text-warning rounded-full text-[10px] font-bold uppercase tracking-wider border border-warning/20">Chỉnh sửa</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-xs text-text-main bg-surface-container px-2 py-1 rounded">Quản lý tiềm năng</span>
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <p className="text-on-surface-variant leading-snug">Cập nhật trạng thái Lead <code className="bg-surface font-mono text-navy-deep text-xs px-1 py-0.5 rounded font-bold">LD-2026-0001</code> sang "Đã nhập học"</p>
                </td>
                <td className="px-6 py-4">
                  <div className="font-mono text-xs text-text-muted">
                    <p>192.168.1.45</p>
                    <p className="mt-0.5">Chrome / MacOS</p>
                  </div>
                </td>
              </tr>
              
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4">
                  <p className="font-semibold text-navy-deep">24/10/2026</p>
                  <p className="text-xs text-text-muted mt-0.5">09:15:20</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed text-xs font-bold">TL</div>
                    <div>
                      <p className="font-semibold text-text-main">Trần Lan</p>
                      <p className="text-[10px] text-text-muted">lan.t@vietacademy.edu.vn</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-block px-3 py-1 bg-success/10 text-success rounded-full text-[10px] font-bold uppercase tracking-wider border border-success/20">Thêm mới</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-xs text-text-main bg-surface-container px-2 py-1 rounded">Tin tức</span>
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <p className="text-on-surface-variant leading-snug">Đăng bài viết mới: "Thông báo lịch nghỉ lễ Quốc khánh 2/9"</p>
                </td>
                <td className="px-6 py-4">
                  <div className="font-mono text-xs text-text-muted">
                    <p>113.161.44.12</p>
                    <p className="mt-0.5">Safari / iOS</p>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4">
                  <p className="font-semibold text-navy-deep">24/10/2026</p>
                  <p className="text-xs text-text-muted mt-0.5">08:30:12</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-on-error-container text-xs font-bold">HT</div>
                    <div>
                      <p className="font-semibold text-text-main">Quản trị hệ thống</p>
                      <p className="text-[10px] text-text-muted">sysadmin@vietacademy.edu.vn</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-block px-3 py-1 bg-error/10 text-error rounded-full text-[10px] font-bold uppercase tracking-wider border border-error/20">Xóa</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-xs text-text-main bg-surface-container px-2 py-1 rounded">Cấu hình</span>
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <p className="text-on-surface-variant leading-snug">Xóa quyền truy cập của nhân viên <code className="bg-surface font-mono font-bold text-xs px-1 py-0.5 rounded">USR-992</code></p>
                </td>
                <td className="px-6 py-4">
                  <div className="font-mono text-xs text-text-muted">
                    <p>14.232.160.8</p>
                    <p className="mt-0.5">Edge / Windows</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-surface-variant bg-surface-container-low text-xs text-text-muted flex justify-between items-center">
           <span>Hiển thị 1 - 10 trong số 1,240 bản ghi</span>
           <div className="flex gap-1">
             <Button className="px-3 py-1 bg-white border border-outline-variant rounded">1</Button>
             <Button className="px-3 py-1 bg-transparent hover:bg-white rounded">2</Button>
             <Button className="px-3 py-1 bg-transparent hover:bg-white rounded">3</Button>
             <span className="px-2">...</span>
           </div>
        </div>
      </div>
    </div>
  );
}

