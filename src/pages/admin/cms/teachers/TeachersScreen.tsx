import React from 'react';
import { Plus, Search, Edit2, Trash2, Users, Award, Eye } from 'lucide-react';
import { Button, Input, Select, Table } from '@/components/ui';
interface TeachersProps {
  onNavigate: (route: string) => void;
}

export default function Teachers({ onNavigate }: TeachersProps) {
  const teachers = [
    { id: '1', name: 'Nguyễn Thu Hà', email: 'ha.nt@vietacademy.edu.vn', subject: 'Tiếng Anh', degree: 'Tiến sĩ (PhD)', exp: '12 năm', status: 'Đang hiển thị', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&w=150&h=150&fit=crop&q=80' },
    { id: '2', name: 'Trần Hoàng Long', email: 'long.th@vietacademy.edu.vn', subject: 'Toán học', degree: 'Thạc sĩ', exp: '8 năm', status: 'Đang hiển thị', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&w=150&h=150&fit=crop&q=80' },
    { id: '3', name: 'Lê Thị Minh', email: 'minh.lt@vietacademy.edu.vn', subject: 'Ngữ văn', degree: 'Thạc sĩ', exp: '15 năm', status: 'Đã ẩn', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=150&h=150&fit=crop&q=80' },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-navy">Quản lý giáo viên</h1>
          <p className="text-text-muted mt-1 text-sm">Cập nhật thông tin và điều phối đội ngũ giảng dạy của học viện.</p>
        </div>
        <Button 
          onClick={() => onNavigate('teacher-form')}
          className="bg-gold hover:bg-[#ebd000] text-navy px-6 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 whitespace-nowrap"
        >
          <Plus size={20} />
          THÊM GIÁO VIÊN MỚI
        </Button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-surface-highest grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-muted px-1">Bộ môn</label>
          <Select className="w-full bg-surface-low border border-surface-highest rounded-xl px-4 py-2.5 text-sm focus:border-navy outline-none cursor-pointer">
            <option>Tất cả bộ môn</option>
            <option>Toán học</option>
          </Select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-muted px-1">Học vị</label>
          <Select className="w-full bg-surface-low border border-surface-highest rounded-xl px-4 py-2.5 text-sm focus:border-navy outline-none cursor-pointer">
            <option>Tất cả học vị</option>
            <option>Tiến sĩ</option>
          </Select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-muted px-1">Trạng thái</label>
          <Select className="w-full bg-surface-low border border-surface-highest rounded-xl px-4 py-2.5 text-sm focus:border-navy outline-none cursor-pointer">
            <option>Tất cả trạng thái</option>
            <option>Đang hiển thị</option>
          </Select>
        </div>
        <div className="flex items-end">
          <Button className="w-full bg-navy hover:bg-navy/90 text-white py-2.5 rounded-xl font-semibold transition-colors text-sm">
            Lọc kết quả
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-surface-highest overflow-hidden">
        <div className="overflow-x-auto min-h-[300px]">
          <Table className="w-full text-left border-collapse whitespace-nowrap min-w-[800px]">
            <thead>
              <tr className="bg-surface-low text-navy text-xs uppercase tracking-wider font-semibold border-b border-surface-highest">
                <th className="px-6 py-4 w-1/3">Họ và Tên</th>
                <th className="px-6 py-4">Bộ môn</th>
                <th className="px-6 py-4">Học vị</th>
                <th className="px-6 py-4">Kinh nghiệm</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-highest">
              {teachers.map(t => (
                <tr key={t.id} className="hover:bg-surface-low/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={t.avatar} className="w-10 h-10 rounded-full object-cover border border-surface-highest shrink-0" alt="" />
                      <div className="min-w-0">
                        <p className="font-semibold text-navy text-sm truncate">{t.name}</p>
                        <p className="text-xs text-text-muted truncate">{t.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-text-muted">{t.subject}</td>
                  <td className="px-6 py-4 text-sm font-medium text-text-muted">{t.degree}</td>
                  <td className="px-6 py-4 text-sm font-medium text-text-muted">{t.exp}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <label className="relative inline-flex items-center cursor-pointer">
                         <Input type="checkbox" className="sr-only peer" defaultChecked={t.status === 'Đang hiển thị'} />
                         <div className="w-9 h-5 bg-surface-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success"></div>
                       </label>
                      <span className={`text-xs font-semibold ${t.status === 'Đang hiển thị' ? 'text-success' : 'text-text-muted'}`}>{t.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button onClick={() => onNavigate('teacher-form')} className="p-1.5 text-text-muted hover:text-navy hover:bg-surface rounded-lg transition-colors"><Edit2 size={16} /></Button>
                      <Button className="p-1.5 text-text-muted hover:text-error hover:bg-error/5 rounded-lg transition-colors"><Trash2 size={16} /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
        <div className="bg-white p-6 rounded-2xl border border-surface-highest flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center shrink-0">
            <Users size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-0.5">Tổng giáo viên</p>
            <p className="font-display text-2xl font-bold text-navy">42</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-surface-highest flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-gold/20 text-[#6e5c00] flex items-center justify-center shrink-0">
            <Award size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-0.5">Tiến sĩ / Thạc sĩ</p>
            <p className="font-display text-2xl font-bold text-navy">85%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-surface-highest flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center shrink-0">
            <Eye size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-0.5">Đang hiển thị</p>
            <p className="font-display text-2xl font-bold text-navy">38</p>
          </div>
        </div>
      </div>

    </div>
  );
}
