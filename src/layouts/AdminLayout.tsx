import { Outlet, NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  FileText, 
  Settings,
  History,
  Image as ImageIcon,
  HelpCircle,
  MessageSquare,
  Presentation,
  BookOpen,
  PieChart,
  LogOut,
  Bell,
  Menu,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import { Button } from '@/components/ui';
const SIDEBAR_NAV = [
  { id: 'dashboard', label: 'Bảng điều khiển', icon: LayoutDashboard, path: '/admin' },
  { 
    id: 'admissions', label: 'Tuyển sinh & Lead', icon: Users, 
    children: [
      { label: 'Quản lý Lead', path: '/admin/leads' },
      { label: 'Tạo Lead mới', path: '/admin/leads/create' },
      { label: 'Lịch hẹn tư vấn', path: '/admin/appointments' },
      { label: 'Cấu hình TS', path: '/admin/cms/admission-info' },
    ]
  },
  {
    id: 'academics', label: 'Đào tạo', icon: GraduationCap,
    children: [
      { label: 'Chương trình học', path: '/admin/cms/programs' },
      { label: 'Giáo viên', path: '/admin/cms/teachers' },
    ]
  },
  {
    id: 'content', label: 'Nội dung & Tin tức', icon: FileText,
    children: [
      { label: 'Tin tức & CMS', path: '/admin/cms/news' },
      { label: 'Thư viện ảnh', path: '/admin/cms/gallery' },
      { label: 'FAQ', path: '/admin/cms/faqs' },
      { label: 'Testimonial', path: '/admin/cms/testimonials' },
      { label: 'Banner', path: '/admin/cms/banners' },
    ]
  },
  {
    id: 'reports', label: 'Báo cáo', icon: PieChart,
    children: [
      { label: 'Báo cáo Tuyển sinh', path: '/reports/admissions' },
      { label: 'Báo cáo Tài chính', path: '/reports/finance' },
    ]
  },
  {
    id: 'system', label: 'Hệ thống', icon: Settings,
    children: [
      { label: 'Người dùng', path: '/admin/users' },
      { label: 'Cấu hình hệ thống', path: '/admin/settings' },
      { label: 'Nhật ký hoạt động', path: '/admin/audit-logs' },
    ]
  }
];

function SidebarItem({ item, pathname }: { item: any, pathname: string }) {
  const [isOpen, setIsOpen] = useState(true);
  
  if (!item.children) {
    return (
      <NavLink 
        to={item.path}
        className={({isActive}) => cn(
          "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors group",
          isActive 
            ? "bg-gold-accent/10 border-l-4 border-gold-accent text-gold-accent font-semibold" 
            : "text-on-primary-container hover:bg-white/10"
        )}
      >
        <item.icon className="w-5 h-5 opacity-80 group-hover:opacity-100" />
        <span className="text-sm">{item.label}</span>
      </NavLink>
    );
  }

  const isActiveChild = item.children.some((c: any) => pathname.startsWith(c.path));

  return (
    <div className="space-y-1">
      <Button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors group",
          isActiveChild ? "text-white font-semibold" : "text-on-primary-container hover:bg-white/10"
        )}
      >
        <div className="flex items-center gap-3">
          <item.icon className="w-5 h-5 opacity-80 group-hover:opacity-100" />
          <span className="text-sm">{item.label}</span>
        </div>
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </Button>
      {isOpen && (
        <div className="ml-10 border-l border-white/10 pl-2 space-y-1">
          {item.children.map((child: any) => (
            <NavLink
              key={child.path}
              to={child.path}
              className={({isActive}) => cn(
                "block px-3 py-2 text-sm rounded-lg transition-colors",
                isActive 
                  ? "text-gold-accent font-medium bg-white/5" 
                  : "text-on-primary-container/70 hover:text-white hover:bg-white/5"
              )}
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-surface overflow-hidden">
      {/* Sidebar */}
      <aside className={cn(
        "fixed md:relative z-50 w-64 h-full bg-navy-deep text-white flex flex-col transition-transform duration-300",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="p-6 flex items-center gap-3 border-b border-white/10">
          <div className="w-10 h-10 bg-gold-accent rounded-xl flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-navy-deep" />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg tracking-tight text-white leading-tight">VIET ACADEMY</h1>
            <p className="text-[10px] uppercase tracking-widest text-on-primary-container opacity-80">Cổng Quản Trị</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 custom-scrollbar">
          {SIDEBAR_NAV.map((item) => (
            <SidebarItem key={item.id} item={item} pathname={location.pathname} />
          ))}
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 p-2 bg-white/5 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 overflow-hidden border border-gold-accent/30">
              <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold truncate">Quản trị viên</p>
              <p className="text-[11px] text-on-primary-container truncate">Admin Cấp Cao</p>
            </div>
            <Button className="p-1.5 text-on-primary-container hover:text-white transition-colors">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-surface-container-lowest border-b border-surface-variant flex items-center justify-between px-6 shrink-0 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <Button 
              className="md:hidden p-2 -ml-2 text-navy-deep"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="hidden sm:flex items-center gap-1.5 text-sm">
              <span className="text-text-muted">Hệ thống</span>
              <ChevronRight className="w-4 h-4 text-outline-variant" />
              <span className="text-navy-deep font-semibold">Chức năng</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Button className="p-2 hover:bg-surface-container rounded-full text-on-surface-variant transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full ring-2 ring-white" />
              </Button>
            </div>
            <div className="w-px h-6 bg-surface-variant" />
            <Button className="text-sm font-semibold text-navy-deep flex items-center gap-1">
              Tiếng Việt <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto admin-content">
          <Outlet />
        </div>
      </main>
      
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
