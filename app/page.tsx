import Link from "next/link";
import { ArrowRight, Building2, Hammer, Trash2, Shovel } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-grey/80 backdrop-blur-[2px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-gold font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Living Architecture & Design
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            대광건축
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light mb-8 italic">
            "건축에 대한 모든 생각"
          </p>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
            대구·경북 지역의 신뢰받는 건설 파트너.<br />
            기획부터 시공, 철거까지 토탈 솔루션을 제공합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-grey font-bold rounded-sm transition-all flex items-center justify-center gap-2 group"
            >
              시공 실적 보기
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-grey font-bold rounded-sm transition-all"
            >
              견적 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Services Summary Section */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">종합 건설 솔루션</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              건축, 토목, 철거 등 모든 공정을 하나의 창구에서 해결합니다. 
              풍부한 경험과 기술력으로 최상의 결과물을 약속드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "건축 공사", icon: Building2, desc: "주거 및 상업 시설 신축" },
              { title: "토목 공사", icon: Shovel, desc: "기초 및 지반 강화 공사" },
              { title: "철거 공사", icon: Trash2, desc: "안전하고 신속한 철거" },
              { title: "인테리어", icon: Hammer, desc: "공간의 가치를 높이는 디자인" },
            ].map((service, idx) => (
              <div key={idx} className="p-8 border border-brand-gold/10 bg-white/5 hover:border-brand-gold/40 transition-all group">
                <service.icon className="h-10 w-10 text-brand-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
