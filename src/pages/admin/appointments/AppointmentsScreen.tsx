import React from 'react';
import { ChevronLeft, ChevronRight, Plus, AlertCircle, TrendingUp, Calendar as CalendarIcon } from 'lucide-react';
import { Button, Input, Select } from '@/components/ui';
export default function Appointments({ onNavigate }: { onNavigate?: (route: string) => void }) {
  return (
    <div className="flex h-full flex-col lg:flex-row overflow-hidden bg-surface">
      {/* Calendar Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="p-4 md:p-6 bg-white border-b border-surface-highest flex flex-col md:flex-row md:items-center justify-between gap-4 z-10 shadow-sm">
           <div className="flex flex-col sm:flex-row sm:items-center gap-4">
             <h2 className="font-display text-2xl font-bold text-navy whitespace-nowrap">Tháng 12, 2024</h2>
             <div className="flex items-center bg-surface-low rounded-xl p-1 w-fit">
                <Button className="px-4 py-1.5 text-sm font-semibold hover:bg-white rounded-lg transition-colors text-navy shadow-sm">Hôm nay</Button>
                <div className="flex items-center ml-2 border-l border-surface-highest pl-2">
                  <Button className="p-1.5 text-text-muted hover:bg-white hover:text-navy rounded-lg transition-colors"><ChevronLeft size={20}/></Button>
                  <Button className="p-1.5 text-text-muted hover:bg-white hover:text-navy rounded-lg transition-colors"><ChevronRight size={20}/></Button>
                </div>
             </div>
           </div>
           <div className="flex items-center gap-4 justify-between sm:justify-end">
             <div className="flex bg-surface-low rounded-xl p-1 shrink-0">
               <Button className="px-4 py-1.5 text-sm font-semibold bg-white rounded-lg shadow-sm text-navy">Tháng</Button>
               <Button className="px-4 py-1.5 text-sm font-semibold text-text-muted hover:text-navy hover:bg-white/50 rounded-lg transition-colors">Tuần</Button>
               <Button className="px-4 py-1.5 text-sm font-semibold text-text-muted hover:text-navy hover:bg-white/50 rounded-lg transition-colors hidden sm:block">Ngày</Button>
             </div>
             <Button onClick={() => onNavigate && onNavigate('AppointmentForm')} className="bg-navy text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-navy/90 transition-all shadow-sm whitespace-nowrap active:scale-95">
               <Plus size={18} /> Tạo lịch hẹn
             </Button>
           </div>
        </div>

        {/* Calendar Grid Container */}
        <div className="flex-1 overflow-auto p-4 md:p-6 bg-surface-low/30 hide-scrollbar">
          <div className="bg-white rounded-2xl shadow-sm border border-surface-highest overflow-hidden min-w-[800px] h-full flex flex-col">
             {/* Headers */}
             <div className="grid grid-cols-7 border-b border-surface-highest bg-surface-low/50 shrink-0">
               {['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'].map((d, i) => (
                 <div key={d} className={`py-4 text-center text-sm font-bold tracking-wide uppercase ${i === 6 ? 'text-error' : i === 5 ? 'text-gold' : 'text-text-muted'}`}>{d}</div>
               ))}
             </div>
             {/* Cells Grid */}
             <div className="grid grid-cols-7 flex-1 auto-rows-fr">
               {Array.from({length: 35}).map((_, i) => {
                 const day = i - 3; // roughly align to a month for visual mockup
                 const isCurrentMonth = day > 0 && day <= 31;
                 const isToday = day === 6;
                 
                 return (
                   <div key={i} className={`border-b border-r border-surface-highest p-3 flex flex-col gap-2 transition-colors ${!isCurrentMonth ? 'bg-surface-low/50 opacity-40' : 'hover:bg-surface-low/30'} ${isToday ? 'bg-navy/5' : ''}`}>
                     <span className={`text-sm font-bold w-fit ${isToday ? 'text-navy bg-white px-2 py-0.5 rounded-md shadow-sm border border-navy/10' : 'text-text-muted'}`}>
                       {day > 0 ? day > 31 ? day - 31 : day : 30 + day}
                     </span>
                     
                     {/* Mock Event Blocks */}
                     <div className="space-y-1.5 overflow-hidden">
                       {day === 2 && (
                         <div onClick={(e) => { e.stopPropagation(); onNavigate && onNavigate('AppointmentForm'); }} className="bg-info/10 border-l-4 border-info p-2 rounded-r-md text-xs font-semibold text-info leading-tight truncate px-2.5 cursor-pointer hover:bg-info/20 transition-colors">
                           09:00 - Văn B<br/><span className="font-medium opacity-80 font-mono text-[10px] mt-0.5 block">Tư vấn</span>
                         </div>
                       )}
                       {day === 4 && (
                         <div onClick={(e) => { e.stopPropagation(); onNavigate && onNavigate('AppointmentForm'); }} className="bg-success/10 border-l-4 border-success p-2 rounded-r-md text-xs font-semibold text-success leading-tight truncate px-2.5 cursor-pointer hover:bg-success/20 transition-colors">
                           14:30 - Minh Anh<br/><span className="font-medium opacity-80 font-mono text-[10px] mt-0.5 block">Tham quan</span>
                         </div>
                       )}
                       {day === 6 && (
                         <>
                           <div onClick={(e) => { e.stopPropagation(); onNavigate && onNavigate('AppointmentForm'); }} className="bg-warning/10 border-l-4 border-warning p-2 rounded-r-md text-[11px] font-semibold text-warning truncate px-2 cursor-pointer hover:bg-warning/20 transition-colors">
                             10:00 - Trần Thị C
                           </div>
                           <div onClick={(e) => { e.stopPropagation(); onNavigate && onNavigate('AppointmentForm'); }} className="bg-info/10 border-l-4 border-info p-2 rounded-r-md text-[11px] font-semibold text-info truncate px-2 cursor-pointer hover:bg-info/20 transition-colors">
                             15:00 - Lê Hoàng
                           </div>
                         </>
                       )}
                     </div>
                   </div>
                 )
               })}
             </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar Filters & Stats */}
      <div className="w-full lg:w-80 bg-white border-l border-surface-highest p-6 overflow-y-auto shrink-0 hide-scrollbar shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.02)] z-20">
         <div className="space-y-10">
           {/* Filters */}
           <div>
             <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Bộ lọc hiển thị</h3>
             <div className="space-y-5">
               <div>
                 <p className="text-sm font-semibold text-navy mb-3">Loại lịch hẹn</p>
                 <div className="space-y-3">
                   {['Tư vấn trực tiếp', 'Tham quan trường', 'Theo dõi hồ sơ'].map((l, i) => (
                     <label key={l} className="flex items-center gap-3 cursor-pointer group">
                       <Input type="checkbox" defaultChecked className="w-4 h-4 rounded text-navy focus:ring-navy border-surface-highest cursor-pointer" />
                       <span className="text-sm text-text-muted group-hover:text-navy font-medium transition-colors">{l}</span>
                       <span className={`ml-auto w-2 h-2 rounded-full ${i === 0 ? 'bg-info' : i === 1 ? 'bg-success' : 'bg-warning'}`}></span>
                     </label>
                   ))}
                 </div>
               </div>
               <div className="pt-5 border-t border-surface-highest">
                 <p className="text-sm font-semibold text-navy mb-3">Chuyên viên phụ trách</p>
                 <Select className="w-full px-4 py-2.5 rounded-xl border border-surface-highest bg-surface focus:border-navy focus:ring-1 focus:ring-navy text-sm outline-none cursor-pointer transition-all">
                   <option>Tất cả nhân viên</option>
                   <option>Lê Minh Tâm</option>
                 </Select>
               </div>
             </div>
           </div>

           {/* Reminders */}
           <div>
             <div className="flex items-center justify-between mb-4 border-b border-surface-highest pb-3">
               <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest">Lời nhắc sắp tới</h3>
               <span className="bg-error text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
             </div>
             <div className="space-y-3">
               <div onClick={() => onNavigate && onNavigate('AppointmentForm')} className="p-4 bg-surface-low rounded-xl border-l-[3px] border-gold shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:bg-gold/5">
                 <div className="flex justify-between items-center mb-1.5">
                   <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Trong 30 phút</span>
                   <AlertCircle size={14} className="text-gold" />
                 </div>
                 <p className="font-bold text-navy text-sm leading-tight">Xác nhận lịch với Nguyễn Văn B</p>
                 <p className="text-xs text-text-muted mt-1.5">Phụ huynh đang chờ tại sảnh chính</p>
               </div>
               
               <div onClick={() => onNavigate && onNavigate('AppointmentForm')} className="p-4 bg-surface-low rounded-xl border-l-[3px] border-info/50 opacity-80 hover:opacity-100 transition-opacity cursor-pointer hover:bg-info/5">
                 <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1.5">Chiều nay - 14:00</p>
                 <p className="font-bold text-navy text-sm leading-tight">Chuẩn bị tài liệu CSVC</p>
                 <p className="text-xs text-text-muted mt-1.5">Cho buổi tham quan của chị Minh Anh</p>
               </div>
             </div>
             <Button className="w-full mt-4 py-2 text-sm text-navy font-semibold hover:underline">Xem tất cả thông báo</Button>
           </div>

           {/* Mini Stats Card inside Sidebar */}
           <div className="bg-navy p-5 rounded-2xl text-white relative overflow-hidden shadow-lg shadow-navy/20">
             <div className="absolute right-[-20px] top-[-20px] opacity-10">
               <CalendarIcon size={100} />
             </div>
             <div className="relative z-10">
               <p className="text-[11px] text-white/70 uppercase tracking-widest font-bold mb-1">Tổng lịch hẹn tháng</p>
               <div className="flex items-end gap-3 mt-1">
                 <span className="font-display text-4xl font-bold leading-none">42</span>
                 <span className="text-success text-xs font-bold flex items-center mb-1 bg-success/20 px-1.5 py-0.5 rounded">
                    <TrendingUp size={12} className="mr-0.5" /> +12%
                 </span>
               </div>
               <div className="w-full bg-white/20 h-1.5 rounded-full mt-4 overflow-hidden">
                 <div className="bg-gold h-full w-[75%] rounded-full relative"></div>
               </div>
               <p className="text-[10px] text-white/50 mt-2 font-medium">Đạt 75% so với mục tiêu tháng</p>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
}
