import { 
  Users, UserPlus, FileText, CalendarCheck, TrendingUp, Search, MoreVertical 
} from "lucide-react";
import { Button, Select, Table } from '@/components/ui';
export default function Dashboard() {
  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* KPI Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-on-surface-variant text-xs uppercase tracking-wider font-semibold">Tổng Leads</p>
              <h3 className="font-display text-navy-deep text-3xl font-bold mt-1">1,284</h3>
            </div>
            <div className="bg-primary-container/10 p-2.5 rounded-lg">
              <Users className="w-6 h-6 text-navy-deep" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-success text-xs font-semibold">
            <TrendingUp className="w-4 h-4" />
            <span>+12.5% tháng này</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-on-surface-variant text-xs uppercase tracking-wider font-semibold">Mới Hôm Nay</p>
              <h3 className="font-display text-navy-deep text-3xl font-bold mt-1">42</h3>
            </div>
            <div className="bg-secondary-container/20 p-2.5 rounded-lg">
              <UserPlus className="w-6 h-6 text-secondary" />
            </div>
          </div>
          <p className="text-on-surface-variant text-[11px]">Cập nhật 5 phút trước</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-on-surface-variant text-xs uppercase tracking-wider font-semibold">Tỷ Lệ Chuyển Đổi</p>
              <h3 className="font-display text-navy-deep text-3xl font-bold mt-1">18.4%</h3>
            </div>
            <div className="bg-info/10 p-2.5 rounded-lg">
              <FileText className="w-6 h-6 text-info" />
            </div>
          </div>
          <div className="w-full bg-surface-container-low h-1.5 rounded-full mt-2">
            <div className="bg-info h-full rounded-full w-[18.4%]"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-on-surface-variant text-xs uppercase tracking-wider font-semibold">Lịch Hẹn Chờ</p>
              <h3 className="font-display text-navy-deep text-3xl font-bold mt-1">15</h3>
            </div>
            <div className="bg-warning/10 p-2.5 rounded-lg">
              <CalendarCheck className="w-6 h-6 text-warning" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-warning text-xs font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-warning animate-pulse" />
            <span>Cần xử lý ngay</span>
          </div>
        </div>
      </section>

      {/* Main Dashboard Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads Trend Chart Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-variant">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="font-display font-semibold text-navy-deep text-lg">Xu Hướng Đăng Ký</h4>
                <p className="text-on-surface-variant text-sm">Thống kê 30 ngày qua</p>
              </div>
              <Select className="bg-surface-container-low border-none rounded-lg text-sm focus:ring-navy-deep cursor-pointer px-3 py-1.5 outline-none">
                <option>30 ngày gần nhất</option>
                <option>Học kỳ này</option>
              </Select>
            </div>
            <div className="h-64 flex items-end justify-between gap-2 px-4">
              <div className="w-full bg-navy-deep/10 h-[40%] rounded-t hover:bg-navy-deep transition-all cursor-pointer"></div>
              <div className="w-full bg-navy-deep/10 h-[65%] rounded-t hover:bg-navy-deep transition-all cursor-pointer"></div>
              <div className="w-full bg-navy-deep/10 h-[55%] rounded-t hover:bg-navy-deep transition-all cursor-pointer"></div>
              <div className="w-full bg-navy-deep/10 h-[80%] rounded-t bg-navy-deep relative cursor-pointer">
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-navy-deep text-white text-[10px] px-2 py-1 rounded">112 Lead</div>
              </div>
              <div className="w-full bg-navy-deep/10 h-[95%] rounded-t hover:bg-navy-deep transition-all cursor-pointer"></div>
              <div className="w-full bg-navy-deep/10 h-[70%] rounded-t hover:bg-navy-deep transition-all cursor-pointer"></div>
              <div className="w-full bg-navy-deep/10 h-[100%] rounded-t hover:bg-navy-deep transition-all cursor-pointer"></div>
            </div>
            <div className="flex justify-between mt-4 px-4 text-[11px] text-on-surface-variant font-semibold tracking-tighter">
              <span>Tuần 1</span><span>Tuần 2</span><span>Tuần 3</span><span>Tuần 4</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-variant border-l-4 border-l-navy-deep">
              <p className="text-on-surface-variant text-sm font-semibold">Website</p>
              <h5 className="font-display font-semibold text-2xl text-navy-deep mt-1">65%</h5>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-variant border-l-4 border-l-info">
              <p className="text-on-surface-variant text-sm font-semibold">Facebook</p>
              <h5 className="font-display font-semibold text-2xl text-navy-deep mt-1">25%</h5>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-variant border-l-4 border-l-secondary-container">
              <p className="text-on-surface-variant text-sm font-semibold">Zalo</p>
              <h5 className="font-display font-semibold text-2xl text-navy-deep mt-1">10%</h5>
            </div>
          </div>
        </div>

        {/* Today's Schedule Column */}
        <div className="bg-navy-deep rounded-xl shadow-lg border border-navy-deep text-white overflow-hidden flex flex-col">
          <div className="p-6 bg-white/5 border-b border-white/10">
            <h4 className="font-display font-semibold text-gold-accent text-lg">Lịch Tư Vấn Hôm Nay</h4>
            <p className="text-white/60 text-sm">5 cuộc hẹn sắp tới</p>
          </div>
          <div className="flex-grow p-6 space-y-6">
            <div className="flex gap-4 group cursor-pointer">
              <div className="flex flex-col items-center">
                <span className="text-gold-accent font-bold text-sm">09:00</span>
                <div className="w-px h-full bg-white/20 mt-2"></div>
              </div>
              <div className="pb-4">
                <p className="font-semibold text-sm">Nguyễn Hoàng Nam</p>
                <p className="text-xs text-white/60 mt-1">Tư vấn tuyển sinh Lớp 10</p>
              </div>
            </div>
            <div className="flex gap-4 group cursor-pointer">
              <div className="flex flex-col items-center">
                <span className="text-gold-accent font-bold text-sm">10:30</span>
                <div className="w-px h-full bg-white/20 mt-2"></div>
              </div>
              <div className="pb-4">
                <p className="font-semibold text-sm">Trần Minh Thư</p>
                <p className="text-xs text-white/60 mt-1">Tham quan cơ sở vật chất</p>
              </div>
            </div>
            <div className="flex gap-4 group cursor-pointer">
              <div className="flex flex-col items-center">
                <span className="text-gold-accent font-bold text-sm">14:00</span>
                <div className="w-px h-full bg-transparent mt-2"></div>
              </div>
              <div className="pb-4">
                <p className="font-semibold text-sm">Lê Quốc Bảo</p>
                <p className="text-xs text-white/60 mt-1">Phỏng vấn học bổng</p>
              </div>
            </div>
          </div>
          <Button className="p-4 text-center bg-gold-accent text-navy-deep font-bold transition-colors hover:bg-yellow-400 uppercase tracking-widest text-xs">
            Xem Tất Cả Lịch Hẹn
          </Button>
        </div>
      </section>

      {/* Recent Leads Table */}
      <section className="bg-white rounded-xl shadow-sm border border-surface-variant overflow-hidden">
        <div className="px-6 py-5 border-b border-surface-variant flex justify-between items-center bg-surface-container-low/50">
          <h4 className="font-display font-semibold text-navy-deep text-lg">Đăng Ký Gần Đây</h4>
          <Button className="text-navy-deep font-semibold text-sm hover:underline">
            Xem báo cáo đầy đủ
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table className="w-full text-left">
            <thead className="bg-surface-container-low text-on-surface-variant text-[11px] uppercase tracking-wider font-semibold">
              <tr>
                <th className="px-6 py-4">Tên Học Sinh</th>
                <th className="px-6 py-4">SĐT Phụ Huynh</th>
                <th className="px-6 py-4">Khối Lớp</th>
                <th className="px-6 py-4 text-center">Trạng Thái</th>
                <th className="px-6 py-4 text-right">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-variant text-sm">
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4">
                  <p className="font-semibold text-navy-deep">Phạm Minh Đức</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">duc.pham@example.com</p>
                </td>
                <td className="px-6 py-4">090 123 4567</td>
                <td className="px-6 py-4">Lớp 10</td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-success/10 text-success text-[11px] px-3 py-1 rounded-full font-bold uppercase tracking-tight">Mới</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button className="p-2 text-navy-deep hover:bg-surface-container rounded-full transition-all">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4">
                  <p className="font-semibold text-navy-deep">Vũ Thu Phương</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">phuong.vu@example.com</p>
                </td>
                <td className="px-6 py-4">091 987 6543</td>
                <td className="px-6 py-4">Lớp 11</td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-info/10 text-info text-[11px] px-3 py-1 rounded-full font-bold uppercase tracking-tight">Đã liên hệ</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button className="p-2 text-navy-deep hover:bg-surface-container rounded-full transition-all">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4">
                  <p className="font-semibold text-navy-deep">Đỗ Thanh Tâm</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">tam.do@example.com</p>
                </td>
                <td className="px-6 py-4">092 345 6789</td>
                <td className="px-6 py-4">Lớp 12</td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-warning/10 text-warning text-[11px] px-3 py-1 rounded-full font-bold uppercase tracking-tight">Đang hẹn</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button className="p-2 text-navy-deep hover:bg-surface-container rounded-full transition-all">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </div>
  );
}
