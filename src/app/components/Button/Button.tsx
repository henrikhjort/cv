import React from 'react';
import './Button.css';

type ButtonProps = {
  title: string;
  url?: string;
  file?: string;
}

const Button = ({ title, url, file }: ButtonProps) => {
  // Decide what the href should be based on if file is provided or not
  const href = file || url;

  return (
    <div className="button">
      {/* If file is provided, use the download attribute, otherwise just navigate to the URL */}
      <a href={href} download={file ? true : undefined} target="_blank" rel="noreferrer">
        {title}
      </a>
    </div>
  );
};

export default Button;
