import { BookOpen, Brain, Building2, Calendar, CheckCircle2, ChevronDown, Compass, GraduationCap, Mail, Phone, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Input, Select, Textarea } from '@/components/ui';
export function Home() {
  const [activeTab, setActiveTab] = useState('khối-10');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <section className="relative h-[921px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPJSbAky3M6tyhAvagTjYXCs1HEPSVH0TrIp-lsHKSUH4CnMAZfzYrREb8IDitEgQ_gwvWRpqvoSlg2VafHv14MXHMX7unCAu3CCU5GOTebRV_kvnFJvDsaLdh38UGsopalQpH4srskeGjj3JqPwtRJYovsqNAjWv5ONz1_rA7BbpoUn72DKNwn3-egh-EipsGgRm4MLaCmZDjRQZXCMwp1M1ObH9VrwVl_5Iwg7yBaYOeXdiZ4WxKur6sZI8SEJwiPxEKPRRxyN0" alt="Viet Academy Campus" />
          <div className="absolute inset-0 bg-navy-deep/40"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-lg text-white w-full">
          <div className="max-w-2xl">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight mb-md">Trường THPT VIET ACADEMY</h1>
            <p className="font-body-lg text-body-lg mb-xl opacity-90 italic">Kiến tạo tương lai, khẳng định bản lĩnh công dân toàn cầu trong môi trường giáo dục chuẩn quốc tế.</p>
            <div className="flex flex-wrap gap-md">
              <Button className="bg-gold-accent text-navy-deep px-xl py-md rounded-xl font-headline-md text-headline-md hover:scale-105 transition-transform shadow-lg">Đăng ký tư vấn</Button>
              <Button className="border-2 border-white text-white px-xl py-md rounded-xl font-headline-md text-headline-md hover:bg-white/10 transition-colors">Tìm hiểu thêm</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="gioi-thieu" className="py-xxl bg-white">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="grid md:grid-cols-2 gap-xl items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-navy-deep mb-md border-l-4 border-gold-accent pl-md">Sứ mệnh của chúng tôi</h2>
              <p className="text-text-muted font-body-md mb-lg leading-relaxed">Được thành lập với tầm nhìn trở thành biểu tượng của sự đổi mới giáo dục, VIET ACADEMY không chỉ truyền thụ kiến thức mà còn nuôi dưỡng tâm hồn, rèn luyện kỹ năng để mỗi học sinh tự tin bước vào thế giới.</p>
              <div className="grid grid-cols-2 gap-md mt-xl">
                <div className="p-lg bg-surface-container-low rounded-xl">
                  <span className="block text-display-lg-mobile md:text-headline-lg font-bold text-navy-deep">25+</span>
                  <span className="text-body-sm text-text-muted">Năm hình thành</span>
                </div>
                <div className="p-lg bg-surface-container-low rounded-xl">
                  <span className="block text-display-lg-mobile md:text-headline-lg font-bold text-navy-deep">1.5k+</span>
                  <span className="text-body-sm text-text-muted">Học sinh</span>
                </div>
                <div className="p-lg bg-surface-container-low rounded-xl">
                  <span className="block text-display-lg-mobile md:text-headline-lg font-bold text-navy-deep">120+</span>
                  <span className="text-body-sm text-text-muted">Giáo viên</span>
                </div>
                <div className="p-lg bg-surface-container-low rounded-xl">
                  <span className="block text-display-lg-mobile md:text-headline-lg font-bold text-navy-deep">100%</span>
                  <span className="text-body-sm text-text-muted">Tốt nghiệp</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img className="rounded-xl shadow-xl w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbRIZ1iSkr6Fz8txLD-qnY0Erm9k8DVnFR9iZsfk-a9drCvfdgjT_vb71Tq_r2b_3JM2bDPnIWzlurZ9L7hIDuw-ezsxIq0gDtFybcJTWI7mHdyUxohlh-9rFjgI2k2A6BBZBkqbb6shf1NFquc91QFMVFkwWQ4AZ3klEnvMWB3kbEWTOBLY1xuOt63WRGERnQ4gdg8wLhP320hG_DwK4ssq6RAGhegk7kT9ve2abNkEYpy86i-OX9txXmcKOspST9v1MwPVRm3Fk" alt="Students in class" />
              <div className="absolute -bottom-sm -right-sm bg-gold-accent p-lg rounded-xl shadow-lg hidden md:block">
                <p className="text-navy-deep font-bold italic">{"\"Nơi ươm mầm tài năng\""}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xxl bg-surface">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-xxl">
            <h2 className="font-headline-lg text-headline-lg text-navy-deep mb-sm uppercase tracking-wider">Tại sao chọn VIET ACADEMY?</h2>
            <div className="w-20 h-1 bg-gold-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-white p-lg rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-navy-deep">
              <BookOpen className="text-gold-accent w-10 h-10 mb-md" />
              <h3 className="font-headline-md text-headline-md text-navy-deep mb-sm">Chương trình học</h3>
              <p className="text-body-sm text-text-muted">Tích hợp chương trình quốc tế và bộ giáo dục, chuẩn bị hành trang tốt nhất.</p>
            </div>
            <div className="bg-white p-lg rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-navy-deep">
              <GraduationCap className="text-gold-accent w-10 h-10 mb-md" />
              <h3 className="font-headline-md text-headline-md text-navy-deep mb-sm">Giáo viên</h3>
              <p className="text-body-sm text-text-muted">Đội ngũ chuyên gia tâm huyết, giàu kinh nghiệm từ các trường hàng đầu.</p>
            </div>
            <div className="bg-white p-lg rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-navy-deep">
              <Brain className="text-gold-accent w-10 h-10 mb-md" />
              <h3 className="font-headline-md text-headline-md text-navy-deep mb-sm">Môi trường</h3>
              <p className="text-body-sm text-text-muted">Năng động, sáng tạo, tôn trọng sự khác biệt của từng cá nhân học sinh.</p>
            </div>
            <div className="bg-white p-lg rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-navy-deep">
              <Building2 className="text-gold-accent w-10 h-10 mb-md" />
              <h3 className="font-headline-md text-headline-md text-navy-deep mb-sm">Cơ sở vật chất</h3>
              <p className="text-body-sm text-text-muted">Phòng học thông minh, thư viện hiện đại, khu thể thao phức hợp đạt chuẩn.</p>
            </div>
            <div className="bg-white p-lg rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-navy-deep">
              <Users className="text-gold-accent w-10 h-10 mb-md" />
              <h3 className="font-headline-md text-headline-md text-navy-deep mb-sm">Ngoại khóa</h3>
              <p className="text-body-sm text-text-muted">Hơn 30 câu lạc bộ phát triển năng khiếu, kỹ năng mềm đa dạng.</p>
            </div>
            <div className="bg-white p-lg rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-navy-deep">
              <Compass className="text-gold-accent w-10 h-10 mb-md" />
              <h3 className="font-headline-md text-headline-md text-navy-deep mb-sm">Định hướng</h3>
              <p className="text-body-sm text-text-muted">Tư vấn hướng nghiệp chuyên sâu, kết nối trực tiếp với đại học quốc tế.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="chuong-trinh-hoc" className="py-xxl bg-white">
        <div className="max-w-container-max mx-auto px-lg">
          <h2 className="font-headline-lg text-headline-lg text-navy-deep text-center mb-xl">Chương trình đào tạo</h2>
          <div className="flex justify-center mb-lg space-x-xl border-b border-outline-variant">
            <Button onClick={() => setActiveTab('khối-10')} className={`px-md py-sm font-label-md text-label-md transition-all ${activeTab === 'khối-10' ? 'text-navy-deep border-b-2 border-gold-accent' : 'text-text-muted hover:text-navy-deep'}`}>KHỐI 10</Button>
            <Button onClick={() => setActiveTab('khối-11')} className={`px-md py-sm font-label-md text-label-md transition-all ${activeTab === 'khối-11' ? 'text-navy-deep border-b-2 border-gold-accent' : 'text-text-muted hover:text-navy-deep'}`}>KHỐI 11</Button>
            <Button onClick={() => setActiveTab('khối-12')} className={`px-md py-sm font-label-md text-label-md transition-all ${activeTab === 'khối-12' ? 'text-navy-deep border-b-2 border-gold-accent' : 'text-text-muted hover:text-navy-deep'}`}>KHỐI 12</Button>
          </div>
          
          {activeTab === 'khối-10' && (
            <div className="grid md:grid-cols-2 gap-xl items-center transition-opacity duration-300">
              <div>
                <h4 className="font-headline-md text-headline-md text-navy-deep mb-md">Kiến tạo nền tảng</h4>
                <p className="text-body-md text-text-muted mb-md">Giai đoạn lớp 10 tập trung vào việc làm quen với môi trường mới và củng cố kiến thức nền tảng vững chắc.</p>
                <ul className="space-y-sm">
                  <li className="flex items-center gap-sm"><CheckCircle2 className="text-success w-5 h-5" /> 8 môn bắt buộc theo chuẩn Bộ GD&amp;ĐT</li>
                  <li className="flex items-center gap-sm"><CheckCircle2 className="text-success w-5 h-5" /> Chương trình Tiếng Anh tăng cường IELTS 5.5+</li>
                  <li className="flex items-center gap-sm"><CheckCircle2 className="text-success w-5 h-5" /> Kỹ năng số và lập trình cơ bản</li>
                </ul>
              </div>
              <img className="rounded-xl h-64 object-cover w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX5WNPrjHc5qYJtlZVX-7EZ757zxEQwKkvNVp2h3eW4Z3WM0qVwTcO7ZIdCqOymvP5C9CIGn9EcIk84MbKG8CRbbyGTXZ1HOr4PEyA0986hCC-oulHrbrhlYWZ-R9o_OyffYXE3oDoZlYXBmrylVFcgNJ2067aXQuCWec24MR2dum771In0K2raOcdxpUjoGs0T_uxNeyVZ2J0UYD4_SbWFVmGC5SqYaKOssp6SUhmlnRz9JP9N6HhIuUuUqGgne-n81IUSu7VkO0" alt="Grade 10 students" />
            </div>
          )}

          {activeTab === 'khối-11' && (
            <div className="grid md:grid-cols-2 gap-xl items-center transition-opacity duration-300">
              <div>
                <h4 className="font-headline-md text-headline-md text-navy-deep mb-md">Phát triển chuyên sâu</h4>
                <p className="text-body-md text-text-muted mb-md">Lớp 11 bắt đầu phân hóa theo định hướng nghề nghiệp với các tổ hợp môn tự chọn nâng cao.</p>
                <ul className="space-y-sm">
                  <li className="flex items-center gap-sm"><CheckCircle2 className="text-success w-5 h-5" /> Tổ hợp Khoa học Tự nhiên / Xã hội</li>
                  <li className="flex items-center gap-sm"><CheckCircle2 className="text-success w-5 h-5" /> Nghiên cứu khoa học và dự án thực tế</li>
                  <li className="flex items-center gap-sm"><CheckCircle2 className="text-success w-5 h-5" /> Luyện thi chứng chỉ quốc tế chuyên sâu</li>
                </ul>
              </div>
              <img className="rounded-xl h-64 object-cover w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Ov1sMAU6i72jnMmMlAogYSmRAkW8xewFn5yqjGfFFOHQUvB43xVYV1dXGuwpLBVg_sitnIVgnC91hn79WXSSGbnqFOJc43R_rI0XevdUZYcEL-d5Z8EizxOm36Dv7hmOHRAKAFw9NfvOfuoWW7i7c3JLHWSiH45Oet6XlUSl-j0rk7FF4Bc2Dm9hjTMpr1cdw66VPdGJo1WDxOJvCaFudiyuBx1IkUBQoNWKofLs62gPP3TuWvISBPaib6M_aXoT8niwYSN8S2A" alt="Grade 11 students" />
            </div>
          )}

          {activeTab === 'khối-12' && (
            <div className="grid md:grid-cols-2 gap-xl items-center transition-opacity duration-300">
              <div>
                <h4 className="font-headline-md text-headline-md text-navy-deep mb-md">Bứt phá và Về đích</h4>
                <p className="text-body-md text-text-muted mb-md">Lớp 12 tập trung tối đa cho kỳ thi Tốt nghiệp THPT và xét tuyển Đại học/Du học.</p>
                <ul className="space-y-sm">
                  <li className="flex items-center gap-sm"><CheckCircle2 className="text-success w-5 h-5" /> Ôn tập bám sát cấu trúc đề thi</li>
                  <li className="flex items-center gap-sm"><CheckCircle2 className="text-success w-5 h-5" /> Chiến lược nộp hồ sơ đại học toàn cầu</li>
                  <li className="flex items-center gap-sm"><CheckCircle2 className="text-success w-5 h-5" /> Tuần lễ hướng nghiệp và thực tập ngắn hạn</li>
                </ul>
              </div>
              <img className="rounded-xl h-64 object-cover w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpwwUUuoQS1qfL2btkTfUEVXfD0ocHgJD0ECbOLx7HxtX5RjBf3YBCTkCI7L2qxhr4ii_pQ1tkYYDlnhbrxpx8mFGSuqMNy3Ar4cLSUjgjQGD2FKvGE_0o6xSkUSovUsCLpskHICjpkFFC_5S9ChIGmqxK1dLencpLb_sRptXZsg8nu6noWKg4sc0gNG0LVRAhECLLlXH67X9Nsjbl6AjzXXGGnfbBHEw0z7ZocgGqgvrWowf__8Y_HNPEBgAyEfwbVW7Pf5TyCs8" alt="Grade 12 students" />
            </div>
          )}
        </div>
      </section>

      <section className="py-xl bg-navy-deep text-white">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-xl text-center">
            <div>
              <span className="block text-4xl md:text-5xl font-bold text-gold-accent mb-sm">500+</span>
              <span className="text-body-sm opacity-80">Giải thưởng HSG Tỉnh/QG</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-bold text-gold-accent mb-sm">8.0+</span>
              <span className="text-body-sm opacity-80">Điểm TB IELTS</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-bold text-gold-accent mb-sm">200+</span>
              <span className="text-body-sm opacity-80">Học bổng du học</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-bold text-gold-accent mb-sm">98%</span>
              <span className="text-body-sm opacity-80">Đỗ ĐH nguyện vọng 1</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-xxl bg-surface">
        <div className="max-w-container-max mx-auto px-lg">
          <h2 className="font-headline-lg text-headline-lg text-navy-deep text-center mb-xl">Khám phá khuôn viên trường</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md auto-rows-[200px]">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB49AlA8X5fteNhEMyI0yaBgI5rfd8cpDTWHZ1bGGSZ5G2xZI1VgN9hL7gRkJzRS-AZt4fVYI8oW4tUDzXe1rv5I7tCF0G5321T0vdosIlKmFNrvu0fifCoJZXpZIsnNDVUXfKxslp_M_rLqyQ6OFc92NjVdBdAfQDMcC9YJ9ylqMuFdYm3yOeO2SvAFfslQDLMZB5pTWF-MxS6nHaY9uvxT0mYMICPVti-5JgZieZbSK6WQ4M0vuv83RYofoJy4_u686wIcOtwM0k" alt="Library" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-YLZyE70TSjjPnsdQuDy-7YbaOLEPG-mJYsusn0bnLjNkiMHPKu45433Fvp0TijLD19Ycz3ZIeexkpa4TJyn4vWG7_vb_t4MTS99UtHvlkVANGs1-pWba3q41L1LBjelxO6b9dyaJ3fWqoQqQSszHR29kLqkRZ2OIj9i4-157JRm99_SWyPnTs5CBEyB0SkFeurIYqVe-uIaXl3CKamgmC525S5bkmEfapEQ7uGr5Y7UExORfCPFZ3NidJhWNgJ4E8yhQE8JWUxY" alt="Sports Court" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ascCpymeF5BlCkEYDgE_Miihy7c7JHo-ED4WQkfDTc1GjA4tiZu2PW_vL-F_7_o6BnPxwOw-lgRyczKFb63ynEZJ4Wc-RPbf1ZF9IZuBeXQERXEvbu9-u0uFyIcp_jsvY8iJXDFfxSckNG1-pNLIgS5S7ffXybhlWTvZHEjr2EI1TUsIntsqY6hsC9euvIcnUosGPjJpbMx1GjMzyoUc6ClNgFCOHMnSvVNMSPxc_RlNAu4I9ctvnCRpepeOzlJntWQIRU27coc" alt="Laboratory" />
            </div>
            <div className="col-span-2 overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3n2T7dTonK3n-o3kyEQuuwbGpj_6r7Aeap2FKTJH6sqvLBvW2KvJ_J8nrNZwFO5C8HAZVhZ8BI58epEjgOHHH7a-7xsusxVUHtnKOHUjG8li9H3CedtoTHC4YnMfMc7ishQB7cw8I8-Jcf2UD83sZGf7Yl5YgfpXzmR-2cBeeP5B6tIMLxfDwlF-f4KfW2iyKQGQ5M1Sb34zNqsRTj8UmRmGDwAjFTjXAqStO5xP8MuP3cBxZYPZCw3NNU8y0r111aBBv3IcIhHI" alt="Computer Lab" />
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Detail Section/ Đội ngũ */}
      <section className="py-xxl bg-white">
        <div className="max-w-container-max mx-auto px-lg text-center">
          <h2 className="font-headline-lg text-headline-lg text-navy-deep mb-xl">Đội ngũ nhà giáo tâm huyết</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
            {[
              { name: 'TS. Nguyễn Thu Hà', title: 'Tổ trưởng chuyên môn Ngữ văn', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRDM2SSelfE9Y2upAsNbgPwgqUerEEfGaFZ35Kf80yiYCJGYuETb1nN78CQolesqENuPKYV0ZfgGpwA3uBJ8GnUOdJynRSwJhZf0ER1Zp1wXl8-IANnI3r6OPy8ZhbauWn4fdfPqtluYu4AVTPG4kf9K1ytMELybgy3qaMXsykU2vZVidK48i6tSEBoYT4sOlz9cSFd9eNwgQJAapVG3sNQvLDxYv5BQmHJRwcFxQY52ophHWxUD80Bi0iteScf6FBUTuDdlMFjH0' },
              { name: 'ThS. Lê Hoàng Nam', title: 'Giáo viên Toán học cơ bản', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-ODk9KvdZ0cOZ7RwongTje4eX4JzW647RJY7K29TIg_H2llMOyL9OAqN2cR6WbSb05hVNXlaWM4icGG-TgInDuUP_IJjGE7cLFOGApwwMQwgyherombd8iXP3f4-ck4_FJgupstTGkfAPp6iXGjL1HB73Onkoj5lCEhTUSEhLuqMDfiNpkBJ2s2sdpEFE7zghnEOdAbCmWW0Hk8SMH6fglcoOXWEn2dScvgKV37nSstTy_9Mcjiulx4QTED-XLK0bEPs7gAPvbBM' },
              { name: 'ThS. Trần Mỹ Linh', title: 'Giáo viên Vật lý quốc tế', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVU-RA_KQ3LJV1_h5ojqh5Intfc19z1aijfOZlZpN8FnneD_AlMKOPmR2h5oF30cW9piGovbDpT-WSZTJniIXkPI9LW65d_07I6El9Maq1v7JBiulqQ0gLl_03O7TR-H58pli7GrTrS2WH9IqDT80FMC_hjQJ-YNp7rtd1cjPSfgeSmWonCaAKH9wnqvND_vwbptjXlK_V0bmQA8Qk5hvmZu8JJbwQhqrVCBTf9Cq-LfkRa69lq5SDbU3YmVvjEyBle7ezn2LHe_k' },
              { name: 'ThS. David Harrison', title: 'Giáo viên Tiếng Anh (Bản ngữ)', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDypzrh0PBisqX611XKjo6icaT8QFqIQOwKnNIGKbtixjg8dhR_SArFbD3TG0Jag3VAmAzNQSW43COmxewk_YeLkD_Y-5_00ds0EK5G0-s-TNM2a87dFrwMLiNmmWotAmV6dODELumbHA3ibfxtGog6v61_2lHwOx-Xs3kYsfVfxQtcsIUzFj78CgpFxkdU7vJR97CRkYKhdWeP6oiTmZVxYafyJbXvExTdaXcHshSMAINYIODHoBAW7GQXoyrlmMs5RF5DvUZ3nOU' },
            ].map((teacher, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-xl mb-md aspect-[3/4]">
                  <img className="w-full h-full object-cover" src={teacher.img} alt={teacher.name} />
                </div>
                <h5 className="font-headline-md text-headline-md text-navy-deep">{teacher.name}</h5>
                <p className="text-body-sm text-text-muted">{teacher.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Detailed Section */}
      <section className="py-xxl bg-surface">
        <div className="max-w-container-max mx-auto px-lg">
          <h2 className="font-headline-lg text-headline-lg text-navy-deep text-center mb-xl">Đời sống học sinh năng động</h2>
          <div className="flex overflow-x-auto gap-lg pb-lg hide-scroll snap-x">
            {[ 
              { title: 'CLB Âm nhạc (V-Music)', desc: 'Nơi thăng hoa cảm xúc và tỏa sáng tài năng nghệ thuật.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcUlsq_89P4yPYLEQKFk9QohhFqEhsGWVqlhEy6IDPHe_L9YGrWbnKooScS4N1V3FVo8IPMMkD-_Dw76HnMwkAaZ8wU00W30cuBfi8FtNXWgK_jZ3t37thsGQzRU3Kx5pMOdBE2Diyuhlp6IdIVPsqELYy8-IPYnSZlkI1uSj8okcjFCvw3YWi_RUEhNTcEvqq1Mu8xf9iqaMSfdtiol_Q2S8LuSswZLklu2Vj4P4yIC5NM8dSGO1ZPgObxcYjIiiwTA9spBqyrvI' },
              { title: 'CLB Tranh biện (VA-Debate)', desc: 'Rèn luyện tư duy phản biện và kỹ năng thuyết trình.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1-f_Pf5kKuOb90gFF41hCXJLgSB1_0mravrugRSgH3Ns2kG_4nICFd9DMYiVehE2NIMtz5YKnoeTZYCFqAr6tbg-KL5vxKUMGkRcnST0vc1j7x8XIAw1TTOUlTX0xek8Mp8DMJiI-tVsVbcWGeK2hPtWN3phBtfx_gmwAPtSG65BMmGZGVoSGEXMz_cXTOO63zBxyAG6V4Ipj9VbUo4R7LNd_7NyEUQh64-UR7-ZDDyGFwqo3OHxhE1EDbCjGBgArJNmCEQ7vC90' },
              { title: 'CLB Thể thao (VA-Sports)', desc: 'Phát triển thể chất toàn diện qua các môn bóng đá, bóng rổ.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBS4MCnln3lTbYa_gp4sRu28FtY107mehGCfgsM2QbGdL8tRLppoNKHMBqund03f3p3dbtERbc7IZP9U3xVKWLT0KvtL2Ym7uLv6K9WCqZieZZYC4p5ljL_n5obc2w5sflhScwZ4LEgtj48l1RivdAj9lXCMGQzGkABY_6N4bFCZJ590innI9ZI-XeJDWIhvGYoyKOg6fu6oXyKsVWJceZJRS3hvEHDn0xTvwlHBhf63nXU1tD7S_vKhpFo7XHuO4I0hQyUDPS6JY' },
              { title: 'CLB STEM & Robotics', desc: 'Khám phá công nghệ tương lai và chinh phục các giải đấu.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2YB6ntvOuZDx15bPe-r4-H62urW44Uag6kY6OqdGq8sHfbEWGdiuVl7oYVP9HXjtDoZe31Q4FXWKP84-Sx0CxkkLN7triety6q0f7hSxF-tnPCq_Eg6CprU8zFfUiUkiwKjFOoxzphceCZeede-WDU5I9f7NtMnrmMGtF1KU7uG9RATQzzULS2rK8CAq8JC5ee2Au2CBJQ9n9zOgyNY8pVMgxgl9t3_pBwF60oKUDBBjIdIIv_gazodLByzgZ24Wd9CLgKgZNf6U' }
             ].map((club, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[300px] bg-white rounded-xl overflow-hidden shadow-sm snap-start">
                <img className="w-full h-48 object-cover" src={club.img} alt={club.title} />
                <div className="p-lg">
                  <h6 className="font-headline-md text-headline-md text-navy-deep mb-sm">{club.title}</h6>
                  <p className="text-body-sm text-text-muted">{club.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tuyen-sinh" className="py-xxl bg-white">
        <div className="max-w-container-max mx-auto px-lg">
          <h2 className="font-headline-lg text-headline-lg text-navy-deep text-center mb-xxl">Quy trình tuyển sinh</h2>
          <div className="relative border-l-2 border-gold-accent ml-4 md:ml-0 md:border-l-0">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-xl md:gap-md">
            {[
              { step: 1, title: 'Đăng ký trực tuyến', desc: 'Hoàn thiện form đăng ký tại website trường.' },
              { step: 2, title: 'Tư vấn tuyển sinh', desc: 'Nhận cuộc gọi tư vấn lộ trình học phù hợp.' },
              { step: 3, title: 'Kiểm tra đầu vào', desc: 'Đánh giá năng lực tư duy và trình độ ngoại ngữ.' },
              { step: 4, title: 'Phỏng vấn HS', desc: 'Tìm hiểu nguyện vọng và tính cách cá nhân.' },
              { step: 5, title: 'Thông báo kết quả', desc: 'Gửi thư mời nhập học chính thức qua Email.' },
              { step: 6, title: 'Hoàn thiện hồ sơ', desc: 'Nộp hồ sơ gốc và đóng phí nhập học.' },
            ].map(item => (
              <div key={item.step} className="relative pl-8 md:pl-0 text-left md:text-center">
                <div className="absolute -left-5 md:left-1/2 md:-translate-x-1/2 top-0 bg-navy-deep text-white w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 border-4 border-white">{item.step}</div>
                <div className="pt-14 px-sm md:px-md">
                  <h6 className="font-label-md text-navy-deep mb-xs">{item.title}</h6>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-xxl bg-surface">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="flex justify-between items-end mb-xl">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-navy-deep">Tin tức & Sự kiện</h2>
            </div>
            <Link to="/news" className="text-navy-deep font-bold border-b border-navy-deep hover:text-gold-accent hover:border-gold-accent transition-colors pb-1">Xem tất cả</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            <article className="bg-white rounded-xl overflow-hidden shadow-sm group">
              <div className="relative">
                <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXvJpt2wKSdaO7CAu_9h5S1cwg-sQohlJefrre6DiMXmrGG8lWZAmaOSy2bIK0bWhwK_2mGLI8gN_v9GZrgcQCiCrQBaE6kUXItd_BreLn96EZPm1GX47kDQO35cr9S2awRD8_xI7OdgZreESViJDfzsNm9a6N0PQAtPUx8RV0UC312UbVxFN-BiPPOYuB0r8ZhvsrC3ndwPiIu5RdBBUc_JqnDFoks7QxYExOiwPB3H1dubDrQRk5AHnKB0a2J30t6jnE6o6jyaQ" alt="Event" />
                <div className="absolute top-md left-md bg-gold-accent text-navy-deep px-sm py-xs text-xs font-bold rounded">SỰ KIỆN</div>
              </div>
              <div className="p-lg">
                <p className="text-xs text-text-muted mb-sm">15 Tháng 10, 2024</p>
                <h4 className="font-headline-md text-headline-md text-navy-deep mb-sm line-clamp-2"><Link to="/news/1" className="hover:text-gold-accent transition-colors">Lễ khai giảng năm học mới: Khát vọng vươn xa</Link></h4>
                <p className="text-body-sm text-text-muted line-clamp-3">Ngày hội chào đón tân học sinh khóa 2024 với nhiều hoạt động sôi nổi và đầy ý nghĩa...</p>
              </div>
            </article>
            <article className="bg-white rounded-xl overflow-hidden shadow-sm group">
              <div className="relative">
                <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnv2sWaw0SkX64Xd9gyA_CgD7y780mFUxoxWW8FoHcBUT2oG2mFqhj04QrbPnIkDEqe25YdXggE1dPT11zIJbuMbhsvSqK7GyQnqrpjgYF7R6_jt1sKwX3YeobxbrOCL_BeqXdcUSktZHKBbBwdU_1RfS9Q5zNxrmkoDTa3kGi4H-QKA_H0AmxaZnaZlHgp1F_aexvFR124DAAWBI-adr6I50WP07MTpyy4ghCiJ7YroWjP_GoNxc0izvTZ56CaUV_G29Q6JzGAfc" alt="News" />
                <div className="absolute top-md left-md bg-gold-accent text-navy-deep px-sm py-xs text-xs font-bold rounded">TIN TỨC</div>
              </div>
              <div className="p-lg">
                <p className="text-xs text-text-muted mb-sm">10 Tháng 10, 2024</p>
                <h4 className="font-headline-md text-headline-md text-navy-deep mb-sm line-clamp-2"><Link to="/news/1" className="hover:text-gold-accent transition-colors">Công bố danh sách học bổng học thuật đợt 1</Link></h4>
                <p className="text-body-sm text-text-muted line-clamp-3">Chúc mừng 20 học sinh xuất sắc nhận học bổng toàn phần từ quỹ tài năng trẻ VIET ACADEMY...</p>
              </div>
            </article>
            <article className="bg-white rounded-xl overflow-hidden shadow-sm group">
              <div className="relative">
                <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbtD-hjngQSV9uFPLwUYPRYQROWpl8Guw7dZlxy-pY7Osu2ong5KosBWwMTbu0QW7dsLTnJG48LZs8VMfEiDYWfAu8-33gPw1gSUvca-j4GZJbv5TSoKhrWLM9zQqbZi9uTTJUaR9L7na0aDdzQg7FPDpNAhNvSgK5LjINefhnU7cRxUy19NCpNuHL8QaCH0jveK6KegtAzJ3HesNpmkdsDc7Vb3up1lXc2_6wcKLKLphzsxH8Uf6uxy3J1be4vaofeeEbH6Wj37Y" alt="Achievement" />
                <div className="absolute top-md left-md bg-gold-accent text-navy-deep px-sm py-xs text-xs font-bold rounded">THÀNH TÍCH</div>
              </div>
              <div className="p-lg">
                <p className="text-xs text-text-muted mb-sm">05 Tháng 10, 2024</p>
                <h4 className="font-headline-md text-headline-md text-navy-deep mb-sm line-clamp-2"><Link to="/news/1" className="hover:text-gold-accent transition-colors">Đội tuyển Tranh biện đạt giải Quán quân thành phố</Link></h4>
                <p className="text-body-sm text-text-muted line-clamp-3">Vượt qua hàng trăm đội chơi, các chiến binh VA-Debate đã xuất sắc giành ngôi vị cao nhất...</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonial/Phụ huynh góp ý block */}
      <section className="py-xxl bg-navy-deep text-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-lg">
          <h2 className="font-headline-lg text-headline-lg text-center mb-xl">Phụ huynh nói gì về chúng tôi?</h2>
          <div className="relative">
            <div className="flex gap-lg overflow-x-auto hide-scroll snap-x">
              {[
                { name: 'Anh Nguyễn Hoàng Nam', title: 'Phụ huynh học sinh Lớp 11A1', quote: 'Tôi hoàn toàn yên tâm khi gửi gắm con tại VIET ACADEMY. Sự thay đổi tích cực trong tư duy và kỹ năng của con khiến tôi vô cùng bất ngờ và hài lòng.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW6v2rP6gDL6IOytyHkHFtf41OVUc7PYjilmFnFi6tu8UvXgd95SsrRl5Vo1C3papOpfyhIaiImCUiowtSCxySpIUclUkLkqHVbnYOM8FEIwymmxOZXFEsXLi8z1QguNr5pEeUPcsukk4rvfq7QvCZR6KYjMpBF2UpfVyjqKqTJ-fr5CLLmJnyYwAggQdeJ6ZzQx7M1FUO8HoFNzf76KfE61MD0lIP35SUxjNGSh0pUeI1SUTooLleGeWeJRRoF2MjbWfMfp0gN8Q' },
                { name: 'Chị Trần Bích Liên', title: 'Phụ huynh học sinh Lớp 10A5', quote: 'Môi trường học tập hiện đại, thầy cô cực kỳ tận tâm. Con tôi hào hứng đi học mỗi ngày và luôn chủ động tham gia các hoạt động ngoại khóa.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5mwg3EqTMLGLv5kjtwO4U0NnfQuZ_ry1KvQBWvuRL0oJ_EjlGWpTj6D2pSKuOGxQx_7KvWmwaxdT2WsmiLicwAJk8GPOiS1vAWFqRS0GkgLecGHc-kUPPeSWhsEFkQoPsZOoQNutRv8VfB3yA33JK2OyThFxxywPaJngF7YrPwVUoqNDsCwmI8h4e3IinEF-nxFdPC47l6nEEYzlMPYlvA59esvzKzlww8qGQfL8dOON9qT4941Et3Dmo2wjfvaArBs7LhDgNfEc' }
              ].map((testimonial, i) => (
                <div key={i} className="min-w-[85vw] md:min-w-[calc(50%-12px)] bg-white/10 p-xl rounded-xl border border-white/20 snap-center">
                  <div className="flex items-center gap-md mb-md">
                    <img className="w-16 h-16 rounded-full object-cover" src={testimonial.img} alt={testimonial.name} />
                    <div>
                      <h6 className="font-headline-md text-white">{testimonial.name}</h6>
                      <p className="text-xs opacity-70">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="italic text-body-md opacity-90">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lien-he" className="py-xxl bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -skew-x-12 translate-x-1/2 -z-10"></div>
        <div className="max-w-container-max mx-auto px-lg">
          <div className="grid md:grid-cols-2 gap-xl items-center">
            <div>
              <h2 className="font-headline-lg text-display-lg-mobile md:text-headline-lg text-navy-deep mb-md">Sẵn sàng bắt đầu hành trình tương lai?</h2>
              <p className="text-body-md text-text-muted mb-lg">Đừng bỏ lỡ cơ hội trở thành một phần của VIET ACADEMY. Hãy để lại thông tin, đội ngũ tuyển sinh sẽ liên hệ với bạn trong vòng 24 giờ.</p>
              <div className="flex items-center gap-md mb-sm">
                <Phone className="text-navy-deep w-5 h-5" />
                <span className="font-bold">Hotline: 1900 1234</span>
              </div>
              <div className="flex items-center gap-md">
                <Mail className="text-navy-deep w-5 h-5" />
                <span className="font-bold">Email: admissions@vietacademy.edu.vn</span>
              </div>
            </div>
            <div className="bg-white p-xl rounded-xl shadow-xl border border-outline-variant">
              <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold mb-xs">Họ và tên Phụ huynh/Học sinh *</label>
                  <Input type="text" className="w-full p-md rounded border border-outline-variant focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-xs">Số điện thoại *</label>
                  <Input type="tel" className="w-full p-md rounded border border-outline-variant focus:border-navy-deep focus:ring-1 focus:ring-navy-deep outline-none" placeholder="090x xxx xxx" />
                </div>
                <div className="grid grid-cols-2 gap-md">
                  <div>
                    <label className="block text-sm font-bold mb-xs">Lớp đăng ký</label>
                    <Select className="w-full p-md rounded border border-outline-variant focus:border-navy-deep outline-none bg-white">
                      <option>Khối 10</option>
                      <option>Khối 11</option>
                      <option>Khối 12</option>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-xs">Cơ sở</label>
                    <Select className="w-full p-md rounded border border-outline-variant focus:border-navy-deep outline-none bg-white">
                      <option>Cơ sở Quận 1</option>
                      <option>Cơ sở Quận 7</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-xs">Nhu cầu tư vấn cụ thể</label>
                  <Textarea className="w-full p-md rounded border border-outline-variant focus:border-navy-deep outline-none h-24" placeholder="Chia sẻ thêm thông tin bạn quan tâm..."></Textarea>
                </div>
                <Button type="submit" className="w-full bg-navy-deep text-white py-md rounded-xl font-bold hover:bg-opacity-90 transition-all uppercase tracking-wide cursor-pointer">Gửi yêu cầu tư vấn</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xxl bg-surface">
        <div className="max-w-3xl mx-auto px-lg">
          <h2 className="font-headline-lg text-headline-lg text-navy-deep text-center mb-xl">Câu hỏi thường gặp</h2>
          <div className="space-y-md">
            {[
              { id: 1, q: 'Học phí tại trường bao gồm những khoản nào?', a: 'Học phí tại VIET ACADEMY bao gồm phí giảng dạy chương trình chuẩn, chương trình Tiếng Anh tăng cường, hoạt động ngoại khóa bắt buộc và các phí cơ sở vật chất. Các khoản phí dịch vụ như bán trú, xe buýt sẽ được tính riêng theo nhu cầu.' },
              { id: 2, q: 'Trường có chính sách học bổng không?', a: 'Chúng tôi có quỹ học bổng "Thắp sáng tài năng" dành cho học sinh có thành tích học thuật xuất sắc hoặc đạt giải cao trong các kỳ thi năng khiếu cấp Tỉnh/Thành phố trở lên.' },
              { id: 3, q: 'Học sinh có thể tham gia bao nhiêu CLB?', a: 'Mỗi học sinh được khuyến khích tham gia từ 1 đến 2 câu lạc bộ để đảm bảo cân bằng giữa việc học và phát triển sở thích cá nhân.' }
            ].map(faq => (
              <div key={faq.id} className="bg-white rounded-xl border border-outline-variant overflow-hidden">
                <Button onClick={() => toggleFaq(faq.id)} className="w-full p-lg flex justify-between items-center text-left hover:bg-surface-container-low transition-colors cursor-pointer">
                  <span className="font-bold text-navy-deep">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`} />
                </Button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === faq.id ? 'max-h-40 opacity-100 p-lg pt-0' : 'max-h-0 opacity-0 px-lg'}`}>
                  <div className="text-text-muted text-body-sm">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
