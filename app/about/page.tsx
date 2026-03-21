import { User } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-white/5 py-20 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">대광건축 소개</h1>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          <p className="text-brand-gold text-xl font-medium italic">
            "신뢰와 기술로 짓고, 감동으로 완성합니다."
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                <span className="text-white font-bold text-2xl">대광건축(Living Architecture & Design)</span>은 단순한 구조물을 넘어, 
                사람과 자연이 조화를 이루는 생활 공간을 창조하는 종합 건설 기업입니다.
              </p>
              <p>
                "건축에 대한 모든 생각"이라는 슬로건 아래, 풍부한 현장 경험과 전문성을 바탕으로 
                고객의 꿈을 현실로 실현합니다.
              </p>
              <p>
                기획, 설계, 시공, 사후 관리까지 전 과정을 책임지는 원스톱 시스템을 통해 
                가장 안전하고 효율적인 건축 경험을 제공합니다. 대광건축과 함께 더 나은 미래를 지어보세요.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-brand-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                alt="건축 현장" 
                className="w-full h-full object-cover grayscale opacity-70"
              />
              <div className="absolute inset-0 bg-brand-gold/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-brand-gold/20 rounded-full mb-6">
            <User className="h-12 w-12 text-brand-gold" />
          </div>
          <h2 className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-2">Director</h2>
          <h3 className="text-3xl font-bold text-white mb-4">최유모 (CHOI YU MO)</h3>
          <p className="text-brand-gold font-medium mb-8">소장</p>
          <div className="max-w-2xl mx-auto h-[1px] bg-brand-gold/20 mb-8"></div>
          <p className="text-gray-400 italic">
            "모든 건축물에는 주인의 철학과 시공자의 진심이 담겨야 합니다.<br />
            기술을 넘어 감동을 전하는 책임 시공을 약속드립니다."
          </p>
        </div>
      </section>
    </div>
  );
}
