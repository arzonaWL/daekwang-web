import { 
  Building2, 
  Hammer, 
  Trash2, 
  Shovel, 
  Leaf, 
  ShieldCheck, 
  ArrowUpRight 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "신축 및 증축",
      desc: "주거 시설, 상업 건축물, 공장 등 모든 종류의 신축 및 증축 공사를 수행합니다. 기획 단계부터 완성까지 철저한 품질 관리를 보장합니다.",
      icon: Building2,
    },
    {
      title: "토목 공사",
      desc: "모든 건축의 기초가 되는 토목 공사는 대광건축의 전문성입니다. 지반 강화, 배수 시설, 기초 타설 등을 완벽하게 수행합니다.",
      icon: Shovel,
    },
    {
      title: "철거 및 폐기물",
      desc: "안전하고 신속한 건물 철거와 폐기물 처리를 담당합니다. 환경 규정을 준수하며 현장을 깔끔하게 정리해 드립니다.",
      icon: Trash2,
    },
    {
      title: "인테리어 및 리모델링",
      desc: "노후된 건물을 현대적인 공간으로 재단생시킵니다. 트렌디한 디자인과 합리적인 비용으로 최고의 만족을 선사합니다.",
      icon: Hammer,
    },
    {
      title: "조경 및 외부 시설",
      desc: "건축물과 조화되는 아름다운 정원과 부대 시설을 조성합니다. 자연 친화적인 공간 디자인으로 삶의 질을 높여드립니다.",
      icon: Leaf,
    },
    {
      title: "사후 관리 및 보수",
      desc: "시공이 끝이 아닙니다. 철저한 사후 관리 시스템을 통해 건축물의 가치를 유지하고 발생할 수 있는 문제를 신속히 해결합니다.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-white/5 py-20 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">주요 사업 분야</h1>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            기획부터 설계, 시공, 사후 관리까지 모든 공정을 원스톱 시스템으로 제공합니다.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative bg-[#222] border border-brand-gold/10 p-10 hover:border-brand-gold/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-brand-gold h-5 w-5" />
                </div>
                
                <div className="p-4 bg-brand-gold/10 inline-flex rounded-sm self-start mb-8 group-hover:bg-brand-gold/20 transition-colors">
                  <service.icon className="h-10 w-10 text-brand-gold" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-auto">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gold/5 border-t border-brand-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">당신의 꿈을 실현하기 위한 첫 걸음</h2>
          <button className="bg-brand-gold text-brand-grey px-12 py-4 font-bold text-lg hover:bg-brand-gold-light transition-colors">
            무료 견적 상담 신청하기
          </button>
        </div>
      </section>
    </div>
  );
}
