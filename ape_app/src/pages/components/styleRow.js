import React from 'react';

const StyleRow = ({ children }) => {
  return (
    <div className='stylerow flex flex-row items-center mb-1'>
      {children}
    </div>
  );
};

export default StyleRow;
