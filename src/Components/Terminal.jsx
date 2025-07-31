import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
const intro = [
  '$ whoami',
  "> I'm Manish, a Computer Science Engineer with a passion for web development and real-world problem-solving.",
  '',
  '$ stack --current',
  '> JavaScript | React | Node.js | MongoDB | Tailwind CSS',
  '',
  '$ mission',
  '> Build clean, interactive, and scalable applications that create real impact.',
  '',
  '$ status',
  '> Currently sharpening my skills in advanced JavaScript and React architecture.',
  '',
  '$ hobbies',
  '> UI experiments, automating workflows, exploring design systems, and late-night coding jams.',
  '',
  '$ motto',
  '> "Think. Build. Break. Learn. Repeat."',
];

const Terminal = () => {

  useEffect(() => {
    gsap.fromTo(
      terminalRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
        filter: 'blur(5px)',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);
  const animationRef = useRef(null);


  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (lineIndex < intro.length) {
      const line = intro[lineIndex];
      if (charIndex < line.length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + line[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, currentLine]);
          setCurrentLine('');
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else {
      const loopTimeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine('');
        setLineIndex(0);
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(loopTimeout);
    }
  }, [charIndex, lineIndex, currentLine]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines, currentLine]);

  return (
    <div useRef={animationRef} className="w-150">
      {/* Terminal Wrapper */}
      <div className="rounded-xl w-full bg-black/40 shadow-2xl shadow-[#112C34] overflow-hidden">
        {/* Fake Header */}
        <div className="flex items-center gap-2 p-2 bg-black/20 border-b border-white/10">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          className="terminal font-mono text-sm text-green-300 p-5 h-84 overflow-y-auto scrollbar-thin scrollbar-thumb-green-400/50 scrollbar-track-transparent"
        >
          {displayedLines.map((line, i) => (
            <div key={i}>
              <span className={line.startsWith('$') ? 'text-cyan-400' : line.startsWith('>') ? 'text-white' : 'text-green-300'}>
                {line}
              </span>
            </div>
          ))}
          {lineIndex < intro.length && (
            <div>
              <span className={currentLine.startsWith('$') ? 'text-cyan-400' : currentLine.startsWith('>') ? 'text-white' : 'text-green-300'}>
                {currentLine}
              </span>
              <span className="animate-pulse text-white">_</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
