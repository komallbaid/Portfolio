import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const codeSnippets = [
  `def predict_market_trend(data):`,
  `    model = TensorFlow.Model()`,
  `    features = preprocess(data)`,
  `    prediction = model.predict(features)`,
  `    return prediction`,
];

export function CodeAnimation() {
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine < codeSnippets.length) {
      const line = codeSnippets[currentLine];
      
      if (currentChar < line.length) {
        const timeout = setTimeout(() => {
          setDisplayedCode((prev) => {
            const newCode = [...prev];
            if (!newCode[currentLine]) {
              newCode[currentLine] = '';
            }
            newCode[currentLine] = line.slice(0, currentChar + 1);
            return newCode;
          });
          setCurrentChar((prev) => prev + 1);
        }, 50);
        
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
          setCurrentChar(0);
        }, 500);
        
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayedCode([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  return (
    <div className="p-6 rounded-lg bg-[#1a1a1c] border border-primary/30 font-mono text-sm shadow-[0_0_30px_rgba(0,212,255,0.2)]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-chart-4" />
        <div className="w-3 h-3 rounded-full bg-chart-5" />
        <div className="w-3 h-3 rounded-full bg-accent" />
      </div>
      <div className="space-y-1">
        {displayedCode.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex"
          >
            <span className="text-muted-foreground mr-4">{i + 1}</span>
            <span className="text-accent">{line}</span>
            {i === currentLine && currentChar < codeSnippets[currentLine]?.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-primary"
              >
                |
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}