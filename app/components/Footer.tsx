import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-grey border-t border-brand-gold/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex flex-col mb-4">
              <span className="text-xl font-bold text-brand-gold tracking-tight">대광건축</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] -mt-1">Living Architecture & Design</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              "건축에 대한 모든 생각"<br />
              대구·경북 지역의 신뢰받는 건설 파트너로,<br />
              사람과 자연이 조화를 이루는 공간을 창조합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">바로가기</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">회사 소개</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">사업 영역</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">문의하기</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">연락처</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-gold mr-3 shrink-0" />
                <span className="text-gray-400 text-sm">대구시 북구 서변로 83-1 2층</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-gold mr-3 shrink-0" />
                <span className="text-gray-400 text-sm">010-5588-8123 / (054) 954-9683</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-gold mr-3 shrink-0" />
                <span className="text-gray-400 text-sm">cym5588@naver.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-gold/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <p>© 2026 Daekwang Architecture. All Rights Reserved.</p>
          <p>소장: 최유모 | 상호: 대광건축</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
