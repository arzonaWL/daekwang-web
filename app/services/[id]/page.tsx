import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Building2, 
  Hammer, 
  Trash2, 
  Shovel, 
  Leaf, 
  ShieldCheck, 
  ChevronLeft,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
  process: { step: string; title: string; desc: string }[];
}

const serviceData: Record<string, ServiceData> = {
  "new-construction": {
    title: "신축 및 증축",
    subtitle: "꿈을 현실로 만드는 견고한 시작",
    description: "주거 시설부터 상업용 빌딩, 공장 및 창고까지 모든 건축물의 신축과 증축을 책임집니다. 대광건축의 기술력은 안전을 최우선으로 하며, 최신 트렌드를 반영한 감각적인 설계를 지향합니다.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1503387762-592ed58e11e8?q=80&w=2086&auto=format&fit=crop",
    features: ["정밀한 지반 진단 및 기초 공사", "에너지 효율을 극대화한 단열 공법", "최신 내진 설계 기준 준수", "투명한 공정 관리 및 보고 시스템"],
    process: [
      { step: "01", title: "상담 및 기획", desc: "고객의 니즈 파악 및 법적 검토" },
      { step: "02", title: "설계 및 인허가", desc: "도면 작성 및 행정 절차 진행" },
      { step: "03", title: "본 공사 진행", desc: "체계적인 시공 및 현장 관리" },
      { step: "04", title: "완공 및 사후관리", desc: "최종 점검 및 하자 접수" },
    ]
  },
  "civil-works": {
    title: "토목 공사",
    subtitle: "건축의 기초를 다지는 가장 중요한 공정",
    description: "아무리 웅장한 건물도 토목 공사가 부실하면 모래성이나 다름없습니다. 대광건축은 수많은 현장 경험을 통해 다져진 전문 지식으로 지반 강화, 배수, 기초 토목을 완벽하게 수행합니다.",
    icon: Shovel,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    features: ["첨단 장비를 활용한 토지 측량", "완벽한 배수 체계 설계 및 시공", "옹벽 및 지지 구조물 설치", "부지 정지 및 포장 공사"],
    process: [
      { step: "01", title: "부지 조사", desc: "지하 매설물 및 지반 상태 확인" },
      { step: "02", title: "터파기 및 배수", desc: "계획고에 맞춘 굴착 및 배수망" },
      { step: "03", title: "구조물 형성", desc: "옹벽 및 기초 구조물 타설" },
      { step: "04", title: "되메우기 정돈", desc: "현장 정리 및 다짐 작업" },
    ]
  },
  "demolition": {
    title: "철거 및 폐기물",
    subtitle: "새로운 시작을 위한 안전한 안녕",
    description: "안전은 기본, 소음과 먼지를 최소화하는 섬세한 공법으로 철거를 진행합니다. 단순히 부수는 것이 아니라 새로운 건축을 위한 최적의 준비 상태를 만드는 것이 대광건축의 철거 철학입니다.",
    icon: Trash2,
    image: "https://images.unsplash.com/photo-1590480394626-821152a8273b?q=80&w=2070&auto=format&fit=crop",
    features: ["민원 방지를 위한 차단막 및 방음벽", "재활용 가능한 폐기물 분리 배출", "신속한 현장 철수 및 청소", "석면 등 유해 물질 안전 처리"],
    process: [
      { step: "01", title: "현장 보양", desc: "인접 건물 보호 및 환경 차단" },
      { step: "02", title: "내부 철거", desc: "비구조체 및 내부 마감재 제거" },
      { step: "03", title: "완전 철거", desc: "장비를 활용한 구조체 해체" },
      { step: "04", title: "폐기물 청소", desc: "반출 및 부지 정리 완료" },
    ]
  },
  "interior": {
    title: "인테리어 및 리모델링",
    subtitle: "공간에 숨을 불어넣는 디자인",
    description: "오래된 공간의 가치를 재발견합니다. 구조적 보강은 물론 트렌디한 디자인 감각을 더해 상업 공간은 매출을, 주거 공간은 삶의 질을 높여드리는 리모델링을 제안합니다.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    features: ["용도별 맞춤형 공간 레이아웃", "고급 마감재 셀렉션 가이드", "조명 및 가구 조화 시뮬레이션", "철저한 결로 및 누수 방지 공사"],
    process: [
      { step: "01", title: "현장 미팅", desc: "공간 분석 및 디자인 방향 설정" },
      { step: "02", title: "디자인 제안", desc: "3D 모델링 및 자재 선정" },
      { step: "03", title: "리모델링 시공", desc: "철저한 감리를 통한 공사 진행" },
      { step: "04", title: "스타일링 완성", desc: "가구 배치 및 최종 마감 확인" },
    ]
  },
  "landscaping": {
    title: "조경 및 외부 시설",
    subtitle: "자연과 호흡하는 건축의 완성",
    description: "건물은 그 주변 환경과 어우러질 때 가장 아름답습니다. 대광건축은 식재, 수경 시설, 데크 설치 등 다양한 외부 시설 공사를 통해 자연 친화적인 힐링 공간을 창조합니다.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1585127622615-5606d3330cb9?q=80&w=2062&auto=format&fit=crop",
    features: ["기후에 맞는 추천 수종 식재", "프라이버시를 보호하는 담장 디자인", "카페 같은 야외 데크 및 파고라", "야간 경관 조명 시스템 설치"],
    process: [
      { step: "01", title: "대지 분석", desc: "일조량 배수 토질 등 지형 확인" },
      { step: "02", title: "녹지 설계", desc: "수목 배치 및 외부 시설물 평면도" },
      { step: "03", title: "식재 및 시공", desc: "수목 식재 및 시설물 설치" },
      { step: "04", title: "생육 관리", desc: "초기 안착을 위한 집중 관리" },
    ]
  },
  "maintenance": {
    title: "사후 관리 및 보수",
    subtitle: "시간이 흘러도 변함없는 가치",
    description: "시공보다 중요한 것이 관리입니다. 대광건축은 완공 후에도 정기적인 점검과 신속한 보수 서비스를 통해 건축물이 최상의 상태를 유지할 수 있도록 지원하는 평생 파트너가 되어 드립니다.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    features: ["긴급 보수 전담팀 상시 운영", "건물 연식별 맞춤형 점검 리포트", "방수 및 외벽 보수 특화 기술", "스마트 홈 및 자동화 설비 유지보수"],
    process: [
      { step: "01", title: "서비스 접수", desc: "전화 혹은 온라인을 통한 하자 상담" },
      { step: "02", title: "현장 실사", desc: "전문 엔지니어의 상시 점검" },
      { step: "03", title: "정밀 보수", desc: "최신 장비를 활용한 원인 해결" },
      { step: "04", title: "이력 관리", desc: "조치 결과 기록 및 향후 예방" },
    ]
  }
};

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = serviceData[id];

  if (!data) {
    notFound();
  }

  const Icon = data.icon;

  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-grey via-brand-grey/60 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link 
            href="/services" 
            className="inline-flex items-center text-brand-gold hover:text-brand-gold-light mb-8 transition-colors group"
          >
            <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            사업 영역 목록으로
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-brand-gold text-brand-grey rounded-sm">
              <Icon className="h-8 w-8" />
            </div>
            <h2 className="text-brand-gold font-bold tracking-widest uppercase">Service Detail</h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light italic">
            "{data.subtitle}"
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left: Description & Features */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="w-8 h-[2px] bg-brand-gold mr-4"></span>
                서비스 상세 정보
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                {data.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-sm border border-brand-gold/5">
                    <CheckCircle2 className="h-6 w-6 text-brand-gold shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Process Sidebar */}
            <div className="bg-[#222] p-8 rounded-sm border border-brand-gold/10">
              <h3 className="text-xl font-bold text-white mb-8">시공 진행 프로세스</h3>
              <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-brand-gold/20"></div>
                
                {data.process.map((p, i) => (
                  <div key={i} className="relative flex items-start gap-6 group">
                    <div className="w-8 h-8 rounded-full bg-brand-grey border border-brand-gold flex items-center justify-center text-[10px] font-bold text-brand-gold z-10 group-hover:bg-brand-gold group-hover:text-brand-grey transition-colors">
                      {p.step}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{p.title}</h4>
                      <p className="text-gray-500 text-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-20 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            {data.title} 프로젝트를 계획 중이신가요?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            전문적인 상담을 통해 가장 효율적이고 안전한 건축 솔루션을 제안해 드립니다. 
            상담은 무료이며 정직하게 답변해 드리겠습니다.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-brand-gold text-brand-grey px-10 py-4 font-bold rounded-sm hover:bg-brand-gold-light transition-colors"
          >
            지금 바로 견적 문의하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
