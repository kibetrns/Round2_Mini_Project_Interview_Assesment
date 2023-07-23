import React from 'react';

const GenericButton = ({ styles, name, onClick }) => {
  return (
    <button style={styles} onClick={onClick}>
      {name}
    </button>
  );
};

export default GenericButton;
