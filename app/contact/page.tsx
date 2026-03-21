import GoogleMap from "../components/GoogleMap";
import { Phone, Mail, MapPin, Building, User } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    { label: "상호", value: "대광건축", icon: Building },
    { label: "소장", value: "최유모 (CHOI YU MO)", icon: User },
    { label: "주소", value: "대구시 북구 서변로 83-1 2층", icon: MapPin },
    { label: "휴대폰", value: "010-5588-8123", icon: Phone },
    { label: "전화", value: "(054) 954-9683", icon: Phone },
    { label: "이메일", value: "cym5588@naver.com", icon: Mail },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-white/5 py-20 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">문의하기</h1>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            견적 문의 및 방문 상담을 원하시면 언제든지 연락 주시기 바랍니다.<br />
            신속하고 친절하게 답변해 드리겠습니다.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Business Card Interpretation */}
            <div className="flex flex-col gap-10">
              <div className="relative bg-white text-brand-grey p-8 md:p-10 shadow-2xl rounded-sm md:aspect-[1.6/1] flex flex-col justify-between overflow-hidden group min-h-[320px]">
                {/* Micro-shimmer effect */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-gray-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
                  <div className="flex flex-col items-center sm:items-start lg:items-center">
                    <div className="flex items-end font-black text-4xl tracking-tighter text-brand-grey">
                      <span>L</span>
                      <span className="text-brand-gold text-5xl -mx-1 mb-[-2px]">A</span>
                      <span>D</span>
                    </div>
                    <span className="text-[8px] font-bold tracking-[0.05em] mt-2">건축에대한모든생각</span>
                  </div>
                  
                  <div className="text-right w-full sm:w-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">대광 건축</h3>
                    <p className="text-[9px] sm:text-[10px] font-medium text-gray-500 tracking-[0.15em]">LIVING ARCHITECTURE & DESIGN</p>
                  </div>
                </div>

                <div className="flex flex-col items-end mt-8 sm:mt-12">
                   <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                     <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-brand-gold pb-1">Director</span>
                     <span className="text-2xl sm:text-3xl font-bold">최 유 모</span>
                   </div>
                   
                   <div className="space-y-1.5 text-right font-medium text-xs sm:text-sm text-gray-600">
                     <p>
                       <span className="text-[10px] text-gray-400 mr-2 uppercase tracking-tighter">Mobile:</span> 
                       <a href="tel:010-5588-8123" className="hover:text-brand-gold transition-colors">010-5588-8123</a>
                     </p>
                     <p>
                       <span className="text-[10px] text-gray-400 mr-2 uppercase tracking-tighter">E-Mail:</span> 
                       <a href="mailto:cym5588@naver.com" className="hover:text-brand-gold transition-colors">cym5588@naver.com</a>
                     </p>
                     <div className="h-2 sm:h-4"></div>
                     <p>
                       <span className="text-[10px] text-gray-400 mr-2 uppercase tracking-tighter">Tel:</span> 
                       <a href="tel:054-954-9683" className="hover:text-brand-gold transition-colors">(054) 954-9683</a>
                     </p>
                     <p className="whitespace-nowrap sm:whitespace-normal text-[11px] sm:text-sm">
                       <a 
                         href="https://map.naver.com/v5/search/대구광역시%20북구%20서변로%2083-1%202층" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="hover:text-brand-gold transition-colors"
                       >
                         대구시 북구 서변로 83-1 2층
                       </a>
                     </p>
                   </div>
                </div>
              </div>
              
              <div className="p-8 border border-brand-gold/20 bg-brand-gold/5 rounded-sm">
                <p className="text-gray-300 leading-relaxed italic">
                  "명함에 담긴 신뢰를 바탕으로, 고객님의 모든 건축적 고민을 해결해 드립니다. 
                  언제든 편하게 연락 주십시오."
                </p>
              </div>
            </div>

            {/* Map Section */}
            <div className="h-full">
              <h2 className="text-2xl font-bold text-white mb-8 lg:hidden font-sans">오시는 길</h2>
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
