import { ArrowRight, Calendar, ChevronRight, Clock, Facebook, Share2, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
export function NewsDetail() {
  return (
    <main className="pt-[100px] pb-xxl">
      <article className="max-w-[900px] mx-auto px-md md:px-0">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-xs mb-lg text-body-sm text-on-surface-variant font-label-md">
          <Link to="/" className="hover:text-navy-deep">Trang chủ</Link>
          <ChevronRight className="w-4 h-4 text-outline" />
          <Link to="/news" className="hover:text-navy-deep">Tin tức</Link>
          <ChevronRight className="w-4 h-4 text-outline" />
          <span className="text-on-surface truncate">Thông tin chi tiết</span>
        </nav>

        {/* Header Section */}
        <header className="mb-xl">
          <div className="flex items-center gap-sm mb-md flex-wrap">
            <span className="bg-gold-accent text-navy-deep px-sm py-[2px] rounded-sm font-label-sm uppercase tracking-wider">Học thuật</span>
            <span className="text-body-sm text-on-surface-variant flex items-center gap-xs font-label-md">
              <Calendar className="w-4 h-4" />
              24 Tháng 10, 2024
            </span>
            <span className="text-body-sm text-on-surface-variant flex items-center gap-xs font-label-md">
              <Clock className="w-4 h-4" />
              5 phút đọc
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg md:text-[40px] text-navy-deep mb-lg leading-tight">
            Việt Academy Vinh Dự Nhận Giải Thưởng "Cơ sở Giáo dục Sáng tạo 2024" Tại Diễn Đàn Giáo Dục Khu Vực
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed border-l-4 border-navy-deep pl-lg py-sm">
            Sự công nhận này khẳng định cam kết của Việt Academy trong việc ứng dụng công nghệ hiện đại và phương pháp giảng dạy tiên tiến nhằm nâng cao chất lượng trải nghiệm học tập của học sinh.
          </p>
        </header>

        {/* Featured Image */}
        <figure className="mb-xl rounded-xl overflow-hidden shadow-lg">
          <img className="w-full h-auto object-cover max-h-[500px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWIi_VwzhvSqZhwWxfxMK001ZiU1S-RjrP3bIeVCwLuYDi0z-rQf3FKb0DdcaCy5BbgVwihnWOU5uGIPf-tZ6Ch0PRiGniVeNCx8n6JhCpWudzoQas4enVEeUR4K_RqzX8a3kvEdReiOaACZnZ4q2yqmg2-g2zqF4blMPtIxih9k9MQrn89uJp55lXnUORXuWgd1QImh9iXo4pw0UDDKbOcoQXpa0SfMh028iFV_lr-Ym8Xb0pzJgI27Mv7rdJB-Z4n7L2mg3epbA" alt="Lễ trao giải giáo dục" />
          <figcaption className="bg-surface-container-low p-sm text-center text-body-sm text-on-surface-variant italic">
            Đại diện Việt Academy nhận giải thưởng tại khán phòng quốc tế
          </figcaption>
        </figure>

        {/* Main Content (Rich Text) */}
        <div className="rich-text-content text-on-surface font-body-md text-[16px]">
          <p>
            Vừa qua, tại Diễn đàn Giáo dục Khu vực được tổ chức thường niên, <strong>Việt Academy</strong> đã vinh dự được xướng tên ở hạng mục "Cơ sở Giáo dục Sáng tạo của Năm". Đây là giải thưởng danh giá dành cho những đơn vị có đóng góp đột phá trong việc đổi mới phương pháp giảng dạy và tích hợp công nghệ vào quy trình vận hành trường học.
          </p>
          
          <h2>Hành trình Đổi mới Không ngừng</h2>
          
          <p>
            Trong suốt hai năm qua, nhà trường đã triển khai thành công hệ thống phòng Lab hiện đại, nơi học sinh có thể trải nghiệm công nghệ thực tế ảo (VR) và thực tế tăng cường (AR) trong các tiết học Khoa học và Lịch sử. Điều này giúp các bài học trở nên sống động, khơi gợi niềm đam mê khám phá của các em học sinh.
          </p>

          <blockquote>
            "Chúng tôi tin rằng giáo dục không chỉ là việc truyền tải kiến thức, mà là tạo ra một môi trường để học sinh tự tin sáng tạo và giải quyết vấn đề. Giải thưởng này là thành quả của cả tập thể giáo viên và nhân viên Việt Academy."
          </blockquote>

          <p>
            Bên cạnh cơ sở vật chất, đội ngũ giáo viên của nhà trường cũng thường xuyên tham gia các khóa đào tạo chuyên sâu về tư duy thiết kế (Design Thinking) để áp dụng vào giáo án hàng ngày. Việc này giúp cá nhân hóa lộ trình học tập, đảm bảo mỗi học sinh đều được phát huy tối đa tiềm năng riêng biệt.
          </p>

          <div className="my-xl grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="rounded-lg overflow-hidden h-[300px]">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjAj8Mr4fCSdB6IKDlDrUR1GvtR9LTxlIEQ4d_EoCL1tUPcPFeyLJdKA12H__eLiP_IjRsNybl4rs932vYPA6jDzj7GfCJ735LmSf62LlML4ppluQXIFbxxKdmQaM5SdSRwQ18c_8VhXrwml8DgnU3KTad3ya4xHGUfp9M48xMhEVcB8OJqYB19F-HSSKudRhHbU4HFjOCP-qCouHzboFp4x-es5p_INU-W12m7mJlrkI4odsZ4TSIR2HT9v00PAHtGWGXbtcN0wo" alt="Phòng thí nghiệm hiện đại" />
            </div>
            <div className="rounded-lg overflow-hidden h-[300px]">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmjH0iajSx7XDJlBxIGZn0GEjXEZ5_ZEwhY0ZHr9BJnVhFO4zZaJwNY_oJxywMsjTDnefpij0syBpoI2uXusbe0lAgpGXc4RO8uTFrOiyBNkDAEE4QClnZLgU9lh1KrnyLbojfWlwFiC0drh2R7uCbTZN3iKnbeErPxN7GVhWnHTraF0Q-HkROpV14tg4o5UXHOXB3dt-wsVE2v6BGGRsQJtffalYXBDHWPhfzR6Fdy715omro-7y-L74Z0WxvlMTNgEXa6k9l290" alt="Học sinh trao đổi" />
            </div>
          </div>

          <h2>Tầm nhìn 2025</h2>

          <p>
            Phát huy những thành công đã đạt được, Việt Academy dự kiến sẽ mở rộng quy mô chương trình đào tạo quốc tế, kết nối với nhiều đối tác đại học hàng đầu thế giới để tạo điều kiện cho học sinh tiếp cận với các suất học bổng danh giá.
          </p>

          <p>
            Chúng tôi xin gửi lời cảm ơn chân thành đến Quý Phụ huynh đã luôn tin tưởng và đồng hành cùng nhà trường trong hành trình kiến tạo tương lai cho thế hệ trẻ.
          </p>
        </div>

        {/* Share and Tags */}
        <footer className="mt-xl pt-lg border-t border-outline-variant">
          <div className="flex flex-wrap justify-between items-center gap-md">
            <div className="flex items-center gap-sm">
              <span className="font-label-md text-navy-deep font-bold">Tags:</span>
              <a href="#" className="bg-surface-container-high px-md py-[4px] rounded-full text-body-sm hover:bg-gold-accent transition-colors">#GiaoDuc</a>
              <a href="#" className="bg-surface-container-high px-md py-[4px] rounded-full text-body-sm hover:bg-gold-accent transition-colors">#GiaiThuong</a>
              <a href="#" className="bg-surface-container-high px-md py-[4px] rounded-full text-body-sm hover:bg-gold-accent transition-colors">#VietAcademy</a>
            </div>
            <div className="flex items-center gap-md">
              <span className="font-label-md text-navy-deep font-bold">Chia sẻ:</span>
              <Button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:text-white hover:bg-navy-deep transition-all">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:text-white hover:bg-[#1877F2] transition-all">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </footer>
      </article>

      {/* Related News Section */}
      <section className="max-w-container-max mx-auto mt-xxl px-md">
        <div className="flex items-center justify-between mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-navy-deep">Tin liên quan</h2>
          <Link to="/news" className="text-navy-deep font-label-md flex items-center gap-xs hover:gap-sm transition-all font-bold">
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Related Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc9ZgerMoMa4xqZQNRtYXy8PiVvQwCE1hOM2dR3ntLKKRE1eKz3dIE7oqqVOE0AlQO5s4gNnIgAYXbO7enveaCqPd2mYBosDxNX8hofW-PqM0rknyJ8cvviLQbw8yqVibOnPc6QYcvJECbUJxbXiT0Evd1m9damotohoSPenXTR8Ij_3xt6CiuGnuyqJMN0y_eF29FlywkULbSvgeoq0J64dOVSXbdSQOy6M4b82fDm_4CCqsiRbL6GYnvQpy97FiDVWWZUDfLzp8" alt="Tin tức liên quan 1" />
              <div className="absolute top-md left-md bg-gold-accent text-navy-deep px-sm py-[2px] rounded-sm text-label-sm font-bold">
                SỰ KIỆN
              </div>
            </div>
            <div className="p-lg">
              <span className="text-body-sm text-on-surface-variant block mb-sm">15 Tháng 10, 2024</span>
              <h3 className="font-headline-md text-headline-md text-navy-deep mb-md line-clamp-2 hover:text-gold-accent transition-colors cursor-pointer text-lg">
                Lễ khai giảng năm học mới: Khởi đầu hành trình chinh phục tri thức
              </h3>
              <p className="text-body-sm text-on-surface-variant line-clamp-3">
                Không khí tưng bừng tràn ngập khắp khuôn viên Việt Academy khi hàng ngàn học sinh cùng hội ngộ cho ngày đầu năm học...
              </p>
            </div>
          </div>
          
          {/* Related Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSLzmUhc5BK-oF0zcnyRLcMDpTktVLPZY4e1_fx6TTVx6Ug9MI1Rrz9edmxkR9IdQ4CFJmx55PikaGaYpiIwEI-Yg8mJ50zCbVBF8vZa4zDAEazVl1KJCDptVCZxPHcO4GQ0Dnp4ScfC2Qu-ls5TSszHId5-NQanzJr1ran7i9PyNfAwP-3890PDZSJ0iMZ0mra17U6TIaKJ65FpwXsq6PXtP7R593PQ62tXfTfQzBmWyob8PyabglsY4oRHhMX0xeWGAqYZ55DY8" alt="Tin tức liên quan 2" />
              <div className="absolute top-md left-md bg-gold-accent text-navy-deep px-sm py-[2px] rounded-sm text-label-sm font-bold">
                PHỎNG VẤN
              </div>
            </div>
            <div className="p-lg">
              <span className="text-body-sm text-on-surface-variant block mb-sm">10 Tháng 10, 2024</span>
              <h3 className="font-headline-md text-headline-md text-navy-deep mb-md line-clamp-2 hover:text-gold-accent transition-colors cursor-pointer text-lg">
                Gặp gỡ Hiệu trưởng: Định hướng phát triển bền vững trong giáo dục
              </h3>
              <p className="text-body-sm text-on-surface-variant line-clamp-3">
                Trong buổi phỏng vấn độc quyền, thầy Hiệu trưởng đã chia sẻ về những giá trị cốt lõi và sứ mệnh của nhà trường...
              </p>
            </div>
          </div>

          {/* Related Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjO1edhWktiA0sV0T-exLiREp6RXALdgSG2igk7_UggC4-cAIHxLlTalLasXUa6jBYyt9Bt81JWVSRQcYb2kSrt8BFHrF1iwD5RhiYD0eE5mDciA5w_CZpDHpctF6L63Q4COWYcSpystG6_lELBs6zlihhyG8PuQTGM0WxSNwhCTcMzjJ62_wT1wu4tOrDYLOdqZggClJt6EhdQtlpVPfMIWxn-vTDB5_Pjga6V5ROoOyZnj6zy0GQR9V6PVCgs6lhodzNsVhKoJA" alt="Tin tức liên quan 3" />
              <div className="absolute top-md left-md bg-gold-accent text-navy-deep px-sm py-[2px] rounded-sm text-label-sm font-bold">
                TUYỂN SINH
              </div>
            </div>
            <div className="p-lg">
              <span className="text-body-sm text-on-surface-variant block mb-sm">05 Tháng 10, 2024</span>
              <h3 className="font-headline-md text-headline-md text-navy-deep mb-md line-clamp-2 hover:text-gold-accent transition-colors cursor-pointer text-lg">
                Thông báo tuyển sinh bổ sung cho học kỳ II năm học 2024-2025
              </h3>
              <p className="text-body-sm text-on-surface-variant line-clamp-3">
                Nhằm đáp ứng nhu cầu học tập chất lượng cao, Việt Academy chính thức mở đợt tuyển sinh bổ sung cho các khối lớp...
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NewsDetail;
