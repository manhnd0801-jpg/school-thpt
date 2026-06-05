import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Input } from '@/components/ui';
export function NewsList() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const news = [
    {
      id: 1,
      title: 'Việt Academy Vinh Dự Nhận Giải Thưởng "Cơ sở Giáo dục Sáng tạo 2024" Tại Diễn Đàn Giáo Dục Khu Vực',
      date: '24 Tháng 10, 2024',
      category: 'Học thuật',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWIi_VwzhvSqZhwWxfxMK001ZiU1S-RjrP3bIeVCwLuYDi0z-rQf3FKb0DdcaCy5BbgVwihnWOU5uGIPf-tZ6Ch0PRiGniVeNCx8n6JhCpWudzoQas4enVEeUR4K_RqzX8a3kvEdReiOaACZnZ4q2yqmg2-g2zqF4blMPtIxih9k9MQrn89uJp55lXnUORXuWgd1QImh9iXo4pw0UDDKbOcoQXpa0SfMh028iFV_lr-Ym8Xb0pzJgI27Mv7rdJB-Z4n7L2mg3epbA',
      desc: 'Sự công nhận này khẳng định cam kết của Việt Academy trong việc ứng dụng công nghệ hiện đại và phương pháp giảng dạy tiên tiến nhằm nâng cao chất lượng trải nghiệm học tập của học sinh.'
    },
    {
      id: 2,
      title: 'Lễ khai giảng năm học mới: Khởi đầu hành trình chinh phục tri thức',
      date: '15 Tháng 10, 2024',
      category: 'Sự kiện',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc9ZgerMoMa4xqZQNRtYXy8PiVvQwCE1hOM2dR3ntLKKRE1eKz3dIE7oqqVOE0AlQO5s4gNnIgAYXbO7enveaCqPd2mYBosDxNX8hofW-PqM0rknyJ8cvviLQbw8yqVibOnPc6QYcvJECbUJxbXiT0Evd1m9damotohoSPenXTR8Ij_3xt6CiuGnuyqJMN0y_eF29FlywkULbSvgeoq0J64dOVSXbdSQOy6M4b82fDm_4CCqsiRbL6GYnvQpy97FiDVWWZUDfLzp8',
      desc: 'Không khí tưng bừng tràn ngập khắp khuôn viên Việt Academy khi hàng ngàn học sinh cùng hội ngộ cho ngày đầu năm học...'
    },
    {
      id: 3,
      title: 'Gặp gỡ Hiệu trưởng: Định hướng phát triển bền vững trong giáo dục',
      date: '10 Tháng 10, 2024',
      category: 'Phỏng vấn',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSLzmUhc5BK-oF0zcnyRLcMDpTktVLPZY4e1_fx6TTVx6Ug9MI1Rrz9edmxkR9IdQ4CFJmx55PikaGaYpiIwEI-Yg8mJ50zCbVBF8vZa4zDAEazVl1KJCDptVCZxPHcO4GQ0Dnp4ScfC2Qu-ls5TSszHId5-NQanzJr1ran7i9PyNfAwP-3890PDZSJ0iMZ0mra17U6TIaKJ65FpwXsq6PXtP7R593PQ62tXfTfQzBmWyob8PyabglsY4oRHhMX0xeWGAqYZ55DY8',
      desc: 'Trong buổi phỏng vấn độc quyền, thầy Hiệu trưởng đã chia sẻ về những giá trị cốt lõi và sứ mệnh của nhà trường...'
    },
    {
      id: 4,
      title: 'Thông báo tuyển sinh bổ sung cho học kỳ II năm học 2024-2025',
      date: '05 Tháng 10, 2024',
      category: 'Tuyển sinh',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjO1edhWktiA0sV0T-exLiREp6RXALdgSG2igk7_UggC4-cAIHxLlTalLasXUa6jBYyt9Bt81JWVSRQcYb2kSrt8BFHrF1iwD5RhiYD0eE5mDciA5w_CZpDHpctF6L63Q4COWYcSpystG6_lELBs6zlihhyG8PuQTGM0WxSNwhCTcMzjJ62_wT1wu4tOrDYLOdqZggClJt6EhdQtlpVPfMIWxn-vTDB5_Pjga6V5ROoOyZnj6zy0GQR9V6PVCgs6lhodzNsVhKoJA',
      desc: 'Nhằm đáp ứng nhu cầu học tập chất lượng cao, Việt Academy chính thức mở đợt tuyển sinh bổ sung cho các khối lớp...'
    },
    {
      id: 5,
      title: 'Công bố danh sách học bổng học thuật đợt 1 năm 2024',
      date: '01 Tháng 10, 2024',
      category: 'Tin tức',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnv2sWaw0SkX64Xd9gyA_CgD7y780mFUxoxWW8FoHcBUT2oG2mFqhj04QrbPnIkDEqe25YdXggE1dPT11zIJbuMbhsvSqK7GyQnqrpjgYF7R6_jt1sKwX3YeobxbrOCL_BeqXdcUSktZHKBbBwdU_1RfS9Q5zNxrmkoDTa3kGi4H-QKA_H0AmxaZnaZlHgp1F_aexvFR124DAAWBI-adr6I50WP07MTpyy4ghCiJ7YroWjP_GoNxc0izvTZ56CaUV_G29Q6JzGAfc',
      desc: 'Chúc mừng 20 học sinh xuất sắc nhận học bổng toàn phần từ quỹ tài năng trẻ VIET ACADEMY...'
    },
    {
      id: 6,
      title: 'Đội tuyển Tranh biện đạt giải Quán quân thành phố',
      date: '28 Tháng 09, 2024',
      category: 'Thành tích',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbtD-hjngQSV9uFPLwUYPRYQROWpl8Guw7dZlxy-pY7Osu2ong5KosBWwMTbu0QW7dsLTnJG48LZs8VMfEiDYWfAu8-33gPw1gSUvca-j4GZJbv5TSoKhrWLM9zQqbZi9uTTJUaR9L7na0aDdzQg7FPDpNAhNvSgK5LjINefhnU7cRxUy19NCpNuHL8QaCH0jveK6KegtAzJ3HesNpmkdsDc7Vb3up1lXc2_6wcKLKLphzsxH8Uf6uxy3J1be4vaofeeEbH6Wj37Y',
      desc: 'Vượt qua hàng trăm đội chơi, các chiến binh VA-Debate đã xuất sắc giành ngôi vị cao nhất...'
    }
  ];

  return (
    <main className="pt-[100px] mb-xxl">
      {/* Title Section */}
      <section className="bg-surface py-xxl border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-lg text-center">
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-navy-deep mb-sm">Tin tức & Sự kiện</h1>
          <p className="font-body-md text-text-muted max-w-2xl mx-auto">Cập nhật nhanh nhất những thông tin mới, hoạt động nổi bật và thành tựu đáng tự hào của thầy và trò trường Việt Academy.</p>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-lg mt-xl flex flex-col md:flex-row gap-xl">
        
        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {news.map((item) => (
              <article key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm group border border-outline-variant hover:shadow-md transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.image} alt={item.title} />
                  <div className="absolute top-md left-md bg-gold-accent text-navy-deep px-sm py-[2px] rounded-sm text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="p-lg">
                  <span className="text-xs font-bold text-text-muted block mb-sm">{item.date}</span>
                  <h3 className="font-headline-md text-[18px] font-bold text-navy-deep mb-sm line-clamp-2">
                    <Link to={`/news/${item.id}`} className="hover:text-gold-accent transition-colors">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-body-sm text-text-muted line-clamp-3 mb-md">
                    {item.desc}
                  </p>
                  <Link to={`/news/${item.id}`} className="inline-flex items-center gap-xs text-sm font-bold text-navy-deep hover:text-gold-accent transition-colors">
                    Đọc tiếp <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-xl">
            <Button className="border border-navy-deep text-navy-deep px-xl py-sm rounded-lg hover:bg-navy-deep hover:text-white transition-colors font-bold font-label-md cursor-pointer">
              Tải thêm tin tức
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:w-1/4 space-y-xl">
          <div className="bg-surface p-lg rounded-xl border border-outline-variant">
            <h4 className="font-headline-md font-bold text-navy-deep mb-md border-b border-outline-variant pb-sm">Tìm kiếm</h4>
            <div className="relative">
              <Input type="text" placeholder="Nhập từ khóa..." className="w-full p-sm pr-xl rounded border border-outline-variant focus:border-navy-deep outline-none" />
              <Search className="w-5 h-5 absolute right-sm top-1/2 -translate-y-1/2 text-text-muted" />
            </div>
          </div>

          <div className="bg-surface-container-low p-lg rounded-xl">
            <h4 className="font-headline-md font-bold text-navy-deep mb-md border-b border-outline-variant pb-sm">Danh mục</h4>
            <ul className="space-y-sm">
              <li><Button onClick={() => setActiveCategory('Tất cả')} className={`w-full flex justify-between items-center text-left hover:text-navy-deep hover:translate-x-1 transition-all cursor-pointer ${activeCategory === 'Tất cả' ? 'font-bold text-navy-deep' : 'text-text-muted'}`}><span>Tất cả</span> <span className="bg-white px-2 py-1 rounded text-xs opacity-70">42</span></Button></li>
              <li><Button onClick={() => setActiveCategory('Tin nhà trường')} className={`w-full flex justify-between items-center text-left hover:text-navy-deep hover:translate-x-1 transition-all cursor-pointer ${activeCategory === 'Tin nhà trường' ? 'font-bold text-navy-deep' : 'text-text-muted'}`}><span>Tin nhà trường</span> <span className="bg-white px-2 py-1 rounded text-xs opacity-70">15</span></Button></li>
              <li><Button onClick={() => setActiveCategory('Sự kiện sắp tới')} className={`w-full flex justify-between items-center text-left hover:text-navy-deep hover:translate-x-1 transition-all cursor-pointer ${activeCategory === 'Sự kiện sắp tới' ? 'font-bold text-navy-deep' : 'text-text-muted'}`}><span>Sự kiện sắp tới</span> <span className="bg-white px-2 py-1 rounded text-xs opacity-70">5</span></Button></li>
              <li><Button onClick={() => setActiveCategory('Thành tích học sinh')} className={`w-full flex justify-between items-center text-left hover:text-navy-deep hover:translate-x-1 transition-all cursor-pointer ${activeCategory === 'Thành tích học sinh' ? 'font-bold text-navy-deep' : 'text-text-muted'}`}><span>Thành tích học sinh</span> <span className="bg-white px-2 py-1 rounded text-xs opacity-70">12</span></Button></li>
              <li><Button onClick={() => setActiveCategory('Tuyển sinh')} className={`w-full flex justify-between items-center text-left hover:text-navy-deep hover:translate-x-1 transition-all cursor-pointer ${activeCategory === 'Tuyển sinh' ? 'font-bold text-navy-deep' : 'text-text-muted'}`}><span>Tuyển sinh</span> <span className="bg-white px-2 py-1 rounded text-xs opacity-70">10</span></Button></li>
            </ul>
          </div>
          
          <div className="bg-navy-deep text-white p-lg rounded-xl">
            <h4 className="font-headline-md font-bold mb-sm">Đăng ký nhận tin</h4>
            <p className="text-body-sm opacity-80 mb-md">Nhận các thông tin mới nhất và sự kiện sắp tới từ VIET ACADEMY qua email.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-sm">
              <Input type="email" placeholder="Địa chỉ Email" className="w-full p-sm rounded bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-gold-accent" />
              <Button type="submit" className="w-full bg-gold-accent text-navy-deep p-sm rounded font-bold hover:bg-white transition-colors cursor-pointer">Đăng ký</Button>
            </form>
          </div>
        </aside>

      </section>
    </main>
  );
}

export default NewsList;
