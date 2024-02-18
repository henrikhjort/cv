import React from 'react';
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

const Grid = () => {
  return (
    <div className="grid">
      {items.map(({ title, Icon }) => (
        <div key={title} className="grid-item">
          <Icon size="10vh" />
        </div>
      ))}
    </div>
  );
};

export default Grid;
