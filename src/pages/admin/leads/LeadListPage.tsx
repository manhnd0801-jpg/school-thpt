import { 
  Search, 
  Plus, 
  Filter, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  Phone,
  Mail,
  Download,
  Calendar,
  Eye,
  Edit
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Input, Table } from '@/components/ui';
export default function LeadList() {
  return (
    <div className="p-6 md:p-8 space-y-6 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-semibold text-2xl text-navy-deep">Quản lý Danh sách Lead</h2>
          <p className="text-sm text-text-muted mt-1">Tổng cộng 1,284 leads đang được quản lý trong hệ thống.</p>
        </div>
        <div className="flex gap-3">
          <Button className="flex items-center gap-2 px-4 py-2 border border-outline rounded-xl font-semibold text-sm text-navy-deep hover:bg-surface-container transition-colors">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Xuất dữ liệu</span>
          </Button>
          <Link to="/leads/create" className="flex items-center gap-2 px-4 py-2 bg-navy-deep text-white rounded-xl font-semibold text-sm hover:opacity-90 shadow-sm transition-opacity">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Thêm Lead mới</span>
          </Link>
        </div>
      </div>

      {/* Filters & Actions */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-variant flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
           {/* Tab Filters */}
          <div className="flex bg-surface-container-low p-1 rounded-lg">
            <Button className="px-4 py-1.5 text-sm font-semibold bg-white rounded shadow-sm">Tất cả</Button>
            <Button className="px-4 py-1.5 text-sm font-medium text-text-muted hover:text-navy-deep hover:bg-white/50 rounded transition-colors">Mới</Button>
            <Button className="px-4 py-1.5 text-sm font-medium text-text-muted hover:text-navy-deep hover:bg-white/50 rounded transition-colors">Đang liên hệ</Button>
            <Button className="px-4 py-1.5 text-sm font-medium text-text-muted hover:text-navy-deep hover:bg-white/50 rounded transition-colors">Đã chốt</Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <Input 
              type="text" 
              placeholder="Tìm kiếm họ tên, sđt..." 
              className="w-full pl-9 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none transition-all"
            />
          </div>
          <Button className="flex items-center gap-2 px-3 py-2 border border-outline-variant rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container transition-colors">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Bộ lọc</span>
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-surface-variant overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <Table className="w-full text-left">
            <thead className="bg-surface-container-low text-text-muted text-[11px] uppercase tracking-wider font-semibold border-b border-surface-variant">
              <tr>
                <th className="px-6 py-4 w-12">
                  <Input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-navy-deep focus:ring-navy-deep" />
                </th>
                <th className="px-6 py-4">Học Sinh</th>
                <th className="px-6 py-4">Phụ Huynh</th>
                <th className="px-6 py-4">Khối Lớp</th>
                <th className="px-6 py-4">Nguồn</th>
                <th className="px-6 py-4">Ngày tạo</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-variant text-sm text-text-main">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <Input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-navy-deep focus:ring-navy-deep" />
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-navy-deep">Phạm Minh Đức</p>
                  <p className="text-xs text-text-muted mt-0.5">Nam • 2009</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Phạm Văn A</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-text-muted">
                    <span className="flex items-center gap-1 hover:text-navy-deep"><Phone className="w-3 h-3"/> 0901234567</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-navy-deep">Lớp 10</td>
                <td className="px-6 py-4">Facebook Ads</td>
                <td className="px-6 py-4">
                  <p>24/10/2023</p>
                  <p className="text-xs text-text-muted">09:45</p>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-info/10 text-info border border-info/20 text-[11px] px-2.5 py-1 rounded-full font-bold uppercase tracking-tight whitespace-nowrap">Lead Mới</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link to="/leads/LD-2024-001" className="p-2 text-text-muted hover:text-navy-deep hover:bg-surface-container rounded-full transition-all" title="Chi tiết">
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Link to="/leads/LD-2024-001/edit" className="p-2 text-text-muted hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all" title="Sửa">
                      <Edit className="w-4 h-4" />
                    </Link>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <Input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-navy-deep focus:ring-navy-deep" />
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-navy-deep">Vũ Thu Phương</p>
                  <p className="text-xs text-text-muted mt-0.5">Nữ • 2008</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Vũ Tiến B</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-text-muted">
                    <span className="flex items-center gap-1 hover:text-navy-deep"><Phone className="w-3 h-3"/> 0919876543</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-navy-deep">Lớp 11</td>
                <td className="px-6 py-4">Website</td>
                <td className="px-6 py-4">
                  <p>23/10/2023</p>
                  <p className="text-xs text-text-muted">14:20</p>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-warning/10 text-warning border border-warning/20 text-[11px] px-2.5 py-1 rounded-full font-bold uppercase tracking-tight whitespace-nowrap">Đang liên hệ</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link to="/leads/LD-2024-002" className="p-2 text-text-muted hover:text-navy-deep hover:bg-surface-container rounded-full transition-all" title="Chi tiết">
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Link to="/leads/LD-2024-002/edit" className="p-2 text-text-muted hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all" title="Sửa">
                      <Edit className="w-4 h-4" />
                    </Link>
                  </div>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <Input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-navy-deep focus:ring-navy-deep" />
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-navy-deep">Đỗ Thanh Tâm</p>
                  <p className="text-xs text-text-muted mt-0.5">Nữ • 2007</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Đỗ Văn C</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-text-muted">
                    <span className="flex items-center gap-1 hover:text-navy-deep"><Phone className="w-3 h-3"/> 0923456789</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-navy-deep">Lớp 12</td>
                <td className="px-6 py-4">Sự kiện trường</td>
                <td className="px-6 py-4">
                  <p>20/10/2023</p>
                  <p className="text-xs text-text-muted">08:15</p>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-success/10 text-success border border-success/20 text-[11px] px-2.5 py-1 rounded-full font-bold uppercase tracking-tight whitespace-nowrap">Đã chốt</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link to="/leads/LD-2024-003" className="p-2 text-text-muted hover:text-navy-deep hover:bg-surface-container rounded-full transition-all" title="Chi tiết">
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Link to="/leads/LD-2024-003/edit" className="p-2 text-text-muted hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all" title="Sửa">
                      <Edit className="w-4 h-4" />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-low/50 border-t border-surface-variant">
          <p className="font-medium text-sm text-text-muted">
            Hiển thị <span className="text-navy-deep font-semibold">1 - 3</span> trong số <span className="text-navy-deep font-semibold">1,284</span> bản ghi
          </p>
          <div className="flex items-center gap-2">
            <Button className="p-2 border border-outline-variant hover:bg-white rounded-lg transition-colors text-text-muted hover:text-navy-deep disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="hidden flex-wrap items-center gap-1 sm:flex">
                <Button className="w-8 h-8 flex items-center justify-center rounded-lg bg-navy-deep text-white font-semibold text-sm shadow-sm">1</Button>
                <Button className="w-8 h-8 flex items-center justify-center rounded-lg border border-transparent hover:border-outline-variant hover:bg-white font-semibold text-sm text-on-surface-variant transition-colors">2</Button>
                <Button className="w-8 h-8 flex items-center justify-center rounded-lg border border-transparent hover:border-outline-variant hover:bg-white font-semibold text-sm text-on-surface-variant transition-colors">3</Button>
                <span className="px-1 text-text-muted">...</span>
                <Button className="w-8 h-8 flex items-center justify-center rounded-lg border border-transparent hover:border-outline-variant hover:bg-white font-semibold text-sm text-on-surface-variant transition-colors">68</Button>
            </div>
            <Button className="p-2 border border-outline-variant hover:bg-white rounded-lg transition-colors text-text-muted hover:text-navy-deep">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
