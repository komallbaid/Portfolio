import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function CandlestickChart() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientY / window.innerHeight - 0.5) * 20;
      const y = (e.clientX / window.innerWidth - 0.5) * 20;
      setRotation({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const candlesticks = [
    { high: 80, low: 40, open: 60, close: 70, positive: true },
    { high: 90, low: 50, open: 70, close: 55, positive: false },
    { high: 100, low: 60, open: 65, close: 95, positive: true },
    { high: 110, low: 75, open: 95, close: 85, positive: false },
    { high: 105, low: 70, open: 85, close: 100, positive: true },
  ];

  return (
    <motion.div
      className="relative w-64 h-64"
      style={{
        perspective: '1000px',
      }}
      animate={{
        rotateY: rotation.y,
        rotateX: rotation.x,
      }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {candlesticks.map((candle, i) => {
          const bodyHeight = Math.abs(candle.close - candle.open);
          const bodyBottom = Math.min(candle.open, candle.close);
          const wickTop = candle.high;
          const wickBottom = candle.low;

          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${i * 20 + 10}%`,
                bottom: 0,
                width: '15%',
                height: '100%',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Wick */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-white/30"
                style={{
                  bottom: `${wickBottom}%`,
                  height: `${wickTop - wickBottom}%`,
                  transform: 'translateX(-50%) translateZ(10px)',
                }}
              />
              
              {/* Body */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className={`absolute w-full ${
                  candle.positive ? 'bg-accent' : 'bg-chart-4'
                }`}
                style={{
                  bottom: `${bodyBottom}%`,
                  height: `${bodyHeight}%`,
                  boxShadow: candle.positive
                    ? '0 0 20px rgba(0, 255, 136, 0.6)'
                    : '0 0 20px rgba(255, 0, 128, 0.6)',
                  transform: 'translateZ(20px)',
                }}
              />

              {/* 3D depth faces */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className={`absolute w-full ${
                  candle.positive ? 'bg-accent/50' : 'bg-chart-4/50'
                }`}
                style={{
                  bottom: `${bodyBottom}%`,
                  height: `${bodyHeight}%`,
                  transform: 'translateZ(0px)',
                }}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}