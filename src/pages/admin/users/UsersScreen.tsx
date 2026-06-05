import React from 'react';
import { 
  Users as UsersIcon, 
  UserCheck, 
  Clock, 
  Lock, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Lock as LockIcon, 
  Mail,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  UserPlus
} from 'lucide-react';
import { MOCK_USERS, User } from './users.types';
import { Button, Input, Select, Table } from '@/components/ui';
export default function Users({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const [users] = React.useState<User[]>(MOCK_USERS);
  const [resetModalUserId, setResetModalUserId] = React.useState<string | null>(null);

  const getStatusBadge = (status: User['status']) => {
    switch (status) {
      case 'Hoạt động':
        return <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-success"></span><span className="text-success font-medium text-sm">Hoạt động</span></span>;
      case 'Chờ kích hoạt':
        return <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-warning"></span><span className="text-warning font-medium text-sm">Chờ kích hoạt</span></span>;
      case 'Bị khóa':
        return <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-error"></span><span className="text-error font-medium text-sm">Bị khóa</span></span>;
      default:
        return <span>{status}</span>;
    }
  };

  const getRoleBadge = (role: User['role']) => {
    switch (role) {
      case 'Super Admin':
        return <span className="px-2.5 py-0.5 bg-navy/5 border border-navy/10 text-navy rounded-full text-xs font-semibold">Super Admin</span>;
      case 'Tuyển sinh':
        return <span className="px-2.5 py-0.5 bg-gold/20 text-[#6e5c00] rounded-full text-xs font-semibold">Tuyển sinh</span>;
      case 'Tư vấn':
        return <span className="px-2.5 py-0.5 bg-surface-highest text-text-muted rounded-full text-xs font-semibold">Tư vấn</span>;
      default:
        return <span className="px-2.5 py-0.5 bg-surface-highest text-text-muted rounded-full text-xs font-semibold">{role}</span>;
    }
  };

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-[1400px] mx-auto">
      
      {/* Page Header (Optional inside container if layout header isn't enough) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy">Quản lý người dùng</h2>
          <p className="text-text-muted text-sm mt-1">Danh sách nhân sự và quyền truy cập hệ thống.</p>
        </div>
        <Button onClick={() => onNavigate && onNavigate('UserForm')} className="flex items-center gap-2 px-6 py-2.5 bg-gold justify-center text-navy rounded-xl font-semibold hover:bg-[#ebc700] hover:shadow-lg transition-all active:scale-95 shadow-sm">
          <UserPlus size={18} />
          Thêm người dùng mới
        </Button>
      </div>

      {/* Stats Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-highest group hover:border-navy transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-colors">
              <UsersIcon size={24} />
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-success bg-success/10 px-2 py-1 rounded-full">
              <TrendingUp size={14} />+12%
            </span>
          </div>
          <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">Tổng người dùng</p>
          <p className="font-display text-3xl font-bold text-navy">1,248</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-highest group hover:border-success transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success group-hover:bg-success group-hover:text-white transition-colors">
              <UserCheck size={24} />
            </div>
          </div>
          <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">Đang hoạt động</p>
          <p className="font-display text-3xl font-bold text-navy">1,152</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-highest group hover:border-warning transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center text-warning group-hover:bg-warning group-hover:text-white transition-colors">
              <Clock size={24} />
            </div>
          </div>
          <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">Chờ kích hoạt</p>
          <p className="font-display text-3xl font-bold text-navy">64</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-highest group hover:border-error transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error group-hover:bg-error group-hover:text-white transition-colors">
              <Lock size={24} />
            </div>
          </div>
          <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">Bị khóa/Vô hiệu</p>
          <p className="font-display text-3xl font-bold text-navy">32</p>
        </div>
      </div>

      {/* Main Data Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-surface-highest overflow-hidden">
        {/* Filters Toolbar */}
        <div className="p-4 md:p-6 border-b border-surface-highest flex flex-col md:flex-row gap-4 items-center justify-between bg-surface-low/30">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <Input 
              type="text" 
              placeholder="Tìm kiếm theo tên, email..." 
              className="w-full pl-11 pr-4 py-2.5 bg-surface rounded-xl border border-surface-highest focus:border-navy focus:ring-1 focus:ring-navy outline-none text-sm transition-all"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <Select className="bg-surface border border-surface-highest rounded-xl px-4 py-2.5 text-sm focus:border-navy outline-none cursor-pointer flex-shrink-0 min-w-[140px]">
              <option value="">Tất cả vai trò</option>
              <option value="admin">Admin</option>
              <option value="admissions">Tuyển sinh</option>
            </Select>
            <Select className="bg-surface border border-surface-highest rounded-xl px-4 py-2.5 text-sm focus:border-navy outline-none cursor-pointer flex-shrink-0 min-w-[140px]">
              <option value="">Trạng thái</option>
              <option value="active">Hoạt động</option>
              <option value="pending">Chờ kích hoạt</option>
            </Select>
            <Button className="p-2.5 rounded-xl border border-surface-highest text-text-muted hover:bg-surface transition-colors flex-shrink-0">
              <Filter size={18} />
            </Button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="overflow-x-auto min-h-[400px]">
          <Table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-surface-low/50 text-text-muted text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold w-1/3">Họ và tên</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Vai trò</th>
                <th className="px-6 py-4 font-semibold">Trạng thái</th>
                <th className="px-6 py-4 font-semibold text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-highest">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-surface-low/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      {user.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.name} className={`w-10 h-10 rounded-full object-cover border border-surface-highest ${user.status === 'Bị khóa' ? 'grayscale opacity-60' : ''}`} />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-surface-highest flex items-center justify-center text-text-muted font-bold text-sm">
                          {user.initials}
                        </div>
                      )}
                      <div>
                        <p className={`font-semibold text-sm ${user.status === 'Bị khóa' ? 'text-text-muted' : 'text-navy'}`}>{user.name}</p>
                        <p className="text-[11px] text-text-muted font-mono mt-0.5">ID: {user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-text-muted">{user.email}</td>
                  <td className="px-6 py-4">{getRoleBadge(user.role)}</td>
                  <td className="px-6 py-4">{getStatusBadge(user.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {user.status === 'Chờ kích hoạt' ? (
                        <Button className="flex items-center gap-1.5 px-3 py-1.5 text-info bg-info/5 hover:bg-info/10 border border-info/20 rounded-lg text-xs font-semibold mr-2 transition-colors">
                          <Mail size={14} />
                          Gửi email kích hoạt
                        </Button>
                      ) : (
                         <>
                           <Button onClick={() => onNavigate && onNavigate('UserForm')} className="p-1.5 text-text-muted border border-transparent hover:border-surface-highest hover:bg-surface rounded-lg transition-all" title="Chỉnh sửa"><Edit2 size={16} /></Button>
                           <Button onClick={() => setResetModalUserId(user.id)} className="p-1.5 text-text-muted border border-transparent hover:border-surface-highest hover:bg-surface rounded-lg transition-all" title="Đặt lại mật khẩu"><LockIcon size={16} /></Button>
                         </>
                      )}
                      
                      <Button className="p-1.5 text-text-muted border border-transparent xl:ml-2 hover:border-error/20 hover:text-error hover:bg-error/5 rounded-lg transition-all"><MoreVertical size={16} /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Pagination Toolbar */}
        <div className="p-4 md:p-6 border-t border-surface-highest flex flex-col md:flex-row items-center justify-between gap-4 bg-surface-low/20">
          <p className="text-sm text-text-muted">Hiển thị <span className="font-semibold text-navy">1 - 10</span> trên <span className="font-semibold text-navy">1,248</span> người dùng</p>
          
          <div className="flex items-center gap-1">
            <Button className="p-2 rounded-lg border border-surface-highest text-text-muted hover:bg-surface disabled:opacity-30 disabled:cursor-not-allowed" disabled>
              <ChevronLeft size={16} />
            </Button>
            <Button className="w-8 h-8 flex items-center justify-center rounded-lg bg-navy text-white font-medium text-sm">1</Button>
            <Button className="w-8 h-8 flex items-center justify-center rounded-lg text-text-muted hover:bg-surface font-medium text-sm transition-colors">2</Button>
            <Button className="w-8 h-8 flex items-center justify-center rounded-lg text-text-muted hover:bg-surface font-medium text-sm transition-colors">3</Button>
            <span className="px-2 text-text-muted">...</span>
            <Button className="w-8 h-8 flex items-center justify-center rounded-lg text-text-muted hover:bg-surface font-medium text-sm transition-colors">125</Button>
            <Button className="p-2 rounded-lg border border-surface-highest text-text-muted hover:bg-surface transition-colors">
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Reset Password Modal */}
      {resetModalUserId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-surface-highest flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <LockIcon size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-navy leading-none mb-1">Đổi mật khẩu</h3>
                  <p className="text-xs text-text-muted">ID Người dùng: {resetModalUserId}</p>
                </div>
              </div>
              <Button 
                onClick={() => setResetModalUserId(null)}
                className="text-text-muted hover:text-navy hover:bg-surface-low p-2 rounded-lg transition-colors"
              >
                ✕
              </Button>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); setResetModalUserId(null); }} className="p-6 space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Mật khẩu mới</label>
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 bg-surface-low border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white focus:outline-none transition-all text-sm font-medium text-navy" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy">Xác nhận mật khẩu mới</label>
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 bg-surface-low border border-surface-highest rounded-xl focus:ring-1 focus:ring-navy focus:bg-white focus:outline-none transition-all text-sm font-medium text-navy" 
                  required 
                />
              </div>

              <div className="space-y-2.5 bg-surface-low p-4 rounded-xl border border-surface-highest mt-4">
                 <label className="flex items-center gap-2 text-xs font-semibold text-navy/70">
                   <span className="w-4 h-4 rounded-full bg-surface-highest flex items-center justify-center text-[10px] text-text-muted/50"></span> 
                   Ít nhất 8 ký tự
                 </label>
                 <label className="flex items-center gap-2 text-xs font-semibold text-navy/70">
                   <span className="w-4 h-4 rounded-full bg-surface-highest flex items-center justify-center text-[10px] text-text-muted/50"></span> 
                   Bao gồm chữ hoa và số
                 </label>
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-surface-highest mt-6">
                <Button 
                  type="button" 
                  onClick={() => setResetModalUserId(null)}
                  className="flex-1 py-3 px-4 rounded-xl border border-surface-highest text-navy font-semibold text-sm hover:bg-surface-low transition-colors"
                >
                  Hủy
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 py-3 px-4 bg-navy text-white rounded-xl font-semibold text-sm hover:bg-navy/90 hover:shadow-lg shadow-sm transition-all active:scale-95"
                >
                  Lưu mật khẩu
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
