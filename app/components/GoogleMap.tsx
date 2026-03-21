import { Map as MapIcon } from "lucide-react";

const GoogleMap = () => {
  const address = "대구광역시 북구 서변로 83-1 2층";
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <div className="relative w-full h-[450px] rounded-lg overflow-hidden border border-brand-gold/20 shadow-xl group">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        style={{ filter: "grayscale(0.8) contrast(1.2)" }}
        title="대광건축 위치"
      ></iframe>
      
      {/* Naver Map Overlay Button */}
      <div className="absolute inset-0 bg-brand-grey/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <a 
            href="https://map.naver.com/v5/search/대구광역시%20북구%20서변로%2083-1%202층" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-gold text-brand-grey px-6 py-3 font-bold rounded-sm flex items-center gap-2 hover:bg-brand-gold-light transition-colors shadow-2xl"
          >
            <MapIcon className="h-5 w-5" />
            네이버 지도로 열기
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
