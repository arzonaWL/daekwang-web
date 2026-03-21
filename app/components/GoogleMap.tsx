const GoogleMap = () => {
  const name = "대광건축";
  const address = "대구광역시 북구 서변로 83-1 2층";
  const encodedQuery = encodeURIComponent(`${name}, ${address}`);
  
  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden border border-brand-gold/20 shadow-xl">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={`https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        style={{ filter: "grayscale(0.8) contrast(1.2)" }}
        title="대광건축 위치"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
