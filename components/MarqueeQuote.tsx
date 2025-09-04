import React from 'react';

const MarqueeQuote: React.FC = () => {
  // Numbers 0-9 in Japanese/Chinese, Korean, and Arabic
  const numbers = "・ 零 一 二 三 四 五 六 七 八 九 ・ 영 일 이 삼 사 오 육 칠 팔 구 ・ صفر واحد اثنان ثلاثة أربعة خمسة ستة سبعة ثمانية تسعة ・";
  
  return (
    <div className="bg-white text-[#F000B8] py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        <span className="text-lg font-poppins font-light uppercase mx-4">{numbers}</span>
        <span className="text-lg font-poppins font-light uppercase mx-4">{numbers}</span>
        <span className="text-lg font-poppins font-light uppercase mx-4">{numbers}</span>
        <span className="text-lg font-poppins font-light uppercase mx-4">{numbers}</span>
      </div>
    </div>
  );
};

export default MarqueeQuote;
