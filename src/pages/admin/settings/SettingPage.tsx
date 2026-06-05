import React, { useState } from 'react';
import { 
  Info, 
  Share2, 
  TerminalSquare, 
  Blocks,
  AlertTriangle,
  Upload,
  Globe
} from 'lucide-react';
import { Button, Input } from '@/components/ui';
type TabId = 'general' | 'contact' | 'tech' | 'integration';

export default function Settings() {
  const [activeTab, setActiveTab] = useState<TabId>('general');
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const Tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'general', label: 'Thông tin chung', icon: <Info size={18} /> },
    { id: 'contact', label: 'Liên hệ & MXH', icon: <Share2 size={18} /> },
    { id: 'tech', label: 'Cấu hình kỹ thuật', icon: <TerminalSquare size={18} /> },
    { id: 'integration', label: 'Tích hợp', icon: <Blocks size={18} /> },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-[1200px] mx-auto">
      {/* Page Header */}
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Cấu hình hệ thống</h2>
        <p className="text-text-muted text-sm mt-1">Cập nhật thông tin cơ bản, cấu hình kỹ thuật và tích hợp hệ thống cho website.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Vertical Tabs Bar */}
        <div className="lg:w-64 flex-shrink-0">
          <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 hide-scrollbar rounded-xl bg-white p-2 border border-surface-highest shadow-sm">
            {Tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left whitespace-nowrap transition-all duration-200 text-sm font-medium
                  ${activeTab === tab.id 
                    ? 'bg-navy/5 text-navy border-l-4 border-gold shadow-sm' 
                    : 'text-text-muted hover:bg-surface-low hover:text-navy border-l-4 border-transparent'
                  }`}
              >
                {tab.icon}
                {tab.label}
              </Button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          
          {/* Maintenace Mode Toggle (Always visible logic usually, but keep it simple here) */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-surface-highest flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-warning/10 rounded-xl text-warning">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-navy">Chế độ bảo trì</h3>
                <p className="text-sm text-text-muted mt-0.5">Tạm ẩn website đối với khách truy cập.</p>
              </div>
            </div>
            
            {/* Toggle Switch */}
            <label className="relative inline-flex items-center cursor-pointer">
              <Input 
                type="checkbox" 
                className="sr-only peer" 
                checked={maintenanceMode}
                onChange={() => setMaintenanceMode(!maintenanceMode)}
              />
              <div className="w-11 h-6 bg-surface-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
            </label>
          </div>

          {/* Tab Content Panels */}
          {activeTab === 'general' && (
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-surface-highest space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="border-b border-surface-highest pb-4">
                <h3 className="font-display text-xl font-bold text-navy">Thông tin chung</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <label className="block text-sm font-semibold text-text-muted">Tên trường học</label>
                  <Input 
                    type="text" 
                    defaultValue="VIET ACADEMY - HỆ THỐNG GIÁO DỤC CHẤT LƯỢNG CAO"
                    className="w-full px-4 py-3 rounded-xl border border-surface-highest bg-surface-low focus:bg-white focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all text-navy"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-text-muted">Logo thương hiệu</label>
                  <div className="flex items-center gap-4 p-4 border-2 border-dashed border-surface-highest rounded-xl hover:bg-surface-low/50 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-navy flex items-center justify-center rounded-xl shadow-sm group-hover:scale-105 transition-transform">
                      <span className="text-gold font-bold text-[10px] text-center px-1">VIET<br/>ACADEMY</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy flex items-center gap-1.5"><Upload size={14}/> Thay đổi Logo</p>
                      <p className="text-xs text-text-muted mt-1">PNG, SVG tối đa 2MB</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-text-muted">Biểu tượng Favicon</label>
                  <div className="flex items-center gap-4 p-4 border-2 border-dashed border-surface-highest rounded-xl hover:bg-surface-low/50 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-white flex items-center justify-center rounded-xl border border-surface-highest shadow-sm group-hover:scale-105 transition-transform">
                      <Globe size={24} className="text-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy flex items-center gap-1.5"><Upload size={14}/> Thay đổi Favicon</p>
                      <p className="text-xs text-text-muted mt-1">ICO, PNG (32x32px)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-text-muted">Màu chủ đạo (Chính)</label>
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-xl bg-navy border border-surface-highest shadow-inner flex-shrink-0 cursor-pointer relative overflow-hidden">
                       <Input type="color" defaultValue="#002147" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 cursor-pointer opacity-0" />
                    </div>
                    <Input 
                      type="text" 
                      defaultValue="#002147"
                      className="w-full px-4 py-3 rounded-xl border border-surface-highest bg-surface-low font-mono uppercase text-sm text-navy focus:bg-white focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-text-muted">Màu nhấn (Phụ)</label>
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-xl bg-gold border border-surface-highest shadow-inner flex-shrink-0 cursor-pointer relative overflow-hidden">
                       <Input type="color" defaultValue="#FFD700" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 cursor-pointer opacity-0" />
                    </div>
                    <Input 
                      type="text" 
                      defaultValue="#FFD700"
                      className="w-full px-4 py-3 rounded-xl border border-surface-highest bg-surface-low font-mono uppercase text-sm text-navy focus:bg-white focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 flex justify-end gap-3 border-t border-surface-highest">
                <Button className="px-6 py-2.5 rounded-xl border border-surface-highest text-text-muted hover:bg-surface-low font-semibold text-sm transition-colors">
                  Hủy
                </Button>
                <Button className="bg-navy text-white px-8 py-2.5 rounded-xl font-semibold text-sm hover:bg-navy/90 hover:shadow-lg transition-all active:scale-95">
                  Lưu thay đổi
                </Button>
              </div>
            </div>
          )}

          {activeTab !== 'general' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest h-64 flex flex-col items-center justify-center text-text-muted animate-in zoom-in-95 duration-300">
               <Blocks size={48} className="opacity-20 mb-4" />
               <p>Nội dung cấu hình phần tử "{Tabs.find(t => t.id === activeTab)?.label}" đang được hoàn thiện.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
