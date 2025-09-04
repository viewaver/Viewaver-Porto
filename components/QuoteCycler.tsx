import React, { useState, useEffect } from 'react';

const quotes = [
  { text: "Saya memiliki banyak ide di benak saya. Saya hanya mengikuti visi saya.", lang: "Indonesian" },
  { text: "I have many ideas in my head. I just follow my vision.", lang: "English" },
  { text: "J'ai beaucoup d'idées en tête. Je ne fais que suivre ma vision.", lang: "French" },
  { text: "私の頭の中にはたくさんのアイデアがあります。私はただ自分のビジョンに従うだけです。", lang: "Japanese" },
  { text: "Tengo muchas ideas en mi cabeza. Simplemente sigo mi visión.", lang: "Spanish" },
];

const QuoteCycler: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="text-right">
      <blockquote className="text-4xl italic text-gray-300">
        "{currentQuote.text}"
      </blockquote>
      <cite className="block not-italic text-gray-400 mt-4">- Yayoi Kusama</cite>
      <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">{currentQuote.lang}</p>
    </div>
  );
};

export default QuoteCycler;
