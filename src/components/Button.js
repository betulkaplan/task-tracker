import React from 'react';

function Button({ color, text, handleClick }) {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
