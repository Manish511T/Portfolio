import React, { useEffect, useRef, useState } from 'react';

const intro = [
    '$ whoami',
    "> I'm Manish, a Computer Science Engineer with a passion for web development and real-world problem-solving.",
    '',
    "$ stack --current",
    '> JavaScript | React | Node.js | MongoDB | Tailwind CSS',
    '',
    '$ mission',
    '> Build clean, interactive, and scalable applications that create real impact.',
    'using namespace std;',
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
            // Loop reset logic
            const loopTimeout = setTimeout(() => {
                setDisplayedLines([]);
                setCurrentLine('');
                setLineIndex(0);
                setCharIndex(0);
            }, 2000); // Pause before restart
            return () => clearTimeout(loopTimeout);
        }
    }, [charIndex, lineIndex, currentLine]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [displayedLines, currentLine]);


    return (
        <div
            ref={terminalRef}
            className="terminal bg-black/30 text-green-400 font-mono text-sm p-5 rounded-lg h-65 w-150 overflow-y-auto  border-1 border-green-900"
        >
            {displayedLines.map((line, i) => (
                <div key={i}>{line}</div>
            ))}
            {lineIndex < intro.length && (
                <div>
                    {currentLine}
                    <span className="animate-pulse">_</span>
                </div>
            )}
        </div>
    )
}

export default Terminal