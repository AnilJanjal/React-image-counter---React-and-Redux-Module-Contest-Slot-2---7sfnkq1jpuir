import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {

  const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

  // Function to handle the click event and increase the dimensions
  const handleClick = () => {
    setDimensions({
      width: dimensions.width + 2,
      height: dimensions.height + 2,
    });
  };
  
  return (
    <div id="main">
      <img
        src={star}
        alt="Star"
        height={dimensions.height + 'px'}
        width={dimensions.width + 'px'}
        onClick={handleClick} // Attach the click event handler
      />
    </div>
  );
};


export default App;
