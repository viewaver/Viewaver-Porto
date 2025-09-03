import React, { useId } from 'react';

interface CircularTextProps {
  text: string;
  radius: number;
  size: number;
  fontSize: number;
  letterSpacing: number;
  animationDuration: string;
  reverse?: boolean;
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  radius,
  size,
  fontSize,
  letterSpacing,
  animationDuration,
  reverse = false,
}) => {
  const pathId = useId();
  const animationName = reverse ? 'rotate-reverse' : 'rotate';
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    animation: `${animationName} ${animationDuration} linear infinite`,
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={style}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <defs>
          <path
            id={pathId}
            d={`
              M 100, 100
              m -${radius}, 0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
            fill="transparent"
          />
        </defs>
        <text
          fill="white"
          fontSize={fontSize}
          fontWeight="300"
          letterSpacing={letterSpacing}
          className="uppercase"
        >
          <textPath href={`#${pathId}`}>
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircularText;
