import React from 'react';

const Button = ({ children }) => {
  return (
    <button type="submit" className="btn btn-success">
      {children}
    </button>
  );
};

export default Button;
