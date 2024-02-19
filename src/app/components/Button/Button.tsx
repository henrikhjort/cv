import React from 'react';
import './Button.css';

// just walk away
type Any = any;

type ButtonProps = {
  title: string;
  url?: string;
  file?: string;
  onClick?: (param?: Any) => void;
}

const Button = ({ title, url, file, onClick }: ButtonProps) => {
  // Decide what the href should be based on if file is provided or not
  const href = file || url;

  return (
    <button className="button" onClick={onClick}>
      {/* If file is provided, use the download attribute, otherwise just navigate to the URL */}
      <a href={href} download={file ? true : undefined} target="_blank" rel="noreferrer">
        {title}
      </a>
    </button>
  );
};

export default Button;
