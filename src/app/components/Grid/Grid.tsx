import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Grid.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiAzurefunctions,
  SiGit,
  SiPython,
  SiPytorch,
  SiPhp,
  SiDrupal,
  SiWordpress,
  SiGithubactions,
  SiPostgresql
} from 'react-icons/si';

const items = [
  { title: 'React', Icon: FaReact },
  { title: 'Node.js', Icon: FaNodeJs },
  { title: 'MongoDB', Icon: SiMongodb },
  { title: 'MySQL', Icon: SiMysql },
  { title: 'TypeScript', Icon: SiTypescript },
  { title: 'Next', Icon: SiNextdotjs },
  { title: 'Azure Functions', Icon: SiAzurefunctions },
  { title: 'Git', Icon: SiGit },
  { title: 'Python', Icon: SiPython },
  { title: 'PyTorch', Icon: SiPytorch },
  { title: 'PHP', Icon: SiPhp },
  { title: 'Drupal', Icon: SiDrupal },
  { title: 'WordPress', Icon: SiWordpress },
  { title: 'GitHub Actions', Icon: SiGithubactions },
  { title: 'PostgreSQL', Icon: SiPostgresql }
];

const initialTicTacToe = Array(items.length).fill(null);

const Grid = () => {
  const [ticTacToe, setTicTacToe] = useState(initialTicTacToe);
  const [isX, setIsX] = useState(true);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);

  const handleSelect = (index: number) => {
    const newTicTacToe = [...ticTacToe];
    if (newTicTacToe[index]) return;
    newTicTacToe[index] = isX ? 'X' : 'O';
    setTicTacToe(newTicTacToe);
    setIsX(!isX);
  }

  const getClassName = (index: number) => {
    if (ticTacToe[index] === 'X') {
      return 'grid-item-x';
    }
    if (ticTacToe[index] === 'O') {
      return 'grid-item-o';
    }
    return '';
  }

  const generateWinConditions = useCallback((rows: number, cols: number) => {
      const winConditions = [];
      // Horizontal win conditions
      for (let row = 0; row < rows; row++) {
          for (let col = 0; col <= cols - 3; col++) {
              winConditions.push([row * cols + col, row * cols + col + 1, row * cols + col + 2]);
          }
      }
      // Vertical win conditions
      if (rows >= 3) {
          for (let col = 0; col < cols; col++) {
              for (let row = 0; row <= rows - 3; row++) {
                  winConditions.push([row * cols + col, (row + 1) * cols + col, (row + 2) * cols + col]);
              }
          }
      }
      // Diagonal win conditions
      if (rows >= 3 && cols >= 3) {
          // Left-to-right diagonals
          for (let row = 0; row <= rows - 3; row++) {
              for (let col = 0; col <= cols - 3; col++) {
                  winConditions.push([row * cols + col, (row + 1) * cols + col + 1, (row + 2) * cols + col + 2]);
              }
          }
          // Right-to-left diagonals
          for (let row = 0; row <= rows - 3; row++) {
              for (let col = cols - 1; col >= 2; col--) {
                  winConditions.push([row * cols + col, (row + 1) * cols + col - 1, (row + 2) * cols + col - 2]);
              }
          }
      }

      return winConditions;
  }, []);

  const rows = useMemo(() => Math.ceil(items.length / 3), []);
  const cols = 3;
  const winConditions = generateWinConditions(rows, cols);

  const checkWin = useCallback(() => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (ticTacToe[a] && ticTacToe[a] === ticTacToe[b] && ticTacToe[a] === ticTacToe[c]) {
        const winner = ticTacToe[a];
        setTimeout(() => {
          if (winner === 'X') {
            setXWins(prevXWins => prevXWins + 1);
          } else {
            setOWins(prevOWins => prevOWins + 1);
          }
          setTicTacToe(initialTicTacToe);
          setIsX(winner !== 'X');
        }, 200);
        return;
      }
    }
  }, [ticTacToe, winConditions]);

useEffect(() => {
  checkWin();
}, [ticTacToe, checkWin]);


  const hidden = () => {
    if (xWins === 0 && oWins === 0) {
      return 'hidden';
    }
  }

  return (
    <div className="grid">
      {items.map(({ title, Icon }, index) => (
        <div key={index} className={`grid-item ${getClassName(index)}`} onClick={() => handleSelect(index)}>
          <Icon size="10vh" />
        </div>
      ))}
      <div className={`win-count ${hidden()}`}>
        <p>{xWins} - {oWins}</p>
      </div>
    </div>
  );
};

export default Grid;
